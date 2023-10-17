import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleAuthToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-logo"
          className="absolute"
        />
        <form className="absolute w-3/12 p-12 bg-black text-white my-36 mx-auto left-0 right-0 rounded-md bg-opacity-[0.85] z-10">
          <h1 className="font-sans text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter full name"
              className="px-4 py-3 my-4 w-full bg-gray-700 rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Enter email address"
            className="px-4 py-3 my-4 w-full bg-gray-700 rounded-md"
          />
          <input
            type="password"
            placeholder="Enter the secret password"
            className="px-4 py-3 my-4 w-full bg-gray-700 rounded-md"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-md">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-4 cursor-pointer font-semibold font-sans"
            onClick={handleAuthToggle}
          >
            {isSignInForm
              ? "New to StreamIt? Sign up now."
              : "Already a user? Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
