"use client";
import React, { useState } from "react";
import Test from "../components/home/Test";
import Production from "../components/home/Production";
import Header from "../components/Header";

export default function Developer() {

  const [isOn, setIsOn] = useState(true);

  return (

    <div className=" bg-white rounded-md pt-3 ml-0  px-1 lg:px-2 h-full border-[1px]">
      <Header
        setIsOn={setIsOn}
        isOn={isOn}
      ></Header>
      {isOn ? <Test /> : <Production />}
    </div>
  );
}
