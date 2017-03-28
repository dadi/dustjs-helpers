# DADI Dust.js helpers

[![npm (scoped)](https://img.shields.io/npm/v/@dadi/dustjs-helpers.svg?maxAge=10800&style=flat-square)](https://www.npmjs.com/package/@dadi/dustjs-helpers)
[![coverage](https://img.shields.io/badge/coverage-78%25-yellow.svg?style=flat?style=flat-square)](https://github.com/dadi/dustjs-helpers)
[![Build Status](https://travis-ci.org/dadi/dustjs-helpers.svg?branch=master)](https://travis-ci.org/dadi/dustjs-helpers)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

> A collection of Dust.js helpers used in DADI+ projects.

## Install

```
npm install @dadi/dustjs-helpers --save
```

## Load the helpers

```js
/* app/utils/helpers/loader.js */

// first, a reference to the loaded pages and routes within your application
var components = require('@dadi/web').Components

// also, a reference to the Dust template module inside DADI Web
var dust = require('@dadi/web').Dust

// Load DADI helpers
require('@dadi/dustjs-helpers')(dust.getEngine(), { components: components })
```

## More helpers

We also recommend including the common DustJS helpers from https://github.com/rodw/common-dustjs-helpers.

```
npm install common-dustjs-helpers --save
```

Add the following to your `loader.js` file

```js
// Load common-dustjs-helpers
var commonDustHelpers = require('common-dustjs-helpers')
new commonDustHelpers.CommonDustjsHelpers().export_helpers_to(dust.getEngine())
```

## Development

1. Clone this repository
2. Make your changes to `dadi-dustjs-helpers.js`
3. Add your tests to `test/test.js`
4. Run test suite

   ```
   npm test
   ```
5. Build minified file

   ```
   npm run build
   ```
