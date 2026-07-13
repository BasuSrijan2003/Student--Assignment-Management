import React, { useState } from "react";
import LoginImage from "../assets/login_image.svg";
import Assignment from "../assets/assignment.png";
import { LaptopMinimalCheck } from 'lucide-react';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("")
  const [studentSection, setStudentSection] = useState("")


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


        {/* ================= Form Section ================= */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 sm:px-8 py-12">



          <form
            onSubmit={submitHandler}
            className="w-full max-w-md"
          >
            <h1 className="text-3xl font-bold text-slate-800">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Enter your credentials to create your account.
            </p>

            {/* Name*/}
            <div className="mt-8">
              <label className="block font-medium mb-1">
                Name
              </label>

              <input
                type="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>



            {/* Class */}
            <div className="mt-3">
              <label className="block font-medium mb-1">
                Class
              </label>

              <select
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
              >
                <option value="">Select Class</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>


            {/* Section */}
            <div className="mt-3">
              <label className="block font-medium mb-1">
                Section
              </label>

              <select
                value={studentSection}
                onChange={(e) => setStudentSection(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
              >
                <option value="">Select Section</option>
                <option value="6">A</option>
                <option value="7">B</option>
                <option value="8">C</option>
                <option value="9">D</option>
                <option value="10">E</option>

              </select>
            </div>


            {/* Email */}
            <div className="mt-3">
              <label className="block font-medium mb-1">
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
            <div className="mt-3">
              <label className="block font-medium mb-1">
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

            <button
              type="submit"
              className="w-full mt-10 py-3 rounded-lg bg-gradient-to-r from-blue-700 via-sky-500 to-sky-400 text-white font-semibold text-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              Sing up
            </button>

            <div className="flex justify-center mt-6 text-sm flex-wrap gap-1">
              <span className="text-gray-600">
                Already have an account?
              </span>

              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sing in
              </a>
            </div>

          </form>

        </div>


        {/* =================Right ================= */}
        <div className="relative w-full md:w-1/2 min-h-[350px] md:min-h-[800px] bg-[#0d012c] flex flex-col justify-center items-center px-8 py-12 overflow-hidden">

          {/* Gradient Glow */}
          <div className="absolute -top-10 -left-20 w-80 h-80 rounded-full bg-blue-600/30 blur-3xl"></div>


          <div className="absolute top-10 right-10 flex gap-1">
            <h2 className="text-violet-400 text-lg font-semibold tracking-wide [text-shadow:0_0_8px_rgba(139,92,246,0.8),0_0_20px_rgba(139,92,246,0.5)]">
              AssignHub
            </h2>
            <LaptopMinimalCheck color="#8B5CF6" strokeWidth={2.5} />
          </div>


          <div className="absolute bottom-0 -right-20 w-80 h-80 rounded-full bg-violet-600/30 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center">

            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white">
              Student Registration
            </h1>

            <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-sm leading-7">
              Create your account to view assignments, submit your work, and monitor your progress.
            </p>

            <img
              src={LoginImage}
              alt="Login Illustration"
              className="w-60 sm:w-72 md:w-80 lg:w-[380px] mt-10 object-contain"
            />

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;