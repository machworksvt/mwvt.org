import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Subteams from "./pages/Subteams";
import Aircraft from "./pages/Aircraft";
import Prometheus from "./pages/Prometheus";
import Lab from "./pages/Lab";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team">
          <Route index element={<Team />} />
          <Route path="subteams" element={<Subteams />} />
        </Route>
        <Route path="aircraft">
          <Route index element={<Aircraft />} />
          <Route path="prometheus" element={<Prometheus />} />
        </Route>
        <Route path="lab" element={<Lab />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}