import React, { useState } from "react";
import { logo, menu } from "../assets/images/index";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row items-center p-12 md:px-26 w-full justify-between">
      <div className="flex items-center justify-between w-full md:w-fit gap-10">
        <a href="">
          <img className="w-20 md:w-26" src={logo} alt="Shortly" />
        </a>
        <ul className="hidden md:flex gap-4">
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
        {/* Menu button */}
        <button onClick={() => setMenuIsOpen(true)} className="block md:hidden">
          <img className="w-8" src={menu} alt="Menu" />
        </button>
      </div>
      <div className="hidden md:flex flex-col md:flex-row gap-4">
        <button className="block cursor-pointer px-6 py-2 text-lg font-bold rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-700">
          Login
        </button>
        <button className="block cursor-pointer px-6 py-2 text-lg font-bold rounded-full text-white bg-teal-500 hover:bg-teal-600">
          Sign Up
        </button>
      </div>
      <div
        className={`mobile-menu p-4 rounded-xl bg-slate-200 w-full mt-5 ${menuIsOpen ? "" : "hidden"}`}
      >
        <ul className="flex items-center flex-col gap-6">
          <li>
            <a
              onClick={() => setMenuIsOpen(false)}
              className="font-medium text-slate-700 text-md md:text-lg hover:text-teal-500"
              href="#"
            >
              Features
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuIsOpen(false)}
              className="font-medium text-slate-700 text-md md:text-lg hover:text-teal-500"
              href="#"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuIsOpen(false)}
              className="font-medium text-slate-700 text-md md:text-lg hover:text-teal-500"
              href="#"
            >
              Resources
            </a>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 mt-4 bg-slate-300 p-2 rounded-xl">
          <button
            onClick={() => setMenuIsOpen(false)}
            className="block cursor-pointer px-6 py-2 text-lg font-bold rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-700"
          >
            Login
          </button>
          <button
            onClick={() => setMenuIsOpen(false)}
            className="block cursor-pointer px-6 py-2 text-lg font-bold rounded-full text-white bg-teal-500 hover:bg-teal-600"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
