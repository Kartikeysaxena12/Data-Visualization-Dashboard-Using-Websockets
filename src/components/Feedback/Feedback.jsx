// Feedback.jsx

import React, { useState } from "react";
import FeedbackVisualization from "./FeedbackVisualization";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted. Thank you!");
    setFeedback({ type: "", message: "" });
  };

  return (
    <div className="feedback-page flex flex-col md:flex-row items-start space-x-4 mt-32 mx-auto max-w-3xl">
      <div className="p-4 w-11/12 max-w-xl bg-zinc-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Provide Feedback
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 text-md font-bold mb-2"
            >
              Type of Feedback
            </label>
            <select
              id="type"
              name="type"
              value={feedback.type}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a Feedback Type</option>
              <option value="bug">Bug Report</option>
              <option value="improvement">Suggestion for Improvement</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-md font-bold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={feedback.message}
              onChange={handleChange}
              rows="4"
              className="block w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your feedback..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Feedback
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <FeedbackVisualization />
      </div>
    </div>
  );
};

export default Feedback;
