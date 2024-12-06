import React from "react";
import { cardData } from "../Dummy.jsx"; // Ensure correct path
import Star from "../../Assets/static/star.png";
import comment from "../../Assets/static/comment.png";

export default function Card() {
  return (
    <div className="parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="parent-children bg-[#F3F4F6] p-4 rounded-lg shadow-md"
        >
          {/* Card Top Section */}
          <div className="top-child flex items-center gap-4 mb-4">
            <img
              src={card.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <p className="font-bold text-gray-700">{card.title}</p>
          </div>
          <hr className="border-black w-[80%] m-auto" />

          {/* Card Options */}
          <ul className="flex flex-col gap-3 mt-6 pb-3">
            {card.options.map((option, index) => (
              <li key={index} className="flex items-center justify-between">
                <p className="mr-4 text-gray-600">{option.text}</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">{option.percentage}</span>
                  <button
                    className={`px-4 py-2 rounded-full ${
                      option.yes
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {option.yes ? "Yes" : "No"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <hr className="border-black w-[80%] m-auto" />

          {/* Card Bottom Section */}
          <div className="bottom flex justify-between items-center py-3">
            <p className="text-gray-600">{card.volume}</p>
            <p className="flex gap-3 items-center">
              <img src={comment} alt="comments" className="w-5 h-5" />
              {card.comments}
              <img src={Star} alt="star" className="w-5 h-5" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
