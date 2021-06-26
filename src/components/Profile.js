import React from "react";
import "./Profile.css";
const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile_heading">
        <p>Profile</p>
      </div>
      <div className="profile_img">
        <img src={props.image} alt="#" />
      </div>
      <div className="profile_body">
        <div className="profile_body_box">
          <p className="profile_body_Tag">Name</p>
          <p className="profile_body_data">{props.name}</p>
        </div>
        <div className="profile_body_box">
          <p className="profile_body_Tag">Email</p>
          <p className="profile_body_data">{props.mail}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
