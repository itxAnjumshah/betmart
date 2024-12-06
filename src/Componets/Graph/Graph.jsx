import React from "react";
import Avatar1 from "../../Assets/avatars/avatar1.png";
import warn from "../../Assets/static/exclamation.png";
import star from "../../Assets/static/149220.png";
import copy from "../../Assets/static/copy-two-paper-sheets-interface-symbol.png";
import share from "../../Assets/static/share.png";
import LineChart from "../Gaphic/Graphic";

export default function Graph() {
  return (
    <>
      <div className="grap  ">
        <div className="grap-top">
          <p className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <img src={Avatar1} alt="Avatar" className="w-10 h-10" />
            <span className="font-bold text-black text-xl">
              Which Party wins Presidency +<br /> Popular Vote?
            </span>
          </p>

          <div className="dolar flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 pt-7 px-12 sm:mt-0">
            <p className="flex flex-col sm:flex-row gap-4">
              <span className="block sm:inline">$1,613,654,200 vol.</span>
              <span>$1,613,654,200 Vol.</span>
            </p>
            <p className="flex items-center gap-2 mt-2 sm:mt-0">
              <img src={warn} alt="Warn Icon" className="w-5 h-5" />
              <img src={star} alt="Star Icon" className="w-5 h-5" />
              <img src={copy} alt="Copy Icon" className="w-5 h-5" />
              <img src={share} alt="Share Icon" className="w-5 h-5" />
            </p>
          </div>
        </div>

        <div className="grap-bottom  ">
          <LineChart />
        </div>
      </div>
    </>
  );
}
