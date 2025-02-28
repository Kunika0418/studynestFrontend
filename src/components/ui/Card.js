// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Card = ({ id, image, title, description }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/blog/${id}');
//   };

//   return (
//     <div
//       className="rounded-2xl shadow-lg bg-white p-4 cursor-pointer hover:shadow-xl transition"
//       onClick={handleClick}
//     >
//       <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// export default Card;


import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, title, description }) => {
  return (
    <Link to={'/blog/${id}'}>
      <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Card;