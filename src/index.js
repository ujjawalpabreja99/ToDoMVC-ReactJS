import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/index";
import ToDoApp from "./ToDoApp/index";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ToDoApp />
  </React.StrictMode>,
  rootElement
);
