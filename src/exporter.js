var JSON = require('JSON2');
var polygon = require('d3-polygon');

/* globals $, app */

var Exporter = function () {
    if (app.documents.length === 0) return;

    this.document = app.activeDocument;
    this.getArtboardInfo();

    this.output.layers = this.readLayers(this.document);
    this.writeFile();
};

Exporter.prototype = {
    document: {},
    artboard: { x: 0, y: 0, w: 0, h: 0 },
    output: {
        layers: []
    }
};

/**
 * Get information about the artboard
 */
Exporter.prototype.getArtboardInfo = function () {
    var artboardIndex = this.document.artboards.getActiveArtboardIndex();
    var artboard = this.document.artboards[artboardIndex];

    this.artboard.x += artboard.artboardRect[0];
    this.artboard.y += artboard.artboardRect[1];

    // Width is based on artboard x value
    this.artboard.w = Math.abs(artboard.artboardRect[2] - this.artboard.x);

    // Height is based on artboard y value
    this.artboard.h = Math.abs(artboard.artboardRect[3] - this.artboard.y);
};

/**
 * Read each layer within an object
 *
 * @param {object} object
 */
Exporter.prototype.readLayers = function (object) {
    var layerCount = object.layers.length;
    var layers = [];
    var layerObject;
    var layer;
    var i;

    for (i = 0; i < layerCount; i++) {
        layer = object.layers[i];
        layerObject = {};

        // Skip if locked or hidden
        if (layer.locked || !layer.visible) continue;

        layerObject.name = layer.name;
        layerObject.zOrderPosition = layer.zOrderPosition;

        // Check for sub-layers
        if (layer.layers.length) {
            layerObject.layers = this.readLayers(layer);
        }

        // Check for paths
        if (layer.pathItems.length > 0) {
            layerObject.paths = this.readLayerPaths(layer);
        }

        layers.push(layerObject);
    }

    return layers;
};

/**
 * Read each path within a layer
 *
 * @param  {object} layer
 * @return {array}
 */
Exporter.prototype.readLayerPaths = function (layer) {
    var pathCount = layer.pathItems.length;
    var paths = [];
    var path = {};
    var i;

    for (i = 0; i < pathCount; i++) {
        path = layer.pathItems[i];

        // Skip if locked or hidden
        if (path.locked || path.hidden) continue;

        var points = this.readPathPoints(path);

        paths.push({
            name: path.name || path.typename,
            area: path.area,
            points: points,
            centroid: polygon.polygonCentroid(points)
        });
    }

    return paths;
};

/**
 * Read each point set within a path
 *
 * @param  {object} path
 * @return {array}
 */
Exporter.prototype.readPathPoints = function (path) {
    var pointCount = path.pathPoints.length;
    var points = [];
    var i;

    if (path.hidden) return;

    for (i = 0; i < pointCount; i++) {
        points.push(this.getPointAnchorSet(path.pathPoints[i]));
    }

    return points;
};

/**
 * Adjusts anchor coordinates relative to the artboard position
 * within the document. Returns an anchor array.
 *
 * @param  {object} point
 * @return {array}
 */
Exporter.prototype.getPointAnchorSet = function (point) {
    var anchorX = point.anchor[0];
    var anchorY = point.anchor[1];

    anchorX = Math.abs(anchorX - this.artboard.x);
    anchorY = Math.abs(anchorY - this.artboard.y);

    return [anchorX, anchorY];
};

/**
 * Write JSON to file
 */
Exporter.prototype.writeFile = function () {
    var file = File.saveDialog('Export');

    if (!file) return;

    file.open('w');
    file.write(JSON.stringify(this.output));
    file.close();
};

/**
 * Log to ExtendScript console for debugging
 *
 * @param  {*} out
 */
Exporter.prototype.log = function (out) {
    if (typeof out === 'object') {
        out = JSON.stringify(out, null, 4);
    }

    $.writeln(out);
};

/* eslint-disable no-new */
new Exporter();
