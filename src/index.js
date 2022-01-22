import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./App";

// past in element you want to render, and specify where you want it to be rendered
ReactDOM.render(<NavBar />, document.getElementById("root"));
