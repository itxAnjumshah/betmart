import React from "react";
import Graph from "../Componets/Graph/Graph";
import Lana from "../Componets/Lanadel/Lana";

export default function Details() {
  return (
    <>
        <div className="detail-left  max-w-[80%] m-auto flex items-center  gap-8 ">
         <p className="w-[100%] sm:w-[100%]"> <Graph /></p>
        <p className=" hidden sm:flex"><Lana /></p> 
        </div>
        
      

      <div className="detail-bottom">
<div className="comment">
<div className="left">
  <img src="" alt="" />
<div className="DONAl">
  <h1>Donald Trump</h1>
  <p>$1,613,654,200  Vol.</p>

</div>

 
</div>

<div className="right">
    
<h1>48%</h1>
<button>Yes</button>
<button>No</button>


    </div>


</div>



        
      </div>
    </>
  );
}
