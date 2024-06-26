import React from "react";
import Test from "./home/Test";
import Production from "./home/Production";

export default function Developer({ isTest }) {
  return (
    <div className=" bg-white rounded-md py-6 ml-0 lg:ml-5 px-1 lg:px-2">
      {isTest ? <Test /> : <Production/>}
    </div>
  );
}
