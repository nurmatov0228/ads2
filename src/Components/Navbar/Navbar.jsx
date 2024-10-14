import React, { useState, useEffect } from "react";
import { Menu, MenuItem, IconButton, Switch } from "@mui/material";
import {
  Search,
  Phone,
  AccessTime,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { ReactTyped } from "react-typed";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <NavLink to="/" className="navbar__link">
            Asosiy
          </NavLink>
          <a className="navbar__link" onClick={handleClick}>
            Xizmatlar
          </a>
          <Menu
            className="navbar__menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className="menuitem" onClick={handleClose}>
              <NavLink to="/services">Yo'lbo'yida</NavLink>
            </MenuItem>
            <MenuItem className="menuitem" onClick={handleClose}>
              <NavLink to="/services">Ko'priklarda</NavLink>
            </MenuItem>
            <MenuItem className="menuitem" onClick={handleClose}>
              <NavLink to={"/services"}>Led ekran</NavLink>
            </MenuItem>
            <MenuItem className="menuitem" onClick={handleClose}>
              <NavLink to={"/services"}>Katta yo'lda reklama</NavLink>
            </MenuItem>
          </Menu>
          <NavLink to="/about" className="navbar__link">
            Biz haqimizda
          </NavLink>
          <NavLink to="/contact" className="navbar__link">
            Kontakt
          </NavLink>
          <NavLink to="/vacancy" className="navbar__link">
            Vakansiya
          </NavLink>
          <a href="#reviews" className="navbar__link">
            Sharhlar
          </a>
        </div>

        <div className="navbar__right">
          <div className="navbar__search">
            <IconButton>
              <Search />
            </IconButton>
            <ReactTyped
              strings={[
                "Avtobuslarda reklama",
                "Led ekranlarda reklama",
                "Bilboardlarda reklama",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input className="navbar__input" />
            </ReactTyped>
          </div>

          <div className="navbar__contact">
            <div className="navbar__contact__flex">
              <AccessTime className="navbar__icon" />
              <span>9:00-17:00 du-ju</span>
            </div>
            <div className="navbar__contact__flex">
              <Phone className="navbar__icon" />
              <a href="tel:+998 55 201 90 10">
                <span>+998 55 201 90 10</span>
              </a>
            </div>
          </div>

          {/* Kun/Tun rejimini qo'shamiz */}
          <div className="navbar__theme-switch">
            <Brightness4 className="navbar__icon" />
            <Switch checked={darkMode} onChange={toggleDarkMode} />
            <Brightness7 className="navbar__icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
