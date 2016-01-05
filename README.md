# Illlustrator: point coordinate exporter
JSON exporter for Adobe Illustrator: get point coordinates from paths by layer.

As of now this only works with polygons.

- [Usage](#usage)
- [Example output](#example-output)
- [Contributing](#contributing)

## Usage
1. Clone/download this repo locally.
2. In Illustrator, File > Scripts > Other Script and locate [`dist/exporter.js`](dist/exporter.js).
3. Name and save your JSON export.

## Example output

This Illustrator file:
![Example image](example.ai)

Will produce this JSON (pretty printed here for clarity):
```json
{
  "layers": [
    {
      "name": "Polygon",
      "paths": [
        {
          "points": [
            [
              147.188583099185,
              255.177953406273
            ],
            [
              94.377166198371,
              163.705896114361
            ],
            [
              147.188583099185,
              72.2338388224471
            ],
            [
              252.811416900817,
              72.2338388224471
            ],
            [
              305.62283380163,
              163.705896114361
            ],
            [
              252.811416900817,
              255.177953406273
            ]
          ]
        }
      ]
    },
    {
      "name": "Path",
      "paths": [
        {
          "points": [
            [
              34.0506912442397,
              258.585253456222
            ],
            [
              122.069124423963,
              342.917050691245
            ],
            [
              170.456221198157,
              289.921658986175
            ],
            [
              122.529953917051,
              238.308755760369
            ],
            [
              155.709677419355,
              202.364055299538
            ]
          ]
        }
      ]
    },
    {
      "name": "Rectangles",
      "paths": [
        {
          "points": [
            [
              352.483870967742,
              363.193548387097
            ],
            [
              232.207373271889,
              363.193548387097
            ],
            [
              232.207373271889,
              150.751152073732
            ],
            [
              352.483870967742,
              150.751152073732
            ]
          ]
        },
        {
          "points": [
            [
              136.815668202765,
              131.396313364055
            ],
            [
              54.7880184331798,
              131.396313364055
            ],
            [
              54.7880184331798,
              49.3686635944705
            ],
            [
              136.815668202765,
              49.3686635944705
            ]
          ]
        }
      ]
    }
  ]
}
```

## Contributing

Clone this repo, install dependencies, run `build` script:

```sh
$ npm install
$ npm run build
```

Work on [`src/exporter.js`](src/exporter.js).
