
// import React from 'react';

// export const Button = ({ children, onClick, className }) => (
//   <button
//     onClick={onClick}
//     className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ${className}`}
//   >
//     {children}
//   </button>
// );


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

