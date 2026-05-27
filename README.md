# relaxator

relax yourself by looking at colorful abstractions

relaxator is based on [particalizor-3000](https://github.com/alagiz/particalizor-3000)

[![license][license badge]][LICENSE_URL]

## usage
* run locally and open the app in the browser
* relax yourself by looking at colorful abstractions with your eyes
* change parameters to alter the abstractions (described below)

## api

### setting parameters
parameters can be passed in using url query params:
```
?particleTraceWidth=40&vortexNumber=6
```

### supported parameters
the following parameters are supported:
| property            |type  |required|default    |acceptable values|description                                      |
| --------------------|------|--------|-----------|--------|----------------------------------------------------------|
| particleNumber      |number|no      | 30        |  > 0   | number of particles                                      |
| particleTraceWidth  |number|no      | 600       |  > 0|width of a particle trace, essentially [canvas lineWidth](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth)                                 |
| particleLifeTime    |number|no      | 1100      | > 0| lifetime of a particle                                       |
| vortexNumber        |number|no      | 3         | > 0| number of vortexes                                           |
| backgroundColor     |string|no      | "#33344c" | valid color string| background color, for hex color codes **"#"** needs to be replaced with **"%23"**, valid examples => "red", "%23333", "%23333333" |

## license

[MIT License](https://github.com/alagiz/relaxator/blob/master/LICENSE)

[LICENSE_URL]: https://github.com/alagiz/relaxator/blob/master/LICENSE
[license badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&color=blue
