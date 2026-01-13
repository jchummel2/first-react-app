import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import OurStory from "./components/OurStory";
import Info from "./components/Info";
import Registry from "./components/Registry";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/info" element={<Info />} />
        <Route path="/registry" element={<Registry />} />
        {/* add other routes here if you have more pages */}
      </Routes>

      <footer className="app-footer">
        © {new Date().getFullYear()} Leah &amp; Joel
      </footer>
    </div>
  );
};

export default App;
