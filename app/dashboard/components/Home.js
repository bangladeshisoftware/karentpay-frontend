import React from "react";
import Test from "./home/Test";
import Production from "./home/Production";
import Developer from "@/app/dashboard/components/Developer";

function Home({ isTest }) {
  return <>{isTest ? <Test /> : <Developer />}</>;
}

export default Home;
