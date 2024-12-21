"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "menu",
      path: "",
    },
    {
      name: "mobile-app",
      path: "",
    },

    {
      name: "contact us",
      path: "",
    },
  ];
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName &&
              "text-gray-700 border-b-2 border-gray-700"
            }  font-medium hover:text-gray-700 transition-all relative  uppercase  after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-gray-700 cursor-pointer`}
          >
            {link.name}
          </Link>
        );
      })}{" "}
    </nav>
  );
};

export default Nav;
