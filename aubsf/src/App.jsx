import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Give from "./pages/give";
import NewHere from "./pages/newhere";
//Components
import Navbar from "./components/footer";
import Footer from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
