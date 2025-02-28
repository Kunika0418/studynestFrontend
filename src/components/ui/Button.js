
import React from "react";

const Button = ({ label, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full m-2 ${
        selected ? "bg-teal-200" : "bg-gray-200"
      } hover:bg-teal-300 transition`}
    >
      {label}
    </button>
  );
};

export default Button;

