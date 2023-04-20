import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { GlobalStyles } from "@/assets/styles/globalStyles";
import { Todo } from "@/components/Todo/Todo";

ReactDOM.render(
  <>
    {/* <GlobalStyles />
    <Todo /> */}
    <App />
  </>,
  document.getElementById("root")
);
