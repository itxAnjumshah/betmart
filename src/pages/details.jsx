import React from "react";
import Graph from "../Componets/Graph/Graph";
import Lana from "../Componets/Lanadel/Lana";

export default function Details() {
  return (
    <>
      <div className="detail">
        <div className="detail-left  max-w-[80%] m-auto flex items-center  gap-8 ">
         <p className="w-[100%] sm:w-[100%]"> <Graph /></p>
        <p className=" hidden sm:flex"><Lana /></p> 
        </div>
        <div className="detail-right"></div>
      </div>

      <div className="detail-bottom">
        <div className="donaltrump"></div>

        <div className="donaltrump-comments"></div>
      </div>
    </>
  );
}
