import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { categories } from "../../BlogPage/BlogPage";

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    category: "Study Abroad Guide",
    description: "",
    content: "",
  });

  const [images, setImages] = useState({
    mainImage: null,
    staticImages: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (name === 'mainImage') {
      setImages(prev => ({ ...prev, mainImage: files[0] }));
    } else if (name === 'staticImages') {
      setImages(prev => ({ ...prev, staticImages: Array.from(files) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Comprehensive validation
    if (!blogData.title || !blogData.description || !blogData.content) {
      toast.error("Please fill all required fields");
      return;
    }

    // Additional image validation
    if (!images.mainImage) {
      toast.error("Please upload a main image");
      return;
    }

    const formData = new FormData();
    
    // Append blog data
    Object.keys(blogData).forEach(key => {
      formData.append(key, blogData[key]);
    });

    // Append images
    // if (images.mainImage) {
    //   formData.append('mainImage', images.mainImage);
    // }

    if (images.mainImage) {
      formData.append('images', images.mainImage);
    }
    images.staticImages.forEach((img, index) => {
      formData.append(`staticImages`, img);
    });

    try {
      // Detailed logging for debugging
      console.log('Submitting FormData:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: `, value);
      }

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URI}/api/blogs`, 
        formData, 
        {
          headers: { 
            'Content-Type': 'multipart/form-data',
            // Optionally add authorization token if required
            // 'Authorization': `Bearer ${yourToken}`
          }
        }
      );

      // Check response status
      if (response.status === 200 || response.status === 201) {
        toast.success("Blog added successfully!");
        
        // Reset form
        setBlogData({
          title: "",
          category: "Study Abroad Guide",
          description: "",
          content: ""
        });
        setImages({
          mainImage: null,
          staticImages: []
        });

        // Optional: Clear file inputs
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => input.value = '');
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      // Comprehensive error handling
      console.error('Full error:', error);
      
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(`Error: ${error.response.data.message || 'Failed to add blog'}`);
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error('No response received from server');
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error('Error setting up the request');
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-[#6C0F0A]">Add New Blog</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Blog Title</label>
            <input 
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleInputChange}
              placeholder="Enter blog title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select 
              name="category"
              value={blogData.category}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              {categories.filter(cat => cat !== 'All').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Short Description</label>
            <input 
              type="text"
              name="description"
              value={blogData.description}
              onChange={handleInputChange}
              placeholder="Enter a brief description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Main Image</label>
            <input 
              type="file" 
              name="mainImage"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Images (Optional)</label>
            <input 
              type="file" 
              name="staticImages"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Blog Content</label>
            <textarea 
              name="content"
              value={blogData.content}
              onChange={handleInputChange}
              rows={10}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Write your blog content here (supports Markdown)"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6C0F0A] text-white py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-[#a04031]"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default AddBlog;