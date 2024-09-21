import "./App.css";

import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navBar/navBar";
import RecentActivity from "./components/recentActivity/recentActivity";
import Schedule from "./components/schedule/schedule";
import Sidebar from "./components/sideBar/sideBar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="mainPage">
        <Navbar />
        <div className="containers">
          <Dashboard />
          <div className="second-container">
            <RecentActivity />
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
