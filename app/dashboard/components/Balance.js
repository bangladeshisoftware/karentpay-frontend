import React from "react";
import { FaUsers } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

function Balance() {
  return (
    <div className="rounded-md mt-10 ml-2 lg:ml-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around gap-4 px-5 lg:px-0 pb-5">
        <div className="border rounded-md shadow px-20 py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl bg-[#FFFF] rounded-full text-black p-3">
            <HiOutlineCurrencyDollar />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">$ 8,235</h2>
            </div>
            <div>
              <p>Daily Balance</p>
            </div>
          </div>
        </div>
        <div className="border rounded-md shadow px-20 py-16 lg:py-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl bg-[#FFFF] rounded-full text-black p-3">
            <HiOutlineCurrencyDollar />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">$ 200,235</h2>
            </div>
            <div>
              <p>Weekly Balance</p>
            </div>
          </div>
        </div>
        <div className="border rounded-md shadow px-20 py-16 lg:py-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl bg-[#FFFF] rounded-full text-black p-3">
            <HiOutlineCurrencyDollar />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">$ 221,235</h2>
            </div>
            <div>
              <p>Monthly Balance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
