import React from "react";
import { MdDashboard, MdSettings, MdSend } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";

const Sidebar = ({ setActivePage }) => {
  return (
    <nav className="sidebar w-full md:w-64 bg-gray-800 text-white h-screen font-semibold pt-4">
      <ul className="space-y-2 p-4">
        <li
          className="cursor-pointer flex items-center p-2 hover:bg-blue-400 rounded"
          onClick={() => setActivePage("dashboard")}
        >
          <MdDashboard className="mr-2" /> Dashboard
        </li>
        <li
          className="cursor-pointer flex items-center p-2 hover:bg-gray-700 rounded"
          onClick={() => setActivePage("settings")}
        >
          <MdSettings className="mr-2" /> Settings
        </li>
        <li
          className="cursor-pointer flex items-center p-2 hover:bg-gray-700 rounded"
          onClick={() => setActivePage("support")}
        >
          <IoMdHelpCircle className="mr-2" /> Support
        </li>
        <li
          className="cursor-pointer flex items-center p-2 hover:bg-gray-700 rounded"
          onClick={() => setActivePage("feedback")}
        >
          <MdSend className="mr-2" /> Feedback
        </li>
        {/* Add more navigation items here */}
      </ul>
    </nav>
  );
};

export default Sidebar;
