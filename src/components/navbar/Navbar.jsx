import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css"

function Navbar() {
  const toggle = () =>{
    
  }
  return (
    <>
      <nav className="nav-bar">
        <h2>Task Management</h2>
        <div className="mode" onClick={toggle}>
          <h2>โหมดกลางวัน</h2>
          <FontAwesomeIcon icon={faSun} size="2x" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
