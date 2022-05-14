import "./App.css";
import { Routes, Route } from "react-router-dom";
import BasicSvg from "./screens/BasicSvg";
import Home from "./screens/Home";
import LoadCsv from "./screens/LoadCsv";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-svg" element={<BasicSvg />} />
        <Route path="/loadcsv" element={<LoadCsv />} />
      </Routes>
    </>
  );
}

export default App;
