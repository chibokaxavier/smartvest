"use client";
import React from "react";
import TextField from "./TextField";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto px-4  py-5 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6 ">
        <p>&copy; Copywright {new Date().getFullYear()}. All rights reserved</p>
        <div className="w-full flex justify-center md:w-auto mt-6 md:mt-0">
          <TextField
            type="email"
            placeholder=" Email address"
            className="w-60 min-w-0 shrink"
            autoComplete="email"
            required
            id="email"
            label="Email"
          />
          <button className="bg-black ml-4 xl:mt-7 mt-8 sm:mt-7 lg:mt-8  text-white h-fit py-1 px-2 rounded-lg">
            <span className="lg:inline hidden">Join our newsletter </span>
            <span className="lg:hidden ">Join newsletter</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
