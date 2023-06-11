import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/Home";
import PlaygroundPage from "./pages/Playground";
import useInitAuthState from "./hooks/Auth/useInitAuthState";
import TestPPage from "./pages/Playground/testp";

function App() {
  useInitAuthState();
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path=":view" />
      </Route>
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/playground/test" element={<TestPPage />} />
    </Routes>
  );
}

export default App;
