"use client";

import apb from "@/app/_assets/Airtel_Payments_Bank_logo.svg.png";
import bkash from "@/app/_assets/bkash.png";
import FreeCharge from "@/app/_assets/FreeCharge_Logo.png";
import mycash from "@/app/_assets/mycash.png";
import nagad from "@/app/_assets/nagad.png";
import ok from "@/app/_assets/ok-logo.png";
import paytm from "@/app/_assets/paytm.png";
import PhonePe from "@/app/_assets/PhonePe-Logo.png";
import rocket from "@/app/_assets/rocket.png";
import upay from "@/app/_assets/Upay.png";
import useFetchingData from "@/lib/useFetchingData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PaymentGatewayComponent = () => {
  const bdExchangers = [
    {
      id: 1,
      title: "Bkash",
      img: bkash,
    },
    {
      id: 2,
      title: "Nagad",
      img: nagad,
    },
    {
      id: 3,
      title: "Upay",
      img: upay,
    },
    {
      id: 4,
      title: "rocket",
      img: rocket,
    },
    {
      id: 5,
      title: "MyCash",
      img: mycash,
    },
    {
      id: 6,
      title: "Ok Wallet",
      img: ok,
    },
  ];

  const IndiaExchangers = [
    {
      id: 1,
      title: "PhonePay",
      img: PhonePe,
    },
    {
      id: 2,
      title: "PayTm",
      img: paytm,
    },
    {
      id: 3,
      title: "FreeCharge",
      img: FreeCharge,
    },
    {
      id: 4,
      title: "Airtel Payments Bank",
      img: apb,
    },
  ];

  const { fetchData } = useFetchingData("/api/front/setting/logo-identity");

  return (
    <div className="mt-[70px]">
      <div className="container text-center">
        <div>
          <h2 className="text-3xl font-bold text-center leading-relaxed">
            A world-class payment solution for your business,
            <br /> powered by{" "}
            <Link href="/">
              <span className="gradient-text">
                {fetchData?.settings?.siteName}
              </span>
            </Link>
          </h2>
          <p className="mt-5 text-base">
            Seamless payments across all of your devices begin with a few quick
            steps.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold lg:text-left md:text-left text-center">
            Bangladesh Payment Gateway Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-6 lg:gap-2 md:gap-6 mt-10">
            {bdExchangers.map((exchanger) => (
              <div
                key={exchanger.id}
                className="bg-white w-full  scale-110 lg:scale-100 md:scale-100 lg:w-[200px] md:w-[200px] h-[150px] flex flex-col items-center justify-center border rounded-lg shadow-md transition-transform duration-300 hover:scale-110 focus-within:border-4 focus-within:border-blue-500 cursor-pointer"
              >
                <Image
                  className="h-auto"
                  src={exchanger.img}
                  height={100}
                  width={100}
                  alt={exchanger.title}
                />
                <h3 className="text-lg font-medium">{exchanger.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center lg:text-left md:text-left">
            India Payment Gateway Support
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-6 lg:gap-2 md:gap-6 mt-10">
          {IndiaExchangers.map((exchanger) => (
            <div
              key={exchanger.id}
              className="bg-white w-full  scale-110 lg:scale-100 md:scale-100 lg:w-[200px] md:w-[200px] h-[150px] flex flex-col items-center justify-center gap-3 border rounded-lg shadow-md transition-transform duration-300 hover:scale-110 focus-within:border-4 focus-within:border-blue-500 cursor-pointer"
            >
              <Image
                className="h-auto w-[100px]"
                src={exchanger.img}
                alt={exchanger.title}
              />
              <h3 className="text-lg font-medium">{exchanger.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayComponent;
