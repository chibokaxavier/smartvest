import Link from "next/link";
import React from "react";
import { TbBusinessplan } from "react-icons/tb";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto px-4  py-5 sm:px-6 lg:px-8">
      <div className=" flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="md:text-4xl text-2xl font-semibold text-gray-700">
            <span className="flex gap-2 items-center justify-center">
              {" "}
              <TbBusinessplan className="md:text-5xl text-4xl " />{" "}
              <span className="">SmartVest</span>
              <span className="text-">.</span>
            </span>
          </h1>
        </Link>
        <div className="hidden xl:flex gap-8 justify-center items-center">
          <Nav />
        </div>
        <div className="flex items-center">
          <div className="flex md:gap-7 gap-3 relative justify-center items-center"></div>
          <div className="xl:hidden ml-3">
            <MobileNav />
          </div>
        </div>
        <div className="hidden xl:flex gap-8 justify-center items-center">
          <button className="bg-white p-2 min-w-[100px]  border-black rounded-md border-2">
            Get Advice
          </button>{" "}
          <button className="bg-black text-white p-2 min-w-[100px] border-black rounded-md border-2">
            Hire us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
