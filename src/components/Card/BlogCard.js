
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <Link to={'/blog/${blog.id}'} className="block bg-white rounded-lg shadow p-4">
            <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.summary}</p>
        </Link>
    );
};

export default BlogCard;