import React from "react";
import "./dashboard.css";
import Card1 from "./card1/card1";
import Card2 from "./card2/card2";
import graph1 from "../../assets/Group 4graph1.svg";
import graph2 from "../../assets/Group 4graph2.svg";
import Announcement from "../announcement/announcement";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <p className="title1">Dashboard</p>

      <div className="dashboard-items">
        <Card1
          heading="Available Position"
          number="24"
          data="4 Urgently needed"
          bgColor="#FFEFE7"
          dataColor="#FF5151"
        />
        <Card1
          heading="Closed Positions"
          number="15"
          data="4 Active hiring"
          bgColor="#E8F0FB"
          dataColor="#3786F1"
        />
        <Card1
          heading="New Employees"
          number="24"
          data="4 Department"
          bgColor="#FDEBF9"
          dataColor="#EE61CF"
        />
      </div>
      <div className="dashboardCard2">
        <Card2
          heading="Total Employees"
          number="216"
          men="120"
          women="90"
          src={graph1}
          percent="+2%"
        />
        <Card2
          heading="Total Request"
          number="16"
          men="6"
          women="10"
          src={graph2}
          percent="+6%"
        />
      </div>
      <Announcement />
    </div>
  );
}
