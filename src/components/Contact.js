import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_box">
        <p>Contact Us</p>
        <div className="contact_form">
          <div className="input_container">
            <AccountCircleIcon />
            <input type="text" placeholder="Enter your Name" />
          </div>
          <div className="input_container">
            <MailIcon />
            <input type="text" placeholder="Enter your mail" />
          </div>
          <div className="input_container">
            <PhoneIcon />
            <input type="text" placeholder="Enter your Phone Number" />
          </div>
          <textarea rows="6" cols="15" placeholder="Enter your message here" />
        </div>
        <Button
          style={{
            backgroundColor: "green",
            color: "white",
            width: "fit-content",
            fontSize: "13px"
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Contact;
