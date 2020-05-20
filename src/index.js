import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header";
import TodoApp from "./TodoApp/TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <TodoApp />
  </React.StrictMode>,
  rootElement
);
