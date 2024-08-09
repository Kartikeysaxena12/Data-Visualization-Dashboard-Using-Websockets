import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WebSocketComponent from "./components/Websocket/WebSocketComponent";
import Settings from "./components/Setting/Settings";
import Support from "./components/Support/Support";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="app flex">
      <Sidebar setActivePage={setActivePage} />
      <div className="main-content flex-1">
        <Header />
        <div className="p-4">
          {activePage === "dashboard" && <WebSocketComponent />}
          {activePage === "settings" && <Settings />}
          {activePage === "support" && <Support />}
          {activePage === "feedback" && <Feedback />}
        </div>
      </div>
    </div>
  );
}

export default App;
