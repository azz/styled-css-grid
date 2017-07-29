import { Grid, Cell } from "../";
import React from "react";

const THREE_COL_WIDTH = 730;

export default class WebsiteGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { columns: 3 };
    this._onResize = this._onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this._onResize, { passive: true });
    this._onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._onResize);
  }

  _onResize() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    const columns = width < THREE_COL_WIDTH ? 4 : 6;
    this.setState({ columns });
  }

  render() {
    const { columns } = this.state;
    return (
      <Grid columns={columns} minRowHeight="20vh">
        <Cell width={4} height={2} className="cell color--1">
          Build interesting layouts 👀
        </Cell>
        <Cell width={2} height={4} className="cell color--2">
          Making this in old-school CSS would make you 😢
        </Cell>
        <Cell width={2} height={4} className="cell color--3">
          Making this is effortless 🤷
        </Cell>
        <Cell width={2} height={2} className="cell color--4">
          <span>
            <code>styled-css-grid</code> ⭐
          </span>
        </Cell>
        <Cell width={4} height={2} className="cell color--5">
          <span>
            Works in{" "}
            <a
              href="http://caniuse.com/#feat=css-grid"
              target="_blank"
              rel="noopener noreferrer"
            >
              most
            </a>{" "}
            browsers ✅
          </span>
        </Cell>
        <Cell width={2} height={2} className="cell color--8">
          <em>Responsive</em> 💻📱
        </Cell>
        <Cell width={2} height={1} className="cell color--7">
          <span>
            <a href="https://github.com/azz/styled-css-grid">GitHub</a> 📘
          </span>
        </Cell>
        <Cell width={2} height={1} className="cell color--9">
          <span>
            <a href="https://npmjs.org/styled-css-grid">npm</a> 📦
          </span>
        </Cell>
        <Cell width={4} height={1} className="cell color--6">
          <span>
            Built with <code>react</code> +{" "}
            <code className="pre">styled-components</code> 💅
          </span>
        </Cell>
      </Grid>
    );
  }
}
