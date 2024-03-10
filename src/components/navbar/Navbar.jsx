import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";

function Navbar(props) {
  const { toggleTheme, theme } = props;
  return (
    <>
      <nav className="nav-bar">
        <h2>Task Management</h2>
        <div className="mode">
          <h2>{theme === "light-theme" ? "โหมดกลางวัน" : "โหมดกลางคืน"}</h2>
          {theme === "light-theme" ? (
            <FontAwesomeIcon icon={faSun} size="2x" onClick={toggleTheme} />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="2x" onClick={toggleTheme} />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
