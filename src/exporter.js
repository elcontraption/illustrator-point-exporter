var JSON = require('JSON2');

/* globals $, app */

var Exporter = function () {
    if (app.documents.length === 0) return;

    this.document = app.activeDocument;
    this.getArtboardInfo();

    this.readLayers();
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

    this.artboard.x = artboard.artboardRect[0];
    this.artboard.y = artboard.artboardRect[1];

    // Width is based on artboard x value
    this.artboard.w = Math.abs(artboard.artboardRect[2] - this.artboard.x);

    // Height is based on artboard y value
    this.artboard.h = Math.abs(artboard.artboardRect[3] - this.artboard.y);
};

/**
 * Read each layer within the document
 */
Exporter.prototype.readLayers = function () {
    var layerCount = this.document.layers.length;
    var layer;
    var i;

    for (i = 0; i < layerCount; i++) {
        layer = this.document.layers[i];

        // Skip if locked, hidden, or no paths
        if (layer.hidden || layer.locked || layer.pathItems === 0) continue;

        this.output.layers.push({
            name: layer.name,
            paths: this.readLayerPaths(layer)
        });
    }
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

        paths.push({
            name: path.name || path.typename,
            points: this.readPathPoints(path)
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
    $.writeln(out);
};

/* eslint-disable no-new */
new Exporter();
