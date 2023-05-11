import React from "react";
import GlobalStyles from "@/styles/GlobalStyles";
import TodoList from "@/components/TodoList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<TodoList />}>
          <Route path=":view" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
