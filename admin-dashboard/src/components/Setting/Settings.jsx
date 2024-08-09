import React, { useState, useEffect } from "react";
import "./Setting.css";

const Settings = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const settingsContainer = document.querySelector(".settings-container");
    settingsContainer.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="settings-page">
      <div className="settings-container p-6 mx-auto mb-20  my-4 w-full max-w-lg bg-zinc-100 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Settings</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Profile</label>
            <input
              type="text"
              placeholder="Username"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Notifications</label>
            <select className="p-2 border border-gray-300 rounded mt-1">
              <option>Email</option>
              <option>SMS</option>
              <option>Push Notifications</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Theme</label>
            <select
              className="p-2 border border-gray-300 rounded mt-1"
              value={theme}
              onChange={handleThemeChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white p-2 rounded font-semibold mt-4 hover:bg-blue-700">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
