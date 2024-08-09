import React from "react";
import { FaSearch, FaShareAlt } from "react-icons/fa";

const Header = () => {
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        alert("URL copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <header className="bg-gray-100 w-full p-4 shadow flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <div className="relative flex items-center w-full md:w-auto">
          <FaSearch className="absolute left-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-64 p-2 pl-8 border font-semibold border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={handleShare}
          className="text-gray-600 hover:text-gray-800 flex items-center font-semibold"
        >
          <FaShareAlt className="mr-2" /> Share
        </button>
      </div>
    </header>
  );
};

export default Header;
