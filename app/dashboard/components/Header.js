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
    <div className="w-full bg-white  py-4 mt-3">
      <div className="  px-5 lg:px-0  ">
        <div className="flex justify-between items-center gap-3">
          {isOn ? (
            <h3 className="text-2xl font-bold ml-2">Test</h3>
          ) : (
            <h3 className="text-2xl font-bold ml-2">Developer</h3>
          )}
          <div
            className={`w-60 h-12  flex items-center justify-around   rounded-md cursor-pointer bg-[#111857]`}
            onClick={() => toggleSwitch()}
          >
            <p
              className={`${
                isOn
                  ? "bg-gradient-to-b from-blue-600 to-purple-400"
                  : "bg-[#111857]"
              } w-24 h-10 rounded-md text-center flex items-center justify-center text-sm text-white font-bold`}
              onClick={() => toggleSwitch}
            >
              Test mode
            </p>

            <p
              className={`${
                !isOn
                  ? "bg-gradient-to-b from-blue-600 to-purple-400"
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
