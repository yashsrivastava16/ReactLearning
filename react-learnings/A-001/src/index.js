import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";

const header = (
  <header>
    <h1>Hey Welcome to my react frontend learning curve..</h1>
    <h2>Here I'll document and practice all my learnings...</h2>
  </header>
);

const footer = (
  <footer>
    <h3>This repo is owned by yash srivastava</h3>
  </footer>
);

const app = (
  <>
    {header}
    {/* {main} */}
    {footer}
  </>
);

ReactDOM.render(app, document.getElementById("root"));
