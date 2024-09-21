import React from "react";
import { ReactComponent as Pin } from "../../../assets/bi_pin-angle-fill.svg";
import { ReactComponent as Dots } from "../../../assets/carbon_overflow-menu-horizontal.svg";
import "./announcementTable.css";
export default function AnnouncementTable({ title, time }) {
  return (
    <div className="table">
      <div className="content">
        <p className="title3">{title}</p>
        <p className="time">{time}</p>
      </div>
      <div className="images">
        <Pin className="pin" />
        <Dots className="dots" />
      </div>
    </div>
  );
}
