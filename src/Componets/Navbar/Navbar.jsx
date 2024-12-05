import React from "react";
import logo from "../../Assets/static/logo.png"

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between  items-center px-9  py-3 bg-[#FFFFFF]">
        <div className="nav-left  flex items-center gap-3">
          <img src={logo} alt=""  className="w-[3.5rem]"/>
          <p className="font-bold  md:text-[1.5rem] sm:text-[1rem]">Betmarket</p>
        </div>

        <div className="nav-right  flex items-center justify-between gap-5" >
          <input type="text" placeholder="Search Markets" className="bg-[#F3F4F6] p-3 rounded-full outline-none  hidden  sm:flex  " />
          <button className="bg-[#F3F4F6] px-6  py-3 rounded-full text-gray-500">Login</button>
          <button className="bg-black text-white px-4 py-3 rounded-full">Signup</button>
        </div>
      </div>
      <hr />
    </>
  );
}
