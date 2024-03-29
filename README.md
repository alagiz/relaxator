# relaxator

relax yourself by looking at colorful abstractions => [http://artem-alagizov.com/relaxator](http://artem-alagizov.com/relaxator)

relaxator is based on [particalizor-3000](https://github.com/ArtemAlagizov/particalizor-3000)

[![build status][build badge]][BUILD_URL]
[![coverage status][coverage badge]][COVERAGE_URL]
[![codacy quality status][quality badge]][QUALITY_URL]
[![license][license badge]][LICENSE_URL]

## usage
* open [http://artem-alagizov.com/relaxator](http://artem-alagizov.com/relaxator)
* relax yourself by looking at colorful abstractions with your eyes
* change parameters to alter the abstractions (described below)

## api

### setting parameters
parameters can be passed in using url query params:
```ифыр
http://artem-alagizov.com/relaxator?particleTraceWidth=40&vortexNumber=6
```
_NOTE_: parameters can be played with here (particle vortex) => [particalizor-3000-showcase](http://artem-alagizov.com/particalizor-3000-showcase)

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

[MIT License](https://github.com/ArtemAlagizov/relaxator/blob/master/LICENSE)

[LICENSE_URL]: https://github.com/ArtemAlagizov/relaxator/blob/master/LICENSE
[license badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&color=blue
[BUILD_URL]: https://travis-ci.org/ArtemAlagizov/relaxator
[build badge]: https://img.shields.io/travis/ArtemAlagizov/relaxator/master?style=flat-square
[COVERAGE_URL]: https://coveralls.io/github/ArtemAlagizov/relaxator?branch=master
[coverage badge]: https://img.shields.io/coveralls/github/ArtemAlagizov/relaxator.svg?style=flat-square&color=brightgreen
[QUALITY_URL]: https://www.codacy.com/gh/ArtemAlagizov/relaxator
[quality badge]: https://img.shields.io/codacy/grade/2d206da3e6d74d09b0d0de19932b6d98?style=flat-square
