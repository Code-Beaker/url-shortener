import React from "react";
import { logo } from "../assets/images/index";

const Navbar = () => {
  return (
    <nav className="flex items-center p-12 md:px-26 w-full justify-between">
      <div className="flex items-center gap-10">
        <a href="">
          <img className="w-16 md:w-26" src={logo} alt="Shortly" />
        </a>
        <ul className="flex gap-4">
          <li>
            <a
              className="font-medium text-slate-700 text-md md:text-lg hover:text-teal-500"
              href="#"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="font-medium text-slate-700 text-md md:text-lg hover:text-teal-500"
              href="#"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="font-medium text-slate-700 text-md md:text-lg hover:text-teal-500"
              href="#"
            >
              Resources
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <button className="block cursor-pointer px-6 py-2 text-lg font-bold rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-700">
          Login
        </button>
        <button className="block cursor-pointer px-6 py-2 text-lg font-bold rounded-full text-white bg-teal-500 hover:bg-teal-600">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
