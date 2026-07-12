import React, { useState } from "react";
import LoginImage from "../assets/login_image.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    console.log({ email, password });

    setEmail("");
    setPassword("");
  }

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-poppins">
      {/* Main Card */}
      <div className="relative w-full max-w-6xl min-h-[700px] lg:min-h-[800px] bg-amber-50 rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">

        {/* ================= LEFT SECTION ================= */}
        <div className="relative w-full md:w-1/2 min-h-[350px] md:min-h-[800px] bg-[#0d012c] flex flex-col justify-center items-center px-8 py-12 overflow-hidden">

          {/* Gradient Glow */}
          <div className="absolute -top-10 -left-20 w-80 h-80 rounded-full bg-blue-600/30 blur-3xl"></div>

          <div className="absolute bottom-0 -right-20 w-80 h-80 rounded-full bg-violet-600/30 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Welcome Back!
            </h1>

            <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-sm leading-7">
              Sign in to continue your learning journey and access your
              account.
            </p>

            <img
              src={LoginImage}
              alt="Login Illustration"
              className="w-60 sm:w-72 md:w-80 lg:w-[380px] mt-10 object-contain"
            />

          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 sm:px-8 py-12">

          <form
            onSubmit={submitHandler}
            className="w-full max-w-md"
          >
            <h1 className="text-3xl font-bold text-slate-800">
              Login
            </h1>

            <p className="text-gray-500 mt-2">
              Enter your credentials to access your account.
            </p>

            {/* Email */}
            <div className="mt-8">
              <label className="block font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div className="mt-6">
              <label className="block font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div className="flex justify-end mt-3">
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-700 transition"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-3 rounded-lg bg-gradient-to-r from-blue-700 via-sky-500 to-sky-400 text-white font-semibold text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              Login
            </button>

            <div className="flex justify-center mt-6 text-sm flex-wrap gap-1">
              <span className="text-gray-600">
                Don't have an account?
              </span>

              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Register
              </a>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Login;