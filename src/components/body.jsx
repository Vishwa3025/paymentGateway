import React from "react";
import d from "../assests/donate.jpg";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <section className="flex text-white  p-2">
      <div className="w-1/2 md:p-8 lg:-16 m-1">
        <div className=" p-3">
          <Link to="/contact">
            <div className="flex w-fit bg-gray-800 rounded-xl m-1">
              <div className="px-1 py-0.5">
                <i class="fa-solid fa-earth-americas text-green-500"></i>
              </div>
              <div className="text-xs flex justify-center items-center w-fit">
                <div className="px-2.5 font-semibold">Join us</div>
              </div>
            </div>
          </Link>
          <div className="md:text-5xl lg:text-6xl xl:text-8xl mt-5 font-normal tracking-normal font-['Catamaran']">
            <div className="py-1">Let❜s come</div>
            <div className="flex py-1">
              <div className="text-green-400">Be Part</div>
              <div className="md:px-3 lg:px-6">of</div>
            </div>
            <div className="py-1">Changes</div>
          </div>
          <Link to="/donate">
            <div className="h-9 w-24 mt-12 bg-blue-700 flex justify-center items-center rounded-lg">
              Donate
            </div>
          </Link>
        </div>
      </div>
      <div className="w-1/2 py-16 xl:py-10 lg:px-5 m-1">
        <img src={d} alt="" />
      </div>
    </section>
  );
};

export default Body;
