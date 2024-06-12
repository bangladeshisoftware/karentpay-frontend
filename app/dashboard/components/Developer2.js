import React from "react";
import Test from "./home/Test";
import Developer from "./Developer";

export default function Developer2({ isTest }) {
  return (
    <div className="w-full  px-5 lg:px-0">
      {isTest ? <Test /> : <Developer />}
    </div>
  );
}
