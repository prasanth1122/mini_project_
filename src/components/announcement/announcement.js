import React from "react";
import "./announcement.css";
import down from "../../assets/Frame 10ddd.svg";
import AnnouncementTable from "./announcementTable/announcementTable";
export default function Announcement() {
  return (
    <div className="announcement">
      <div className="announcementTitle">
        <p className="title2">Announcement</p>
        <div className="date">
          <p className="today">Today, </p>
          <p className="today">13 Sep 2021</p>
          <img src={down} alt="down" />
        </div>
      </div>
      <div className="a-table">
        <AnnouncementTable
          title="Outing schedule for every departement"
          time="5 Minutes ago"
        />

        <AnnouncementTable
          title="Meeting HR Department"
          time="Yesterday, 12:30 PM"
        />
        <AnnouncementTable
          title="IT Department need two more talents for UX/UI Designer position"
          time="Yesterday, 09:15 AM"
        />
      </div>
      <p className="activity">See All Announcement</p>
    </div>
  );
}
