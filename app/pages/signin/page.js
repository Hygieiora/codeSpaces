"use client";
// import "../globals.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/(components)/header";
import Footer from "@/app/(components)/Footer";
// import googleLogo from "../../public/googleLogo.jpg"; // Ensure you have the Google logo in your public folder

// Functional component for the account creation form
const LoginForm = () => {
  // Handle form submission
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Logged In"); // Placeholder for form submission logic
  };

  const [email, setEmail] = useState("F");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState("");

  // Form layout with Tailwind CSS classes
  return (
    <>
      <Header />
      <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-sm">
        <h2 className="text-blue-600 font-bold text-3xl mt-20 leading-normal">
          WELCOME BACK
        </h2>
        <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
        <form onSubmit={handleLogin} className="mt-4">
          {/* Input fields with appropriate types and Tailwind CSS styling */}
          {/* Email address */}
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full p-3 border border-gray-300 rounded-md transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                email ? "pt-7" : ""
              }`}
            />
            <label
              htmlFor="email"
              className={`absolute left-3 top-3 transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                email ? "text-xs top-2" : "text-sm top-3.5 "
              }`}
            >
              Email address
            </label>
          </div>
          {/* Password */}
          <div className="relative mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full p-3 border border-gray-300 rounded-md transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                password ? "pt-7" : ""
              }`}
            />
            <label
              htmlFor="password"
              className={`absolute left-3 top-3 transition-all duration-200 ease-in-out peer-focus:h-1/2 peer-focus:-translate-y-full peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-700 peer-valid:h-1/2 peer-valid:-translate-y-full peer-valid:pl-0 peer-valid:text-xs peer-valid:text-gray-700" ${
                password ? "text-xs top-2" : "text-sm top-3.5"
              }`}
            >
              Password
            </label>
          </div>
          {/* Remember me and Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center ml-8">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              Remember me
            </label>
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline mr-8"
            >
              Forgot Password?
            </a>
          </div>
          {/* // Create account and Sign in buttons */}
          <div className="relative mb-4 py-3 flex justify-between items-center">
            {/* <Link href="/pages/signup"> */}
            <a href="/pages/signup">
              <button
                type="button"
                className="px-6 py-2 ml-6 bg-gray-300 text-black rounded-md hover:bg-gray-600"
              >
                Create Account
                {/* Create account */}
              </button>
            </a>
            {/* </Link> */}
            {/* <Link > */}

            <button
              type="submit"
              className="px-10 py-2 mr-8 bg-blue-500 text-black rounded-md hover:bg-blue-600"
            >
              <a href="/pages/home">Sign in</a>
            </button>

            {/* </Link> */}
          </div>
          {/* // Continue with Google button */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">OR</span>
            {/* <Link href="/pages/symptoms"> */}

            <button className="flex items-center justify-center px-4 py-2 border rounded-md border-gray-300 shadow-sm hover:shadow-md mt-2">
              <a href="/pages/home">
                <Image
                  src="/googleLogo.jpg"
                  alt="Google Logo"
                  width={20}
                  height={20}
                />
              </a>
              <span className="ml-2 text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* </Link> */}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
