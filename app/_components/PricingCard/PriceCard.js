import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { GoCheckCircleFill } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";

const PriceCard = ({ item }) => {
  const crossItems = [
    "All Payment Methods Included by Default",
    "No Additional Payment Method Fees",
  ];

  return (
    <div className="border shadow-md rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="bg-gradient-2 rounded-md py-10">
        <div className="border rounded-full flex justify-center mx-auto text-white mt-2 mb-10 w-1/2 p-3">
          <div className="mt-1 text-xl">
            <CiBookmarkCheck />
          </div>
          <div className="ml-1 text-xl">{item?.name}</div>
        </div>
        <div className="px-4 break-words">
          <h1 className="text-xl text-center text-white font-bold pb-2 break-words">
            {item?.description}
            <span className="text-2xl font-bold block sm:inline break-words">
              {" "}
              {item?.charge_percentage}%{" "}
            </span>
            Charges
          </h1>
        </div>
      </div>
      {item?.features?.map((feature, index, array) => (
        <div
          key={index}
          className={`flex pl-4 py-4 bg-white transition-colors duration-300 hover:bg-gray-100 ${
            index !== array.length - 1 ? "border-b-2 border-gray-500" : ""
          }`}
        >
          <div
            className={`pt-1 pr-2 ${
              crossItems.includes(feature.name)
                ? "text-red-500"
                : "text-[#7073F3]"
            }`}
          >
            {crossItems.includes(feature.name) ? (
              <RxCrossCircled />
            ) : (
              <GoCheckCircleFill />
            )}
          </div>
          <div>
            <p>{feature.name}</p>
          </div>
        </div>
      ))}
      <div className="text-center py-10 bg-white">
        <Link
          href="/auth/register"
          className="bg-gradient-2 transition-transform duration-300 hover:scale-105 text-white px-12 py-3 mb-6 rounded-md"
        >
          Choose Plan
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
