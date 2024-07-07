"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

function Header({ isOn, toggleSwitch }) {
  // make use EEffect

  // const [isOn, setIsOn] = useState(true);

  // const toggleSwitch = () => {
  //   setIsOn(!isOn);
  // };
  return (
    <div className="w-full   py-4 mt-3">
      <div className=" border shadow-lg mb-4 lg:mb-2 p-3 lg:p-3 mt-3 rounded-md text-center lg:text-left lg:hidden  ">
        <h3 className="text-xl font-semibold">Developer</h3>
      </div>

      <div className="  px-2 lg:px-0  ">
        <div className="flex justify-between items-center gap-3">
          {isOn ? (
            <h3 className="text-2xl font-bold ml-2 lg:ml-8">Test</h3>
          ) : (
            <h3 className="text-2xl font-bold ml-2 lg:ml-8">Developer</h3>
          )}
          <div
            className={`w-60 h-12  flex items-center justify-around   rounded-md cursor-pointer bg-[#111857]`}
            onClick={() => toggleSwitch()}
          >
            <p
              className={`${
                isOn
                  ? "bg-gradient-2"
                  : "bg-[#111857]"
              } w-24 h-10 rounded-md text-center flex items-center justify-center text-sm text-white font-bold`}
              onClick={() => toggleSwitch}
            >
              Test mode
            </p>

            <p
              className={`${
                !isOn
                  ? "bg-gradient-2"
                  : "bg-[#111857]"
              } w-24 h-10 rounded-md text-center flex items-center justify-center text-sm text-white font-bold`}
              onClick={() => toggleSwitch}
            >
              Dev mode
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
