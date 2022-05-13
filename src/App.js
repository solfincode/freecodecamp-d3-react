import "./App.css";
import { Routes, Route } from "react-router-dom";
import BasicSvg from "./screens/BasicSvg";
import Home from "./screens/Home";
import Bar from "./screens/Bar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-svg" element={<BasicSvg />} />
        <Route path="/bar" element={<Bar />} />
      </Routes>
    </>
  );
}

export default App;
