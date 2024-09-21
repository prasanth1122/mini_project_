import React from "react";
import "./schedule.css";
import down from "../../assets/Frame 10ddd.svg";
import ScheduleTable from "./scheduleTable/scheduleTable";
export default function Schedule() {
  return (
    <div className="schedule">
      <div className="upcomingSchedule">
        <div className="scheduleTitle">
          <p className="title5">Announcement</p>
          <div className="date2">
            <p className="today2">Today, </p>
            <p className="today2">13 Sep 2021</p>
            <img src={down} alt="down" />
          </div>
        </div>
        <div className="priorityContainer">
          <p className="priority">Priority</p>
          <ScheduleTable
            title="Review candidate applications"
            time="Today - 11.30 AM"
          />
        </div>
        <div className="priorityContainer otherContainer">
          <p className="priority other">Other</p>
          <div className="sTable">
            <ScheduleTable
              title="Review candidate applications"
              time="Today - 11.30 AM"
              id="sc1"
            />

            <ScheduleTable
              title="Short meeting with product designer from IT Departement"
              time="Today - 11.30 AM"
              id="sc2"
            />
          </div>
        </div>
      </div>
      <p className="newSchedule">Create a New Schedule</p>
    </div>
  );
}
