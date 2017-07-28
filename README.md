# lucas.js

> A lightweight [CSS grid] layout for React, built with [styled-components] 💅.

## demo

* [Codepen demo](https://codepen.io/derflat/pen/QpaNMy)

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

[CSS grid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
[styled-components]: https://github.com/styled-components/styled-components
