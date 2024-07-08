"use clint";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { toast } from "react-toastify";
import ApiRequest from "@/app/_lib/Api_request";

function Balance() {
  const [balance, setbalance] = useState(0);
  useEffect(() => {
    handlePayment();
  }, []);

  const handlePayment = async () => {
    const response = await ApiRequest({
      url: "/user",
      method: "get",
    });
    if (response.status == 200) {
      setbalance(response.data.user.balance);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="rounded-md mt-10 ml-0 lg:ml-5">
      <div className=" border shadow-lg mb-4 lg:mb-2 p-3 lg:p-3 mt-3 rounded-md text-center lg:text-left lg:hidden  ">
        <h3 className="text-xl font-semibold">Balance</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around gap-2 px-1 lg:px-0 pb-5">
        <div className="border shadow-lg rounded-md w-full h-60 flex items-center transition-all duration-300 hover:shadow-lg bg-white sm:h-60">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Cash In  Balance</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">{balance}</h2>
            </div>
            <div>
              <p>Jan-March 2024</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <HiOutlineCurrencyDollar className="text-red-500 text-opacity-80" />
          </div>
        </div>

        <div className="border shadow-lg rounded-md w-full h-60 flex items-center transition-all duration-300 hover:shadow-lg bg-white sm:h-60">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Payout Balance</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">{balance}</h2>
            </div>
            <div>
              <p>Jan-March 2024</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <HiOutlineCurrencyDollar className="text-green-700 text-opacity-80" />
          </div>
        </div>

        <div className="border shadow-lg rounded-md w-full h-60 flex items-center transition-all duration-300 hover:shadow-lg bg-white sm:h-60 mb-4">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Wallet Balance</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">{balance}</h2>
            </div>
            <div>
              <p>Jan-March 2024</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <HiOutlineCurrencyDollar className="text-blue-700 text-opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
