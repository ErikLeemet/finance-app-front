import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Procurements from "./pages/Procurements";
import Resources from "./pages/Resources";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Procurements" element={<Procurements />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
