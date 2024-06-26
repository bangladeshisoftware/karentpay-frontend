import React from "react";
import Image from "next/image";
import img2 from "@/app/_assets/r2.jpg";
import { FaUsers } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { GiShoppingBag } from "react-icons/gi";

function Home() {
  return (
    <div className="rounded-md mt-10 ml-0 lg:ml-5 h-auto ">
      <div className=" border shadow-lg mb-2 lg:mb-2 p-3 lg:p-3 mt-3 rounded-md text-center lg:text-left lg:hidden  ">
        <h3 className="text-xl font-semibold">Dashboard</h3>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 lg:px-0 justify-around gap-2 pb-5 ">
        <div className=" border shadow-lg rounded-md  px-20 py-16  text-black flex items-center transition-all duration-300 hover:shadow-lg bg-white">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <FaUsers />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">8,235</h2>
            </div>
            <div>
              <p>New User</p>
            </div>
          </div>
        </div>
        <div className="border  shadow-lg rounded-md  px-20 py-16  text-black flex items-center transition-all duration-300 hover:shadow-lg bg-white">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <LuShoppingCart />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">200,235</h2>
            </div>
            <div>
              <p>Total Order</p>
            </div>
          </div>
        </div>
        <div className="border shadow-lg md:col-span-2 lg:col-span-1 rounded-md  px-20 py-16 text-black flex items-center transition-all duration-300 hover:shadow-lg bg-white">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <GiShoppingBag />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">221,235</h2>
            </div>
            <div>
              <p>Available Product</p>
            </div>
          </div>
        </div>
      </div>
      {/* card 2*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-2 px-1 lg:px-0 pb-5">
        <div className="border shadow-lg md:col-span-1 lg:col-span-2 rounded-md  px-20 py-16  text-black flex items-center transition-all duration-300 hover:shadow-lg bg-white">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <FaUsers />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">8,235</h2>
            </div>
            <div>
              <p>New User</p>
            </div>
          </div>
        </div>
        <div className="border shadow-lg rounded-md  px-20 py-16  text-black flex items-center transition-all duration-300 hover:shadow-lg bg-white">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <LuShoppingCart />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">200,235</h2>
            </div>
            <div>
              <p>Total Order</p>
            </div>
          </div>
        </div>
      </div>
      {/* card 3*/}
      <div className="grid grid-cols-3 justify-around gap-4 px-1 lg:px-0 pb-5">
        <div className="border shadow-lg col-span-3 md:col-span-3 lg:col-span-3 rounded-md px-20 py-20  text-black flex items-center transition-all duration-300 hover:shadow-lg bg-white">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <GiShoppingBag />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">221,235</h2>
            </div>
            <div>
              <p>Available Product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

// import React from "react";
// import { FaUsers } from "react-icons/fa6";
// import { LuShoppingCart } from "react-icons/lu";
// import { GiShoppingBag } from "react-icons/gi";

// function Home() {
//   const cards = [
//     { id: 1, icon: <FaUsers />, value: "8,235", label: "New User" },
//     { id: 2, icon: <LuShoppingCart />, value: "200,235", label: "Total Order" },
//     { id: 3, icon: <GiShoppingBag />, value: "221,235", label: "Total Product" },
//   ];

//   return (
//     <div className="rounded-md  mt-10 ml-0 lg:ml-5">
//       {/* Card grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 lg:px-0 justify-around gap-2 pb-5">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`relative h-72 overflow-hidden bg-indigo-600 sm:px-20 rounded-md shadow-md text-white flex items-center transition-all duration-300 hover:shadow-lg ${index === 2 && 'md:col-span-2 lg:col-span-1'}`}
//           >
//             <div className="z-10 flex h-full flex-col items-center justify-center space-y-4 px-10">
//               <div className="text-2xl p-3 bg-white bg-opacity-20 rounded-full">
//                 {card.icon}
//               </div>
//               <h2 className="text-xl font-bold">{card.value}</h2>
//               <p>{card.label}</p>
//             </div>
//             <div className="-z-1 absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
//             <div className="-z-1 absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
//           </div>
//         ))}
//       </div>

//       {/* Second card grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-2 px-1 lg:px-0 pb-5">
//         {cards.slice(0, 2).map((card, index) => (
//           <div
//             key={card.id}
//             className={`relative h-72 overflow-hidden bg-indigo-600 sm:px-20 rounded-md shadow-md text-white flex items-center transition-all duration-300 hover:shadow-lg ${index === 0 ? 'md:col-span-1 lg:col-span-2' : ''}`}
//           >
//             <div className="z-10 flex h-full flex-col items-center justify-center space-y-4 px-10">
//               <div className="text-2xl p-3 bg-white bg-opacity-20 rounded-full">
//                 {card.icon}
//               </div>
//               <h2 className="text-xl font-bold">{card.value}</h2>
//               <p>{card.label}</p>
//             </div>
//             <div className="-z-1 absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
//             <div className="-z-1 absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
//           </div>
//         ))}
//       </div>

//       {/* Third card grid */}
//       <div className="grid grid-cols-3 justify-around gap-4 px-1 lg:px-0 pb-5">
//         <div className="relative col-span-3 h-72 overflow-hidden bg-indigo-600 sm:px-20 rounded-md shadow-md text-white flex items-center transition-all duration-300 hover:shadow-lg">
//           <div className="z-10 flex h-full flex-col items-center justify-center space-y-4 px-10">
//             <div className="text-2xl p-3 bg-white bg-opacity-20 rounded-full">
//               {cards[2].icon}
//             </div>
//             <h2 className="text-xl font-bold">{cards[2].value}</h2>
//             <p>{cards[2].label}</p>
//           </div>
//           <div className="-z-1 absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
//           <div className="-z-1 absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
