
# data-dictionary

A node-friendly RESO Data Dictionary.
Used by [Retsly](https://rets.ly/) for our Web API.

## What is this?

The [Real Estate Standards Organization](http://reso.org/) (RESO) has defined a standard schema for real estate advertising data called the [Data Dictionary](http://www.reso.org/data-dictionary). The goal is to allow interoperability between vendors that work with real estate data.

This repo provides the Data Dictionary as described in [RESO Data Dictionary 1.3 - Production Release](http://www.reso.org/data-dictionary-1-3), with Core fields as
defined in [Certification Rules v1.0.1a (pdf)](http://www.reso.org/assets/Certifications/resodatadictionarycertificationrules_v1.0.1a.pdf).

## Install

For use with node and browserify projects, install using [npm](https://npmjs.org):

    $ npm install retsly/data-dictionary

Otherwise you can clone the project with git:

    $ git clone https://github.com/retsly/data-dictionary.git

## Usage

The schemas may be used with [Mongoose](http://mongoosejs.com/) and
[mschema](https://github.com/mschema/mschema):

```js
var schema = require('data-dictionary').property
var mongoose = require('mongoose')
var Property = mongoose.model(schema)

var ppty = new Property({ /*...*/ })
```

## Generating schemas

The schemas are generated from the source data dictionary files in
Excel format ([available on reso.org](http://www.reso.org/data-dictionary-1-3)).

By default, the generate script expects the file to be at `src/dd.xlsx`,
but you can place it anywhere and set the `FILE` environment variable.
One done, run the script:

    $ bin/all

## Repo owner

[Luke Vivier](https://github.com/lvivier)

## License

(The MIT License)

Copyright (c) 2014 Retsly Software Inc <support@rets.ly>

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the 'Software'),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
