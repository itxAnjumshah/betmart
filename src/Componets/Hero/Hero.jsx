import React, { useState } from 'react';
import Activetab from "../../Assets/static/activeTab.png";
import Inactivetab from "../../Assets/static/inactiveTab.png";
import sademogy from "../../Assets/static/sad.png";
import Card from '../Card/Card';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('All'); 
  const [message, setMessage] = useState('Hello from All'); 

  const tabs = [
    'All',
    'Sports',
    'New',
    'Politics',
    'Crypto',
    'Pop Culture',
    'Business',
    'Science',
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMessage(tab === 'All' ? 'Hello from All' : `No Result for ${tab}`); 
  };

  return (
    <div className="parent-hero pt-6">
      <ul
        className="flex items-center ml-12 gap-9 overflow-x-auto whitespace-nowrap scrollbar-hide"
        style={{
          padding: "0 1rem",
          maxWidth: "100%",
        }}
      >
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`flex p-3 rounded-full items-center cursor-pointer ${
              activeTab === tab
                ? 'bg-black text-white' 
                : 'bg-[#F3F4F6] text-black' 
            }`}
            onClick={() => handleTabClick(tab)}
          >
            <span>
              <img
                src={activeTab === tab ? Activetab : Inactivetab}
                alt={tab}
                className="w-6 h-6"
              />
            </span>
            {tab}
          </li>
        ))}
      </ul>
      
      <div >
        {activeTab === 'All' ? (
          <>
          <div className='p-12'>
            <Card /> 

</div>            

          </>
        ) : (
          <>
          <div className="flex items-center justify-center flex-col h-[50vh] text-center font-bold text-black text-2xl">
            <img src={sademogy} alt="Sad Emoji" className="mb-4" />
            {message}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
