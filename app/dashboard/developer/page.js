import React from "react";
import Test from "../components/home/Test";
import Production from "../components/home/Production";

export default function Developer({ isTest }) {
  return (
    <div className=" bg-white rounded-md pt-3 ml-0  px-1 lg:px-2 h-full">
      {isTest ? <Test /> : <Production/>}
    </div>
  );
}
