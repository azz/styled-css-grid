# `styled-css-grid 🍱`

[![Travis](https://img.shields.io/travis/azz/styled-css-grid.svg?style=flat-square)](https://travis-ci.org/azz/styled-css-grid)
[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/styled-css-grid.svg?style=flat-square)](https://npmjs.org/styled-css-grid)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![JS.ORG](https://img.shields.io/badge/js.org-dns-ffb400.svg?style=flat-square)](http://js.org)

> A tiny (~2kb) [CSS grid] layout for React, built with [styled-components] 💅.

## examples

See the **[website]**.

## installation

Install React and [styled-components], then:

```bash
$ yarn add styled-css-grid
```

## usage

```jsx
import React from "react";
import { Grid, Cell } from "styled-css-grid";

const MyGrid = () => (
  <Grid columns={2} gap="2px">
    <Cell>foo</Cell>
    <Cell height={2}>bar</Cell>
    <Cell width={2}>baz</Cell>
  </Grid>
);
```

## api

### `Cell`

A cell. Not too much to say...

Props:

* `width`: Cell width in units, default is `1`.
* `height`: Cell height in units, default is `1`.
* `left`: The [grid-column-start] CSS property. Not provided by default.
* `top`: The [grid-row-start] CSS property. Not provided by default.
* `middle`: Vertically align the contents of the cell. Default is `false`.
* `center`: Horizontally align the text contents of the cell. Default is `false`.
* `area`: The [grid-area] CSS property. Not provided by default.

### `Grid`

Wrap your cells in `Grid`. Pretty simple.

Props:

* `columns`: The [grid-template-columns] CSS property. When a number is passed
  it is a shorthand to specify the number of columns. Default is `12`.
* `gap`: Gap between cells. Default is `"8px"`.
* `minRowHeight`: Minimum height of each row. Default is `"20px"`.
* `flow`: The [grid-auto-flow] CSS property. Default is `"row"`.
* `rows`: The [grid-template-rows] CSS property. Not provided by default.
* `areas`: The [grid-template-areas] CSS property. Pass an array of strings, e.g. `["a a", "b c"]`. Not provided by default.
* `justifyContent`: The [justify-content] CSS property. Not provided by default.
* `alignContent`: The [align-content] CSS property. Not provided by default.

## browser support

_[caniuse]_

You can use CSS grid in production _today_ **if** you don't need to support IE and Edge, or you're building tooling or internal sites where you only need to support one browser.

You can use CSS grid _soon_ if you have to support the latest version of modern browsers. Edge 16 will implement the latest CSS grid spec.

![Can I use?](website/caniuse.png)

[website]: https://styled-css-grid.js.org/
[CSS grid]: https://mdn.io/CSS_Grid_Layout
[styled-components]: https://github.com/styled-components/styled-components
[grid-auto-flow]: https://mdn.io/grid-auto-flow
[grid-row-start]: https://mdn.io/grid-row-start
[grid-column-start]: https://mdn.io/grid-column-start
[grid-template-columns]: https://mdn.io/grid-template-columns
[grid-template-rows]: https://mdn.io/grid-template-rows
[grid-template-areas]: https://mdn.io/grid-template-areas
[grid-area]: https://mdn.io/grid-area
[justify-content]: https://mdn.io/justify-content
[align-content]: https://mdn.io/align-content
[caniuse]: http://caniuse.com/#feat=css-grid
