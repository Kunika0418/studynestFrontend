

import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "./BlogPage";
import Button from "../../components/ui/Button";
import ReactMarkdown from "react-markdown";
// import { blogDataa } from "../blogDataa";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id?.toString() === id);

  if (!blog) {
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Blog not found!</h2>
        <Link to="/blog">
          <Button label="Back to Blogs" />
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Link to="/blog">
        <Button label="Back to Blogs" />
      </Link>

      <h1 className="text-3xl font-bold mt-6 mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">Category: {blog.category}</p>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-60 object-cover rounded-md mb-6"
      />

      {/* Render the content with proper formatting using ReactMarkdown */}
      <div className="prose prose-lg text-gray-800 mb-4">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>

      {blog.staticImages?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {blog.staticImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Static ${index + 1}`}
              className="w-full h-40 object-cover rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDetail;



