import React from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);

  const HandleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-center h-24">
      <header className="flex w-3/4 font-semibold tracking-tight text-sm ">
        {/* logo */}

        <div className="w-fit md:w-1/4 flex justify-center items-center m-1 ">
          <div className="flex h-fit text-white text-2xl font-bold">
            <div className="mx-2 my-1">
              <div className="w-[26px] h-[13px] rounded-xl bg-blue-600"></div>
              <div className="w-[26px] h-[13px] ml-2 rounded-xl bg-green-500"></div>
            </div>
            Carryon
          </div>
        </div>

        <div className="w-2/4 md:flex hidden flex justify-center items-center md:mx-5 text-white m-1">
          <Link to="/" className="h-fit px-6 xl:px-10 py-1 ">
            Home
          </Link>
          <Link to="/about" className="h-fit px-6 xl:px-10 py-1 ">
            About
          </Link>
          <Link to="/services" className="h-fit px-6 xl:px-10 py-1 ">
            Services
          </Link>
        </div>
        <Link
          to="/contact"
          className="w-1/4 flex justify-center items-center m-1 hidden md:flex">
          <div className="h-fit w-auto md:px-2 md:py-1.5 lg:px-5 py-1.5 bg-white rounded-md ">
            Contact Us
          </div>
        </Link>
      </header>

      <div onClick={HandleNav} className="block md:hidden py-9 ">
        {!nav ? <AiOutlineMenuUnfold color="white" size={30} /> : ""}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 text-white md:hidden top-0 w-[100%] text-left ml-0 p-2 h-fit bg-[#000300] ease-in-out duration-500"
            : " fixed left-[-100%]"
        }>
        <div className="flex items-center justify-between">
          <div className="flex h-fit text-white text-2xl font-bold py-5">
            <div className="mx-2 my-1">
              <div className="w-[26px] h-[13px] rounded-xl bg-blue-600"></div>
              <div className="w-[26px] h-[13px] ml-2 rounded-xl bg-green-500"></div>
            </div>
            Carryon
          </div>
          <div onClick={HandleNav} className="block md:hidden">
            {!nav ? (
              <AiOutlineMenuUnfold color="white" size={20} />
            ) : (
              <AiOutlineClose color="white" size={20} />
            )}
          </div>
        </div>

        <div className="uppercase font-bold flex flex-col  ">
          <Link to="/" className="h-fit px-6 xl:px-10 py-2 ">
            Home
          </Link>
          <Link to="/about" className="h-fit px-6 xl:px-10 py-2 ">
            About
          </Link>
          <Link to="/services" className="h-fit px-6 xl:px-10 py-2 ">
            Services
          </Link>
          <Link to="/contact" className="h-fit px-6 xl:px-10 py-2">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
