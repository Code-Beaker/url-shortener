import React from "react";
import { illustrationWorking } from "../assets/images";
import Shortener from "./Shortener";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-2 p-14 md:p-26 items-center gap-10">
        <div>
          <h1 className="text-2xl md:text-7xl font-bold text-slate-900 my-4">
            More than just shorter links
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium my-4">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <a
            className="text-md md:text-xl font-bold text-white bg-teal-500 px-6 py-3 my-2 inline-block rounded-full hover:bg-teal-600"
            href=""
          >
            Get started
          </a>
        </div>
        <div>
          <img src={illustrationWorking} alt="" />
        </div>
      </div>
      <div>
        <Shortener />
      </div>
    </section>
  );
};

export default Hero;
