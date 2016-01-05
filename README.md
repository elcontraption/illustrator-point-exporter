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
            [158.640014648438, 208.299987792969],
            [209, 158.080001831055],
            [260.72998046875, 209.860000610352],
            [312.509979248047, 158.080001831055],
            [362.769989013672, 208.339996337891],
            [260.640014648438, 310.429992675781]
        ]
    },
    {
        "name": "Layer 1",
        "points": [
            [364.190002441406, 2.82999992370605],
            [414.559997558594, 53.2000007629395],
            [364.199981689453, 103.569999694824],
            [313.829986572266, 53.2000007629395]
        ]
    }
]
```
