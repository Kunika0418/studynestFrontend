// // import React from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { blogData } from "../blogData"; // Ensure this file exists

// // const BlogDetail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
  
// //   // Find the blog with the given id
// //   const blog = blogData.find((item) => item.id === parseInt(id));

// //   if (!blog) {
// //     return <div className="text-center text-2xl font-semibold p-10">🚨 Blog not found.</div>;
// //   }

// //   return (
// //     <div className="p-8 bg-gray-100 min-h-screen">
// //       {/* Back Button */}
// //       <button 
// //         onClick={() => navigate(-1)} 
// //         className="mb-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
// //       >
// //         ← Back
// //       </button>

// //       {/* Blog Title */}
// //       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

// //       {/* Blog Image */}
// //       {blog.image && (
// //         <img 
// //         src={blog.image}
// //         alt={blog.title} 
// //         className="w-full h-auto rounded-lg" 
// //       />
      
// //       )}

// //       {/* Blog Content */}
// //       <p className="text-gray-700 text-lg mb-6">{blog.content}</p>

// //       {/* Additional Images (if available) */}
// //       {blog.images && blog.images.length > 0 && (
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {blog.images.map((image, index) => (
// //             <img 
// //               key={index} 
// //               src={image} 
// //               alt={`Blog image ${index + 1}`} 
// //               className="rounded-xl w-full h-60 object-cover shadow-md"
// //             />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BlogDetail;




// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { blogData } from "./blogData"; // Ensure this file exists

// const BlogDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   // Find the blog with the given id
//   const blog = blogData.find((item) => item.id === parseInt(id));

//   if (!blog) {
//     return (
//       <div className="text-center py-10">
//         <h2 className="text-2xl font-bold text-red-600">🚨 Blog not found.</h2>
//         <p className="text-gray-600">The blog you are looking for does not exist.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       {/* Back Button */}
//       <button 
//         onClick={() => navigate(-1)} 
//         className="mb-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
//       >
//         ← Back
//       </button>

//       {/* Blog Title */}
//       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

//       {/* Blog Image */}
//       {blog.image && (
//         <img 
//           src={blog.image} // ✅ Corrected image path
//           alt={blog.title} 
//           className="w-full h-auto rounded-lg mb-6" 
//         />
//       )}

//       {/* Blog Content */}
//       <p className="text-gray-700 text-lg mb-6">{blog.content}</p>

//       {/* Additional Images (if available) */}
//       {blog.images && blog.images.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {blog.images.map((image, index) => (
//             <img 
//               key={index} 
//               src={image} 
//               alt={`Blog image ${index + 1}`} 
//               className="rounded-xl w-full h-60 object-cover shadow-md"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogDetail;


// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { blogData } from "./blogData"; // Ensure this file exists

// const BlogDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   console.log("URL ID:", id);
//   console.log("Blog Data:", blogData);

//   // Find the blog with the given id
//   const blog = blogData.find((item) => item.id === parseInt(id));
//   console.log("Matched Blog:", blog);

//   if (!blog) {
//     return (
//       <div className="text-center py-10">
//         <h2 className="text-2xl font-bold text-red-600">🚨 Blog not found.</h2>
//         <p className="text-gray-600">The blog you are looking for does not exist.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       {/* Back Button */}
//       <button 
//         onClick={() => navigate(-1)} 
//         className="mb-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
//       >
//         ← Back
//       </button>

//       {/* Blog Title */}
//       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

//       {/* Blog Image */}
//       {blog.image && (
//         <img 
//           src={blog.image} // ✅ Corrected image path
//           alt={blog.title} 
//           className="w-full h-auto rounded-lg mb-6" 
//         />
//       )}

//       {/* Blog Content */}
//       <p className="text-gray-700 text-lg mb-6">{blog.content}</p>

//       {/* Additional Images (if available) */}
//       {blog.images && blog.images.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {blog.images.map((image, index) => (
//             <img 
//               key={index} 
//               src={image} 
//               alt={`Blog image ${index + 1}`} 
//               className="rounded-xl w-full h-60 object-cover shadow-md"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogDetail;


// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { blogData } from "./blogData"; // Ensure this file is correctly placed

// const BlogDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Debugging: Check if `id` is correctly captured
//   console.log("Blog ID from URL:", id);

//   // Find the blog post with matching ID
//   const blog = blogData.find((item) => item.id === parseInt(id));

//   if (!blog) {
//     return (
//       <div className="text-center py-10">
//         <h2 className="text-2xl font-bold text-red-600">🚨 Blog not found.</h2>
//         <p className="text-gray-600">The blog you are looking for does not exist.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       {/* 🔙 Back Button */}
//       <button 
//         onClick={() => navigate(-1)} 
//         className="mb-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
//       >
//         ← Back
//       </button>

//       {/* 📝 Blog Title */}
//       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

//       {/* 🖼️ Blog Image (If available) */}
//       {blog.image ? (
//         <img 
//           src={blog.image} 
//           alt={blog.title} 
//           className="w-full h-auto rounded-lg mb-6"
//         />
//       ) : (
//         <p className="text-gray-500 italic">No image available</p>
//       )}

//       {/* 📄 Blog Content */}
//       <p className="text-gray-700 text-lg mb-6">
//         {blog.content ? blog.content : "No content available for this blog."}
//       </p>

//       {/* 🖼️ Additional Images (If available) */}
//       {blog.images && blog.images.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {blog.images.map((image, index) => (
//             <img 
//               key={index} 
//               src={image} 
//               alt={`Blog image ${index + 1}`} 
//               className="rounded-xl w-full h-60 object-cover shadow-md"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogDetail;




import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "./BlogPage";
import Button from "../../components/ui/Button";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { id } = useParams();
  //const blog = blogData.find((blog) => blog.id?.toString() === id);
  const blog = blogData.find((blog) => blog.id === Number(id));


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
              alt={'Static ${index + 1}'}
              className="w-full h-40 object-cover rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDetail;



