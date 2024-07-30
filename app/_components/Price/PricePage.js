"use client";

import desktopLogo from "@/app/_assets/kpay.png";
import useFetchingData from "@/lib/useFetchingData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCheckmark } from "react-icons/io5";
import PriceCard from "../PricingCard/PriceCard";

const PricePage = () => {
  const { fetchData } = useFetchingData("/api/front/pricing-items");
  const { fetchData: settingsData } = useFetchingData(
    "/api/front/setting/logo-identity"
  );

  return (
    <div className="container">
      <div className="mt-24 mb-28">
        <h1 className=" text-center text-3xl font-bold ">
          <span className=" gradient-text">
            {" "}
            {settingsData?.settings?.siteName}
          </span>
        </h1>
        <p className="text-xl mt-4 text-center font-normal">
          Automatic Payment Gateway Pricing Value
        </p>
      </div>
      {/* <div>
        <p className='text-base text-center mt-14 mb-24'>
          Unlock unbeatable value with E-Payment Gateway Pricing. Our
          transparent rates and tailored solutions ensure you get the best{' '}
          <br /> bang for your buck every time
        </p>
      </div> */}
      <div className=" mb-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {fetchData?.map((item, index) => (
          <div
            key={index}
            className="w-full scale-100 lg:scale-100 md:scale-98"
          >
            <PriceCard item={item} />
          </div>
        ))}
      </div>
      {/* add Block  */}
      <div>
        <div className="text-3xl text-center font-bold py-4 mb-10">
          Start your withdraw plan trial today
        </div>
        <div className="bg-white flex flex-col md:flex-row justify-around w-full items-center border rounded-md shadow-md p-4 sm:p-6 md:p-8 mb-24 transition-all duration-300 hover:border-blue-500">
          <div className="mb-4 md:mb-0 md:mr-8 flex gap-x-8 items-center">
            <div>
              <Link href="/">
                <Image
                  src={desktopLogo}
                  alt="logo"
                  className="w-auto h-24 "
                  priority
                />
              </Link>
            </div>
            <div className="pb-4">
              <div className="text-2xl text-[#7073F3] pb-4">
                Automatic Payout & Withdraw Solution Instant
              </div>
              {/* <div className='text-xl text-[#7073F3] line-through'>
                BDT 5% charges Transaction
              </div> */}
              <div className="mt-2">
                <Link
                  href="/auth/register"
                  className="bg-gradient-2 transition-transform duration-300 hover:scale-105 px-8 py-3 text-sm rounded-md text-white "
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <IoCheckmark className="text-blue-500 mr-2" />
              <p>GetWay Advanced</p>
            </div>
            <div className="flex items-center">
              <IoCheckmark className="text-blue-500 mr-2" />
              <p>Additional Store Support</p>
            </div>
            <div className="flex items-center">
              <IoCheckmark className="text-blue-500 mr-2" />
              <p>All Payment Methods Included</p>
            </div>
            <div className="flex items-center">
              <IoCheckmark className="text-blue-500 mr-2" />
              <p>Other Diamond plan benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
