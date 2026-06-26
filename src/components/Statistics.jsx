import React from "react";
import {
  bgBoostDesktop,
  bgBoostMobile,
  iconBrandRecognition,
  iconDetailedRecords,
  iconFullyCustomizable,
} from "../assets/images";

const Statistics = () => {
  return (
    <div>
      <div className="p-8 md:p-16 lg:p-32 bg-slate-200">
        <h1 className="font-bold text-center text-4xl md:text-5xl text-slate-900 my-4">
          Advanced statistics
        </h1>
        <p className="text-center font-medium text-slate-500 text-md md:text-xl">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="relative flex flex-col md:flex-row justify-between gap-6 py-16 h-fit text-center md:text-left">
          <div className="relative h-fit p-4 md:p-10 bg-white rounded">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-15 w-20 h-20 bg-slate-800 rounded-full flex justify-center items-center">
              <img src={iconBrandRecognition} alt="" />
            </span>
            <h2 className="text-slate-900 font-bold text-xl md:text-2xl mb-2 mt-10">
              Brand Recognition
            </h2>
            <p className="text-slate-500 font-medium">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="relative h-fit p-4 md:p-10 bg-white rounded mt-8 text-center md:text-left">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-15 w-20 h-20 bg-slate-800 rounded-full flex justify-center items-center">
              <img src={iconDetailedRecords} alt="" />
            </span>
            <h2 className="text-slate-900 font-bold text-xl md:text-2xl mb-2 mt-8">
              Detailed Records
            </h2>
            <p className="text-slate-500 font-medium">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="relative h-fit p-4 md:p-10 bg-white rounded mt-20 text-center md:text-left">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-15 w-20 h-20 bg-slate-800 rounded-full flex justify-center items-center">
              <img src={iconFullyCustomizable} alt="" />
            </span>
            <h2 className="text-slate-900 font-bold text-xl md:text-2xl mb-2 mt-8">
              Fully Customizable
            </h2>
            <p className="text-slate-500 font-medium">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-slate-800 p-6 md:p-12">
        <picture>
          <source media="(max-width: 768px)" srcSet={bgBoostMobile} />
          <img
            className="absolute top-0 left-0 z-0 w-full h-full bg-slate-800"
            src={bgBoostDesktop}
            alt=""
          />
        </picture>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white text-center">
            Boost your links today
          </h2>
          <div className="flex justify-center items-center p-6">
            <a
              href=""
              className="font-bold text-md md:text-lg text-white bg-teal-500 px-6 py-2 rounded-full cursor-pointer hover:bg-teal-600"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
