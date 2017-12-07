# Illlustrator Point Exporter
Export [x, y] anchor point coordinates as JSON from Adobe Illustrator.

- Points are organized by path and layer.
- Nested layers are supported.
- Layer, path, or point names are preserved in the output.

- [Usage](#usage)
- [Example output](#example-output)
- [Contributing](#contributing)

Tested on versions 19.2.0, 21.1.0.

## Usage
1. Clone/download this repo locally.
2. In Illustrator, File > Scripts > Other Script and locate [`dist/exporter.js`](dist/exporter.js).
3. Name and save your JSON export.

## Example output
This [Illustrator file](test/test.ai):

![Example image](test/test.png)

Will produce this JSON (pretty-printed here for clarity):
```json
{
  "layers": [
    {
      "name": "Level 1 layer",
      "layers": [
        {
          "name": "Polygons",
          "paths": [
            {
              "name": "Hexagon",
              "points": [
                [
                  203.620465653063,
                  284.760368663594
                ],
                [
                  158.692544209353,
                  206.942926044627
                ],
                [
                  203.620465653063,
                  129.125483425658
                ],
                [
                  293.476308540483,
                  129.125483425658
                ],
                [
                  338.404229984191,
                  206.942926044627
                ],
                [
                  293.476308540483,
                  284.760368663594
                ]
              ]
            },
            {
              "name": "Rectangle",
              "points": [
                [
                  330.57603686636,
                  328.539170506912
                ],
                [
                  127.811059907835,
                  328.539170506912
                ],
                [
                  127.811059907835,
                  254.806451612902
                ],
                [
                  330.57603686636,
                  254.806451612902
                ]
              ]
            },
            {
              "name": "Square",
              "points": [
                [
                  134.26267281106,
                  156.188940092165
                ],
                [
                  38.8709677419356,
                  156.188940092165
                ],
                [
                  38.8709677419356,
                  60.7972350230411
                ],
                [
                  134.26267281106,
                  60.7972350230411
                ]
              ]
            }
          ]
        },
        {
          "name": "Level 2 layer",
          "layers": [
            {
              "name": "Level 3 layer",
              "layers": [
                {
                  "name": "Paths",
                  "paths": [
                    {
                      "name": "Squiggle",
                      "points": [
                        [
                          350.391705069123,
                          49.2764976958515
                        ],
                        [
                          254.539170506911,
                          117.47926267281
                        ],
                        [
                          234.262672811059,
                          235.451612903225
                        ],
                        [
                          80.8064516129016,
                          195.359447004607
                        ],
                        [
                          64.2165898617495,
                          310.566820276497
                        ]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Points",
              "paths": [
                {
                  "name": "Point 1",
                  "points": [
                    [
                      294.631336405528,
                      230.843317972349
                    ]
                  ]
                },
                {
                  "name": "Point 2",
                  "points": [
                    [
                      269.7465437788,
                      60.7972350230411
                    ]
                  ]
                },
                {
                  "name": "Point 3",
                  "points": [
                    [
                      200,
                      151.119815668202
                    ]
                  ]
                }
              ]
            }
          ],
          "paths": [
            {
              "name": "Star",
              "points": [
                [
                  118.474654377878,
                  381.907834101381
                ],
                [
                  81.8829964485049,
                  338.881193167344
                ],
                [
                  25.6943079861912,
                  344.632066924605
                ],
                [
                  55.3076310682682,
                  296.535368949346
                ],
                [
                  32.4749654805391,
                  244.873868368682
                ],
                [
                  87.3686635944687,
                  258.175115207372
                ],
                [
                  129.445988669805,
                  220.495678181436
                ],
                [
                  133.758836790312,
                  276.81299879576
                ],
                [
                  182.596719430278,
                  305.187326617433
                ],
                [
                  130.368508043138,
                  326.692098073721
                ]
              ]
            }
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

Useful references: 
- [Scripting for Illustrator Tutorial](https://github.com/jtnimoy/scripting-for-illustrator-tutorial)
- [Illustrator Scripting Guide](http://www.adobe.com/devnet/illustrator/scripting.html)
- [Illustrator Scripting References (PDFs)](reference/)
