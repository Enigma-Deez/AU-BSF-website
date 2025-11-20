import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import NewHere from "./pages/NewHere";
import WhoWeAre from "./pages/About";
import Gallery from "./pages/Gallery";
import Give from "./pages/Give";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-here" element={<NewHere />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/give" element={<Give />} />
      </Routes>
    </>
  );
}
