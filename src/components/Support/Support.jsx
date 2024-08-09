import React, { useState } from "react";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      'To reset your password, go to the settings page and click on "Password Reset." Follow the instructions provided.',
  },
  {
    question: "Where can I check my notifications?",
    answer:
      "Notifications can be viewed in the Notifications tab on the dashboard. You will see alerts and updates about your activities.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      'Customer support can be reached through the "Contact Us" section at the bottom of the sidebar. We are available 24/7 to assist you.',
  },
  {
    question: "What is the best way to manage user permissions?",
    answer:
      "User permissions can be managed from the Users section under Settings. You can assign roles and permissions according to your needs.",
  },
];

const Support = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-gray-800">
        FAQ - Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border mt-8 rounded-lg p-3 bg-white shadow-lg"
          >
            <h2
              className="text-lg font-semibold cursor-pointer text-black"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h2>
            <p
              className={`text-blue-900 font-semibold mt-2 ${
                openFAQ === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
