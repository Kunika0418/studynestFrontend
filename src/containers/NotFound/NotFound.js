import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-offwhite 
      p-4 overflow-hidden relative"
    >
      <div className="flex flex-col justify-center items-center text-center space-y-6 z-10">
        <div className="flex flex-col justify-center items-center gap-4 w-fit">
          <h1
            className="text-voilet font-bold text-9xl transform transition-all 
            duration-500 hover:scale-110 hover:text-blue"
          >
            404
          </h1>
          <div
            className="w-full h-1 bg-pink transform
            animate-pulse"
          ></div>
        </div>

        <h2
          className="text-4xl font-semibold text-darkpink 
          transition-all duration-300 hover:text-voilet"
        >
          Page Not Found
        </h2>

        <p
          className="text-xl text-blue max-w-md mx-auto 
          transition-all duration-300 hover:text-pink"
        >
          Oops! The page you're looking for seems to have wandered off into the
          digital wilderness.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-pink text-white 
          rounded-full font-semibold hover:bg-darkpink 
          transition-all duration-300 transform hover:scale-105 
          hover:shadow-lg"
        >
          Return Home
        </Link>
      </div>

      {/* Decorative background elements */}
      <div
        className="absolute top-0 left-0 w-60 h-60 bg-pink 
        opacity-40 rounded-full blur-3xl animate-blob"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue 
        opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000"
      ></div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
