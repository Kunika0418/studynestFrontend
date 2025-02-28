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

