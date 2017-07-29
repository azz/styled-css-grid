# `styled-css-grid`

[![Travis](https://img.shields.io/travis/azz/styled-css-grid.svg?style=flat-square)](https://travis-ci.org/azz/styled-css-grid)
[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/styled-css-grid.svg?style=flat-square)](https://npmjs.org/styled-css-grid)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

> A tiny (~2kb) [CSS grid] layout for React, built with [styled-components] 💅.

## demo

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

### `Grid`

Wrap your cells in `Grid`. Pretty simple.

Props:

* `columns`: Number of columns to draw, default is `12`.
* `gap`: Gap between cells. Default is `"8px"`.
* `minRowHeight`: Minimum height of each row. Default is `"20px"`.

[website]: https://styled-css-grid.netlify.com/
[CSS grid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
[styled-components]: https://github.com/styled-components/styled-components
