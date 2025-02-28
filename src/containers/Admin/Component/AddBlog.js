// src/containers/Admin/Component/AddBlog.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogData, categories } from "../../BlogPage/BlogPage";

const AddBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const handleAddBlog = () => {
    const id = blogData.length + 1;
    const blogCategory = newCategory ? newCategory : category;

    if (newCategory && !categories.includes(newCategory)) {
      categories.push(newCategory); // Add new category to categories array
    }

    const newBlog = {
      id,
      title,
      description,
      image,
      content,
      category: blogCategory,
    };

    blogData.push(newBlog); // Add new blog to blogData
    navigate("/Blog"); // Redirect to BlogPage
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border"
      />

      <textarea
        placeholder="Blog Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-4 border"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 mb-4 border"
      />

      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-4 border"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 mb-4 border"
      >
        <option value="">Select Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Add New Category (Optional)"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        className="w-full p-2 mb-4 border"
      />

      <button
        onClick={handleAddBlog}
        className="bg-blue-600 text-white p-2 rounded-md w-full"
      >
        Add Blog
      </button>
    </div>
  );
};

export default AddBlog;
