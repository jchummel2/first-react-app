import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import OurStory from "./OurStory";
import Info from "./Info";
import Registry from "./Registry";

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
