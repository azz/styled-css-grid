# lucas.js

> A lightweight [CSS grid] layout for React, built with [styled-components] 💅.

## demo

See the **[website]**.

## installation

Install React and [styled-components], then:

```bash
$ yarn add lucas.js
```

## usage

```jsx
import React from "react";
import { Grid, Cell } from "lucas.js"

const MyGrid = () => (
  <Grid columns={2} gap={2}>
    <Row>foo</Row>
    <Row height={2}>bar</Row>
    <Row>baz</Row>
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

* `columns`: Number of columns to draw, default is `3`.
* `gap`: Gap between cells. Default is `"8px"`.
* `minRowHeight`: Minimum height of each row. Default is `"20vh"`.

[website]: https://lucasjs.netlify.com/
[CSS grid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
[styled-components]: https://github.com/styled-components/styled-components
