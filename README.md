# Illlustrator: point coordinate exporter
JSON exporter for Adobe Illustrator: get point coordinates from paths by layer.

Work in progress. Right now this only works with polygons.

## Usage
1. Clone/download this repo locally.
2. In Illustrator, File > Scripts > Other Script and locate exporter.js.
3. Name and save your JSON export.

## Example output

```json
[
    {
        "name": "Layer 2",
        "points": [
            [187.333333333337, 382.093343098958],
            [159.66666666667, 302.426676432291],
            [270.333333333337, 283.426676432291],
            [275.000000000004, 344.093343098958],
            [246.000000000004, 406.760009765624]
        ]
    },
    {
        "name": "Layer 1",
        "points": [
            [364.190002441406, 516.930009841919],
            [414.559997558594, 466.560009002686],
            [364.199981689453, 416.190010070801],
            [313.829986572266, 466.560009002686]
        ]
    }
]
```
