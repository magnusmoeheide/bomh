// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RealEstate from "./pages/RealEstate";
import Travels from "./pages/Travels";
import Transport from "./pages/Transport";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
