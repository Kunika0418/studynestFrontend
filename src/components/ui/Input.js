// import React from 'react';

// export const Input = ({ type, placeholder, value, onChange, className }) => (
//   <input
//     type={type}
//     placeholder={placeholder}
//     value={value}
//     onChange={onChange}
//     className={`border border-gray-300 rounded-md p-2 w-full ${className}`}
//   />
// );


import React from "react";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border rounded-lg mb-4"
    />
  );
};

export default Input;
