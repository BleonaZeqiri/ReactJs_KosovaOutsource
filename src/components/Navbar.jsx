import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/JobLogo.png";
import hamburgerIcon from "../assets/images/hamburger.png";
import closeIcon from "../assets/images/close.png";
import "./navbar.css";

const Navbar = () => {
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("menu visible");
    } else {
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-slate-500 border-b border-slate-500 relative">
      <div className="content mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between">
          <div className="contents flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className=" flex flex-shrink-0 items-center mr-4" to="/">
              <img className=" h-10 w-auto" src={logo} alt="React Jobs" />
            </NavLink>
            <div className="md:hidden">
              <div className="burger-menu" onClick={updateMenu}>
                <img
                  src={isMenuClicked ? closeIcon : hamburgerIcon}
                  alt="Menu"
                  className="menu-icon"
                />
              </div>
            </div>
            <div className="hidden md:flex md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={menuClass}>
        <div className="menu-content">
          <NavLink to="/" className={linkClass} onClick={updateMenu}>
            Home
          </NavLink>
          <NavLink to="/jobs" className={linkClass} onClick={updateMenu}>
            Jobs
          </NavLink>
          <NavLink to="/add-job" className={linkClass} onClick={updateMenu}>
            Add Job
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
