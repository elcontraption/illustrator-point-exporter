var JSON = require('JSON2');

/* globals $, app */

var Exporter = function () {
    if (app.documents.length === 0) return;

    this.document = app.activeDocument;

    this.readLayers();
    this.writeFile();
};

Exporter.prototype = {
    document: {},
    output: {
        layers: []
    }
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

        // Skip if hidden
        if (layer.hidden) continue;

        // Skip if no paths
        if (layer.pathItems.length === 0) continue;

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
    var anchorX;
    var anchorY;
    var i;

    if (path.hidden) return;

    for (i = 0; i < pointCount; i++) {
        anchorX = path.pathPoints[i].anchor[0];
        anchorY = this.document.artboards[0].artboardRect[1] - path.pathPoints[i].anchor[1];
        points.push([anchorX, anchorY]);
    }

    return points;
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
