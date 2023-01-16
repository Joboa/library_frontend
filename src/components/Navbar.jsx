import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BookOutline, MenuOutline, CloseOutline } from "react-ionicons";
import Button from "./Button";

const Navbar = () => {
  let Links = [
    { name: "Books", link: "/books" },
    { name: "Journals", link: "/journals" },
    { name: "Sign up", link: "/signup" },
  ];

  let [open, setOpen] = useState(false);
  return (
    // main div: outer
    <div className="shadow-md w-full sticky top-0 left-0 z-50">
      {/* inner div for the logo and nav items */}
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* inner div:1 for the logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-500">
          <span className="text-3xl mr-1 pt-1">
            <BookOutline color={"#93C5FD"} title={""} />
          </span>
          J-Library
        </div>
        {/* breadcumbs */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden "
        >
          {open ? <CloseOutline /> : <MenuOutline />}
        </div>
        {/* nav items  */}
        {/* css: transition-all duration-500 ease-in md:opacity-100 opacity-0 */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 md:pl-0 md:w-auto w-full pl-9 ${
            open ? "top-10" : "top-[-400px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7">
              <NavLink
                to={link.link}
                className="text-gray-500 hover:text-blue-300 duration-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
