import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Work } from "./components/Work";

function Home({ darkMode, toggleDarkMode }) {
  return (
    <>
      <div className="navbar">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className={`main_section ${darkMode ? "dark-mode" : ""}`}>
        <div className="section_left">
          <Sidebar />
        </div>
        <div className="section_right">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Routes>
        <Route path="/*" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
