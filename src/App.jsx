import { Routes, Route } from "react-router-dom";
import BitStuffingTool from "./components/BitStuffingTool";
import Dashboard from "./FrontPage/Dashboard"; // adjust path

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BitStuffingTool />} />
      <Route path="/FrontPage/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}
