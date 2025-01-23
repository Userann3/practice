import React, { useState } from "react";
import { CiUser, CiMail, CiLock, CiRead, CiUnread } from "react-icons/ci";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex shadow-lg rounded-lg bg-white">
        {/* Left Section */}
        <div
          className="w-72 bg-cover rounded-l-lg"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
          }}
        >
          <svg
            className="h-14 w-auto m-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 302.5"
            fill="white"
          >
            <path d="M126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zM189.4 199.5c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z" />
          </svg>
        </div>

        {/* Right Section */}
        <form className="flex flex-col p-10 space-y-6">
          <h4 className="text-3xl font-bold text-gray-800">Register Now!</h4>
          <p className="text-base text-gray-600">
            Create awesome templates with{" "}
            <span className="font-bold text-black">TempGen</span>
          </p>

          {/* Username Input */}
          <div className="relative">
            <div className="flex">
              <span>
                <CiUser className="text-2xl mt-3" />
              </span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="peer w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <div className="flex">
              <span>
                <CiMail className="text-2xl mt-3" />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="peer w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="flex items-center">
              <span>
                <CiLock className="text-2xl mt-3" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="peer w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="ml-2 focus:outline-none"
              >
                {showPassword ? (
                  <CiRead className="text-2xl mt-3" />
                ) : (
                  <CiUnread className="text-2xl mt-3" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-[#5dc8cf] rounded hover:text-[#5dc8cf] hover:bg-white hover:border-black hover:border transition-all duration-300 hover:duration-300"
          >
            Sign Up
          </button>

          {/* <button className="border text-white py-2 px-5 rounded mt-5 text-2xl bg-[#5dc8cf] hover:text-[#5dc8cf] hover:bg-white hover:border-black transition-all duration-300 hover:duration-300">
          Get Started
        </button> */}
          <div className="flex justify-center">
            <span className="underline">
              Already have an account? Login here
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
