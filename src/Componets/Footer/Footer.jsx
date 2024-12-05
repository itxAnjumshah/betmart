import React from "react";
import logo from "../../Assets/static/logo.png";

export default function Footer() {
  return (
    <>
      <div className="parent ">
        <hr />
        <div className="footer-inner md:flex md:justify-between md:p-12   ">
          <div className="left">
            <div className="inleft   flex gap-1">
              <img src={logo} alt="" className="w-[3.5rem]" />
              <p className="text-black font-bold    ">Betmarket</p>
            </div>
            <p className="sm:w-[40%] w-full">
              Betmarket is India's largest crypto based event betting
               platform. You can start earning simply by betting on 
              the possibility of an event happening.
            </p>
          </div>

          <div className="right flex gap-6">
            <ul>
              <h4 className="text-black font-bold">Pages</h4>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>

            <ul>
              <h4 className="text-black font-bold">Pages</h4>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul>
              <h4 className="text-black font-bold">Pages</h4>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="copy-right flex justify-between px-12 py-4 items-center">
          <p>2024 © All rights reserved</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </>
  );
}
