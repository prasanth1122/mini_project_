import "./sideBar.css";
import logo from "../../assets/logo.svg";
import logo2 from "../../assets/Frame 88logo2.svg";
import React from "react";
import { ReactComponent as DashboardIcon } from "../../assets/ic_dashboarddashboard.svg";
import { ReactComponent as RecruitmentIcon } from "../../assets/ic_recruitment.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/ic_calendar.svg";
import { ReactComponent as EmployeeIcon } from "../../assets/ic_employee.svg";
import { ReactComponent as DepartmentIcon } from "../../assets/ic_department.svg";
import { ReactComponent as SupportIcon } from "../../assets/ic_support.svg";
import { ReactComponent as SettingsIcon } from "../../assets/ic_settings.svg";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="logo" />
      <img src={logo2} alt="logo2" className="logo2" />
      <div className="mainmenu">
        <div className="heading1">
          <p className="menubar">MAIN MENU</p>
        </div>

        <div className="mainLinks">
          <DashboardIcon className="svgIcon" />
          <p className="mainMenuLink">Dashboard</p>
        </div>

        <div className="mainLinks">
          <RecruitmentIcon className="svgIcon" />
          <p className="mainMenuLink">Recruitment</p>
        </div>

        <div className="mainLinks">
          <ScheduleIcon className="svgIcon" />
          <p className="mainMenuLink">Schedule</p>
        </div>

        <div className="mainLinks">
          <EmployeeIcon className="svgIcon" />
          <p className="mainMenuLink">Employee</p>
        </div>

        <div className="mainLinks">
          <DepartmentIcon className="svgIcon" />
          <p className="mainMenuLink">Department</p>
        </div>
      </div>
      <div className="mainmenu">
        <div className="heading1">
          <p className="menubar">OTHER</p>
        </div>

        <div className="mainLinks">
          <SupportIcon className="svgIcon" />
          <p className="mainMenuLink">Support</p>
        </div>

        <div className="mainLinks">
          <SettingsIcon className="svgIcon" />
          <p className="mainMenuLink">Settings</p>
        </div>
      </div>
    </div>
  );
}
