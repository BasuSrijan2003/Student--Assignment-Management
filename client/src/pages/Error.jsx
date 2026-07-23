import React from "react";
import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0A0518] flex items-center justify-center px-6 font-poppins overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 w-96 h-96 rounded-full bg-violet-600/20 blur-[120px]"></div>
      <div className="absolute -bottom-40 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]"></div>

      <div className="relative text-center max-w-2xl">

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
            <TriangleAlert
              size={50}
              className="text-violet-400"
            />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-violet-400 tracking-wider
          [text-shadow:0_0_20px_rgba(139,92,246,.8),0_0_60px_rgba(139,92,246,.5)]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-5 text-gray-400 text-lg leading-8">
          Oops! The page you're looking for doesn't exist or may have been
          moved. Let's get you back to something useful.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <Link
            to="/"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500
            text-white font-semibold shadow-lg shadow-violet-500/30
            hover:scale-105 hover:shadow-violet-500/50 transition duration-300"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 rounded-xl border border-violet-500/30
            text-violet-300 hover:bg-violet-500/10 transition duration-300"
          >
            Go Back
          </button>

        </div>

        {/* Decorative Text */}
        <p className="mt-16 text-violet-400/40 text-sm tracking-[6px] uppercase">
          AssignHub • Student Assignment Management System
        </p>

      </div>
    </div>
  );
};

export default NotFound;