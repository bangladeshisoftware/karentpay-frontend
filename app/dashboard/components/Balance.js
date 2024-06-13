'use clint';
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import {toast} from 'react-toastify';
import ApiRequest from "@/app/_lib/Api_request";


function Balance() {
const[balance,setbalance]=useState(0);
useEffect(() => {
  handlePayment();
}, []);


  const handlePayment=async()=>{    
      const response=await ApiRequest({
        url:'/user',
       method:'get',
      });
      if(response.status==200){
        setbalance(response.data.user.balance)
       console.log(response);
      
      }else{
        toast.error(response.message)
      }
      
  }






  return (
    <div className="rounded-md mt-10 ml-2 lg:ml-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around gap-4 px-5 lg:px-0 pb-5">
        <div className="border rounded-md shadow px-20 py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl bg-[#FFFF] rounded-full text-black p-3">
            <HiOutlineCurrencyDollar />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold "> {balance}</h2>
            </div>
            <div>
              <p>Total Balance</p>
            </div>
          </div>
        </div>



        <div className="border rounded-md shadow px-20 py-16 lg:py-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl bg-[#FFFF] rounded-full text-black p-3">
            <HiOutlineCurrencyDollar />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold "> {balance}</h2>
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
              <h2 className="text-xl font-bold "> {balance}</h2>
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
