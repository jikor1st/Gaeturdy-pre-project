import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/todo-list" element={<HomePage />}>
        <Route path=":view" />
      </Route>
    </Routes>
  );
}

export default App;
