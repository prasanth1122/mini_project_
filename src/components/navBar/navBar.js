import React from "react";
import "./navBar.css";
import search from "../../assets/Frame 9.svg";
import notification from "../../assets/ic_round-notifications.svg";
import message from "../../assets/bi_chat-left-dots-fill.svg";
import profile from "../../assets/Mask Group.svg";
import down from "../../assets/Frame 10.svg";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="inputbar">
        <input className="input" type="text" placeholder="Search" />
        <img src={search} alt="search" className="Search" />
      </div>
      <div className="profile">
        <img src={notification} alt="notification" className="Notfication" />
        <img src={message} alt="message" className="Message" />
        <div className="profilePicture">
          <img src={profile} alt="profile" className="ProfilePic" />
          <p className="profileName">Admirra John</p>
          <img src={down} alt="profile" className="Down" />
        </div>
      </div>
    </div>
  );
}
