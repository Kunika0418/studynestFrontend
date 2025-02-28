import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, title, description }) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};