import {Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage";
import PlaygroundPage from "./pages/Playground";
import TestPage from "./pages/Playground/playtest";
import LoginTab from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/testpage" element={<TestPage />} />
      <Route path="/login" element={<LoginTab />} />
    </Routes>
  );
}

export default App;
