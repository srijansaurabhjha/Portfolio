import React from "react";
import "./Navbar.css";
import { MenuItem, Avatar } from "@material-ui/core";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header_left">
        <MenuItem>
          <DesktopMacIcon style={{ fontSize: "40px", color: "whitesmoke" }} />
        </MenuItem>
      </div>
      <div className="header_right">
        <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
          <MenuItem
            style={{
              color: "whitesmoke",
              fontSize: "20px"
            }}
          >
            Home
          </MenuItem>
        </NavLink>
        <NavLink to="/blog" style={{ display: "flex", alignItems: "center" }}>
          <MenuItem
            style={{
              color: "whitesmoke",
              fontSize: "20px"
            }}
          >
            Blog
          </MenuItem>
        </NavLink>
        <NavLink to="contact" style={{ display: "flex", alignItems: "center" }}>
          <MenuItem
            style={{
              color: "whitesmoke",
              fontSize: "20px"
            }}
          >
            ContactUs
          </MenuItem>
        </NavLink>
      </div>
      <div className="dropdown">
        <MenuItem style={{ display: "flex", alignItems: "center" }}>
          <Avatar />
        </MenuItem>
        <div className="avatar_dropdown">
          <p>profile</p>
          <p>Setting</p>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
