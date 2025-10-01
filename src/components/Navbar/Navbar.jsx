import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import SearchIcon from "@mui/icons-material/Search";


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content-left">
          <a className="nav-logo">
            <img src="/images/logo1.png" alt="Logo" className="nav-logo" />
          </a>
          <div className="nav-links">
            <input type="text" placeholder="Search" className="nav-search"/>
            {/* <SearchIcon/> */}
            <a className="nav-link">Library</a>
            <a className="nav-link">Discover</a>
            <a className="nav-link">Discuss</a>
          </div>
        </div>
        <div className="nav-content-right">Log in</div>
      </div>
    </nav>
  );
};

export default Navbar;
