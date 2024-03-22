import React from "react";
import "./NavBar.css";
import home from "../../assets/home.png";
import camera from "../../assets/camera.png";
import calendar from "../../assets/calendar.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to='/dashboard'>
            <img src={home} alt="home" />
          </Link></li>
        <li className="nav-item">
          <Link to='/camera'>
            <img src={camera} alt="camera" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/events'>
            <img src={calendar} alt="events" />
          </Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
