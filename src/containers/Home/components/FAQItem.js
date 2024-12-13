import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left transition-colors duration-300 hover:bg-gray-50 rounded-lg p-2 text-voilet"
      >
        <div className="flex items-center space-x-4">
          {Icon && (
            <div className="bg-lightpink text-blue p-2 rounded-full transition-all duration-300 group-hover:rotate-12">
              <Icon size={24} />
            </div>
          )}
          <span className="font-semibold text-lg transition-all duration-300">
            {question}
          </span>
        </div>
        <div className="transition-transform duration-300 ease-in-out">
          {isOpen ? (
            <ChevronUp className="text-darkpink" size={24} />
          ) : (
            <ChevronDown className="text-blue" size={24} />
          )}
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 visible"
            : "grid-rows-[0fr] opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="overflow-hidden rounded-b-lg text-voilet bg-lightpink">
          <p className="p-4 transition-all duration-500 transform">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
