import "./App.css";
import { Routes, Route } from "react-router-dom";
import BasicSvg from "./screens/BasicSvg";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-svg" element={<BasicSvg />} />
      </Routes>
    </>
  );
}

export default App;
