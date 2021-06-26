import React from "react";
import "./Navbar.css";
import { MenuItem, Avatar } from "@material-ui/core";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase.js";
const Navbar = (props) => {
  const SignOut = () => {
    auth.signOut();
  };
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
        <NavLink
          to="/contact"
          style={{ display: "flex", alignItems: "center" }}
        >
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
          <Avatar src={props.avatar} />
        </MenuItem>
        <div className="avatar_dropdown">
          <p>
            <NavLink style={{ color: "black" }} to="/profile">
              profile
            </NavLink>
          </p>
          <p>Setting</p>
          <p onClick={SignOut}>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
