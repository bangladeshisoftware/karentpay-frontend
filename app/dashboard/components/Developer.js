import React from "react";
import Test from "./home/Test";
import Production from "./home/Production";

export default function Developer({ isTest }) {
  return (
    <div className="w-full  px-5 lg:px-0">
      {isTest ? <Test /> : <Production/>}
    </div>
  );
}
