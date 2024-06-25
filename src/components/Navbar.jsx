import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../assests/css/style.css";

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [hamburger, setHamburger] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const showHamburger = () => {
    setHamburger(!hamburger);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const icons = [
    {
      Name: "fa-solid fa-user",
      para: "User",
      link: "/",
    },
    {
      Name: "fa-solid fa-file",
      para: "Resume",
      link: "/resume",
    },
    {
      Name: "fa-solid fa-briefcase",
      para: "Works",
      link: "/work",
    },
    {
      Name: "fa-solid fa-phone",
      para: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <header className="header-container">
        <div className="logo-container">
          <h1>DABHI RAVI</h1>
        </div>

        <div className="toggle-container" onClick={toggleDarkMode}>
          <div className="toggle">
            {darkMode ? (
              <i className="fa-solid fa-sun light"></i>
            ) : (
              <i className="fa-solid fa-moon dark"></i>
            )}
          </div>
        </div>

        {isMobile && (
          <div className="hamburger-container" onClick={showHamburger}>
            <div className="hamburger">
              {hamburger ? (
                <i className="fa-solid fa-bars"></i>
              ) : (
                <i className="fa-solid fa-xmark"></i>
              )}
            </div>
          </div>
        )}
      </header>

      <nav
        className={`navbar-container ${hamburger || !isMobile ? "" : "show"}`}
      >
        <div className="outer-div">
          {icons.map((icon, index) => (
            <NavLink
              key={index}
              to={icon.link}
              className="inner-div"
              activeclassname="active"
            >
              <i className={icon.Name}></i>
              <p>{icon.para}</p>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};
