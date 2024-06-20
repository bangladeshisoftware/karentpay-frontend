import React from "react";
import { FaUsers } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { GiShoppingBag } from "react-icons/gi";

function Home() {
  const cards = [
    { id: 1, icon: <FaUsers />, value: "8,235", label: "New User" },
    { id: 2, icon: <LuShoppingCart />, value: "200,235", label: "Total Order" },
    { id: 3, icon: <GiShoppingBag />, value: "221,235", label: "Available Product" },
  ];

  return (
    <div className="rounded-md  mt-10 ml-0 lg:ml-5">
      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 lg:px-0 justify-around gap-2 pb-5">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative h-72 overflow-hidden bg-indigo-600 sm:px-20 rounded-md shadow-md text-white flex items-center transition-all duration-300 hover:shadow-lg ${index === 2 && 'md:col-span-2 lg:col-span-1'}`}
          >
            <div className="z-10 flex h-full flex-col items-center justify-center space-y-4 px-10">
              <div className="text-2xl p-3 bg-white bg-opacity-20 rounded-full">
                {card.icon}
              </div>
              <h2 className="text-xl font-bold">{card.value}</h2>
              <p>{card.label}</p>
            </div>
            <div className="-z-1 absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
            <div className="-z-1 absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
          </div>
        ))}
      </div>

      {/* Second card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-2 px-1 lg:px-0 pb-5">
        {cards.slice(0, 2).map((card, index) => (
          <div
            key={card.id}
            className={`relative h-72 overflow-hidden bg-indigo-600 sm:px-20 rounded-md shadow-md text-white flex items-center transition-all duration-300 hover:shadow-lg ${index === 0 ? 'md:col-span-1 lg:col-span-2' : ''}`}
          >
            <div className="z-10 flex h-full flex-col items-center justify-center space-y-4 px-10">
              <div className="text-2xl p-3 bg-white bg-opacity-20 rounded-full">
                {card.icon}
              </div>
              <h2 className="text-xl font-bold">{card.value}</h2>
              <p>{card.label}</p>
            </div>
            <div className="-z-1 absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
            <div className="-z-1 absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
          </div>
        ))}
      </div>

      {/* Third card grid */}
      <div className="grid grid-cols-3 justify-around gap-4 px-1 lg:px-0 pb-5">
        <div className="relative col-span-3 h-72 overflow-hidden bg-indigo-600 sm:px-20 rounded-md shadow-md text-white flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="z-10 flex h-full flex-col items-center justify-center space-y-4 px-10">
            <div className="text-2xl p-3 bg-white bg-opacity-20 rounded-full">
              {cards[2].icon}
            </div>
            <h2 className="text-xl font-bold">{cards[2].value}</h2>
            <p>{cards[2].label}</p>
          </div>
          <div className="-z-1 absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
          <div className="-z-1 absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
