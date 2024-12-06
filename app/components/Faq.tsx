"use client";
import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    // If the clicked FAQ is already active, close it (set to null)
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your company about?",
      answer:
        "We are a digital transformation company providing innovative software solutions to businesses of all sizes.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support by emailing support@company.com or calling our helpline at 123-456-7890.",
    },
    {
      question: "Do you offer custom software development?",
      answer:
        "Yes, we offer custom software development tailored to the specific needs of your business.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <div
              className="flex items-center justify-between cursor-pointer py-3"
              onClick={() => toggleAnswer(index)}
            >
              {/* Question text on the left */}
              <span className="text-lg font-semibold">{faq.question}</span>

              {/* Circle button on the right */}
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                  activeIndex === index
                    ? "bg-blue-500 text-white"
                    : "border-gray-500"
                }`}
              >
                {activeIndex === index ? "-" : "+"}
              </div>
            </div>
            {activeIndex === index && (
              <div className="p-4 text-gray-700 bg-gray-100 rounded-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
