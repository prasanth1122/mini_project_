import React from "react";
import "./scheduleTable.css";
import { ReactComponent as Pin } from "../../../assets/bi_pin-angle-fill.svg";
import { ReactComponent as Dots } from "../../../assets/carbon_overflow-menu-horizontal.svg";
export default function ScheduleTable({ title, time, id }) {
  return (
    <div className="scheduleTable" id={id}>
      <div className="contentSchedule">
        <p className="titleSchedule">{title}</p>
        <p className="timeSchedule">{time}</p>
      </div>
      <div className="images">
        <Dots className="dots" />
      </div>
    </div>
  );
}
