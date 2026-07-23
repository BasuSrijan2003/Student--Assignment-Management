import { Link, Navigate, useNavigate } from "react-router-dom";
import { LaptopMinimalCheck } from 'lucide-react';
import { useState } from "react";

const Navbar = ({ isLoggedin, setIsLoggedIn }) => {

  const [token, setToken] = useState(localStorage.getItem("token"))

  const navigate = useNavigate()


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#14052F]/90 backdrop-blur-lg border-b border-violet-500/10">
      <div className="max-w-7xl mx-auto px-8 h-18 flex items-center justify-between font-poppins">

        {/* Logo */}
        <Link
          to="/"

        >
          <div className="text-2xl font-bold text-violet-400 tracking-wide flex gap-2
          [text-shadow:0_0_8px_rgba(139,92,246,0.8),0_0_20px_rgba(139,92,246,0.5)]">
            <div className="mt-1.5">
              <LaptopMinimalCheck color="#8B5CF6" strokeWidth={2.5} />
            </div>

            AssignHub
          </div>

        </Link>



        {isLoggedin ? (<>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10">

            <Link
              to="/"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              Dashboard
            </Link>

            <Link
              to="/assignments"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              Assignments
            </Link>

            <Link
              to="/profile"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              Profile
            </Link>
            <button
              onClick={
                () => {
                  localStorage.removeItem("token")
                  setIsLoggedIn(false)
                  console.log(isLoggedin);

                  navigate("/")

                }
              }
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500
            text-white font-medium shadow-lg shadow-violet-500/30 hover:scale-105 hover:shadow-violet-500/50 transition duration-300
            ">
              Log Out
            </button>



          </div>


        </>) : (
          <>
            {/* Buttons */}
            <div className="flex items-center gap-4">
               <Link
              to="/"
              className="text-white hover:text-violet-400 transition duration-300"
            >
              Home
            </Link>

              <Link
                to="/login"
                className="text-white hover:text-violet-400 transition"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500
            text-white font-medium shadow-lg shadow-violet-500/30
            hover:scale-105 hover:shadow-violet-500/50 transition duration-300"
              >
                Sign Up
              </Link>

            </div>
          </>
        )}



      </div>
    </nav>
  );
};

export default Navbar;