import React, { useState } from 'react';
import lanaavatar from "../../Assets/static/user.png";
import warning from "../../Assets/static/exclamation.png";

export default function Lana() {
  const [activeTab, setActiveTab] = useState("Buy"); // State to track the active tab
  const [activeChoice, setActiveChoice] = useState(""); // State to track the active Yes/No button

  return (
    <>
      <div className="lana bg-white shadow-lg w-fit px-7 py-4">
        {/* User Info Section */}
        <div className="flex items-center mb-5">
          <img src={lanaavatar} alt="" className="w-10 h-10 mr-3" />
          <p className="text-black font-semibold text-xl">Lana Del Rey</p>
        </div>
        <hr />
        
        {/* Tab Buttons */}
        <div className="tab-btn flex gap-3 mt-6">
          <button
            className={`rounded-full px-8 py-2 ${activeTab === "Buy" ? "bg-black text-white" : "bg-[#F3F4F6] text-black"}`}
            onClick={() => setActiveTab("Buy")}
          >
            Buy
          </button>
          <button
            className={`rounded-full px-8 py-2 ${activeTab === "Sell" ? "bg-black text-white" : "bg-[#F3F4F6] text-black"}`}
            onClick={() => setActiveTab("Sell")}
          >
            Sell
          </button>
        </div>

        {/* Outcome Section */}
        <div className="flex justify-between pt-4 items-center pb-4">
          <p>Outcome</p>
          <img src={warning} alt="" className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Yes/No Buttons */}
        <div className="flex items-center gap-4">
          <button
            className={`px-8 py-3 rounded-full flex items-center ${
              activeChoice === "Yes" ? "bg-green-600 text-white" : "bg-[#F3F4F6] text-green-600"
            }`}
            onClick={() => setActiveChoice("Yes")}
          >
            Yes $54.5
          </button>
          <button
            className={`px-8 py-3 rounded-full flex items-center ${
              activeChoice === "No" ? "bg-red-600 text-white" : "bg-[#F3F4F6] text-red-600"
            }`}
            onClick={() => setActiveChoice("No")}
          >
            No $13.23
          </button>
        </div>

        {/* Input and Continue Button */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center justify-start bg-[#f4f5f6] rounded-full px-3">
            <input
              type="text"
              placeholder="Amount"
              className="outline-none bg-[#f4f5f6] p-3 rounded-full"
            />
            <p>-1+</p>
          </div>
          <button className="bg-[#F3F4F6] text-black rounded-full px-8 py-2">Continue</button>
        </div>

        {/* Details Section */}
        <div className="mt-3">
          <p className="flex items-center justify-between">
            Avg price <span>$0.00</span>
          </p>
          <p className="flex items-center justify-between">
            Shares <span>$0.00</span>
          </p>
          <p className="flex items-center justify-between">
            Potential return <span>$0.00</span>
          </p>
        </div>
      </div>
    </>
  );
}
