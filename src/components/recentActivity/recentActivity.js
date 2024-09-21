import React from "react";
import "./recentActivity.css";
export default function RecentActivity() {
  return (
    <div className="reActivity">
      <p className="title4">Recent Activity</p>
      <div className="recent-content">
        <div className="content-data">
          <p className="recent-date">10.40 AM, Fri 10 Sept 2021</p>
          <p className="recent-job">You Posted a New Job</p>
          <p className="recent-requirements">
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </p>
        </div>
        <div className="allActivity">
          <p className="todayActivity">Today you makes 12 Activity</p>
          <p className="seeActivity">See All Activity</p>
        </div>
      </div>
    </div>
  );
}
