"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

function Header({isOn,toggleSwitch}) {


  // make use EEffect


  // const [isOn, setIsOn] = useState(true);

  // const toggleSwitch = () => {
  //   setIsOn(!isOn);
  // };
  return (
    <div className="w-full bg-white  py-4 px-8">
      <div className="flex justify-between items-center max-w-[90%]">
        <div className="bg-[#F5F6F8] flex items-center gap-3 rounded-md w-[40%]">
          <IoIosSearch className="ml-2" />
          <input
            className="outline-none bg-transparent p-2 "
            type="text"
            placeholder="search"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link href="#">
            <span className="text-sm text-[#2F65EC] font-medium">
              Developers
            </span>
          </Link>
          <p className="text-sm font-medium">Test mode</p>
          <div
            className={`w-10 h-5 flex items-center  rounded-full p-0 cursor-pointer ${
              isOn ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => toggleSwitch()}  
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                isOn ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
          <GoQuestion fontSize={20} />
          <IoNotificationsOutline fontSize={20} />
          <MdOutlineSettings fontSize={20} />
          <CiCirclePlus fontSize={20} />
        </div>
      </div>
    </div>
  );
}

export default Header;
