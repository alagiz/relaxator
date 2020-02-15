# relaxator

relax yourself by looking at colorful abstractions => [http://artem-alagizov.com/relaxator](http://artem-alagizov.com/relaxator)

relaxator is based on [particalizor-3000](https://github.com/ArtemAlagizov/particalizor-3000)

[![build status][build badge]][BUILD_URL]
[![coverage status][coverage badge]][COVERAGE_URL]
[![codacy quality status][quality badge]][QUALITY_URL]
[![license][license badge]][LICENSE_URL]

## usage
* open [http://artem-alagizov.com/relaxator](http://artem-alagizov.com/relaxator)
* relax yourself
* change parameters to see different shapes (described below)

## api

### setting parameters
parameters can be passed in using url query params:
```http
http://artem-alagizov.com/relaxator?particle-trace-width=40&vortex-number=6
```

### supported parameters
the following parameters are supported:
| property            |type  |required|default    |acceptable values|description                                      |
| --------------------|------|--------|-----------|--------|----------------------------------------------------------|
| particle-number     |number|no      | 30        |  > 0   | number of particles                                      |
| particle-trace-width|number|no      | 600       |  > 0|width of a particle trace, essentially [canvas lineWidth](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth)                                 |
| particle-life-time  |number|no      | 1100      | > 0| lifetime of a particle                                       |
| vortex-number       |number|no      | 3         | > 0| number of vortexes                                           |
| background-color    |string|no      | "#33344c" | valid color string| background color, ie "red", "#333", "#333333" |

## license

[MIT License](LICENSE_URL)

[LICENSE_URL]: https://github.com/ArtemAlagizov/relaxator/blob/master/LICENSE
[license badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&color=blue
[BUILD_URL]: https://travis-ci.org/ArtemAlagizov/relaxator
[build badge]: https://img.shields.io/travis/ArtemAlagizov/relaxator/master?style=flat-square
[COVERAGE_URL]: https://coveralls.io/github/ArtemAlagizov/relaxator?branch=master
[coverage badge]: https://img.shields.io/coveralls/github/ArtemAlagizov/relaxator.svg?style=flat-square&color=brightgreen
[QUALITY_URL]: https://www.codacy.com/manual/ArtemAlagizov/relaxator
[quality badge]: https://img.shields.io/codacy/grade/bc78b6ad64854bbebfa9da7c98943418?style=flat-square
