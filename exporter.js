#target illustrator

/**
 * Export layer paths to JSON formatted for Getty map view.
 */
var Exporter = function() {
    if (app.documents.length === 0) return;

    this.document = app.activeDocument;
    this.artboard.width = this.document.artboards[0].artboardRect[2];
    this.artboard.height = this.document.artboards[0].artboardRect[1];

    this.readLayers();
};

Exporter.prototype = {
    document: {},
    artboard: {
        width: 0,
        height: 0
    },
    layers: [],
    output: "[\n"
};

/**
 * Read each layer in document
 */
Exporter.prototype.readLayers = function() {
    var layerCount = this.document.layers.length;
    var layer;
    var i;

    for (i = 0; i < layerCount; i++) {
        layer = this.document.layers[i];

        // Skip if hidden
        if (!layer.visible) continue;

        // Skip if no paths
        if (layer.pathItems.length === 0) continue;

        // Open JSON object
        this.output += "\t" + '{' + "\n";
        this.output += "\t\t" + '"name": "' + layer.name + '",' + "\n";

        // Add layer points
        this.readLayerItems(layer);

        // Close JSON object
        this.output += "\t" + '}';

        // Add comma unless last item
        this.output += i < layerCount - 1 ? ",\n" : "\n";
    }

    this.writeOut();
};

Exporter.prototype.readLayerItems = function(layer) {
    var itemCount = layer.pathItems.length;
    var path;
    var i;

    // Open points array
    this.output += "\t\t" + '"points": [' + "\n";

    for (i = 0; i < itemCount; i++) {
        this.readItemPoints(layer.pathItems[i]);

        // Add comma unless last item
        if (i < itemCount - 1) this.output += ',';
    }

    // Close points array
    this.output += "\t\t" + ']' + "\n";
};

Exporter.prototype.readItemPoints = function(item) {
    var pointCount = item.pathPoints.length;
    var anchorX;
    var anchorY;
    var i;

    // Skip if hidden
    if (item.hidden) return;

    // Loop through points
    for (i = 0; i < pointCount; i++) {
        anchorX = item.pathPoints[i].anchor[0];
        anchorY = this.artboard.height - item.pathPoints[i].anchor[1];

        // Illustrator paths are specified relative to the lower-left corner of the artboard.
        this.output += "\t\t\t\t[" + anchorX + ', ' + anchorY + ']';

        // Add comma unless last item
        this.output += i < pointCount - 1 ? ",\n" : "\n";
    }
};

/**
 * Illustrator paths are specified relative to the lower-left corner of the artboard.
 * We want coordinates based off the upper-right, so let's convert.
 */
Exporter.prototype.recalculatePoint = function(point) {
    point.anchor[1] = this.artboard.height - point.anchor[1];
    return point;
};

Exporter.prototype.writeOut = function() {
    var file = File.saveDialog('Export', 'export:*.txt');
    file.open('w');

    // Close output array
    this.output += ']';

    file.write(this.output);
    file.close();
};

Exporter.prototype.log = function(msg) {
    $.writeln(msg);
};

new Exporter();
