import React, { useState } from "react";
import Medflare from "../../assets/medflare.png";
import "./Navbar.css";

const MenuItems = [
  {
    title: "Home",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "About Us",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Services",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Emergency-Leads",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Contact Us",
    url: "#",
    cName: "nav-links",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
          <img className="nav-logo" src={Medflare} alt="medfalre" />
          <h1 className="navbar-title">MedFlare</h1>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
