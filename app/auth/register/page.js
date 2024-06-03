"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/_assets/epayget-white-logo.png";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
export default function Register() {
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" bg-white h-full  flex flex-row items-center py-10 my-auto">
      <div className="flex justify-center items-center w-full h-full  my-auto">
        <div className="lg:h-[1000px] lg:w-[550px] md:w-[550px] h-full w-full shadow-2xl rounded-2xl mt-16 pb-6 lg:px-20 md:px-20 my-auto border-t flex flex-col  ">
          <div className="mx-auto lg:mt-14 mt-4">
            <Image className="" src={logo} width={150} height={62} alt="" />
          </div>
          <div className="lg:pt-5 lg:mt-5 mt-3 mb-5 text-[1.5rem] font-semibold text-[#2F65EC] text-center mx-auto">
            <h2>PayGet Sign Up</h2>
          </div>
          <form onSubmit={handleSignUp} className="">
            <div className="border my-6 mx-auto  lg:mx-0   bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-3/4 lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              ></input>
            </div>
            <div className="border my-6 mx-auto  lg:mx-0   bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-3/4 lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              ></input>
            </div>
            <div className="border my-6 mx-auto  lg:mx-0   bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-3/4 lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="email"
                name="email"
                placeholder="email"
                required
              ></input>
            </div>
            <div className="border my-6 mx-auto  lg:mx-0   bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-3/4 lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="number"
                name="phone"
                placeholder="Phone "
                required
              ></input>
            </div>
            <div className="border my-6 mx-auto  lg:mx-0   bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-3/4 lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="password"
                name="password"
                placeholder="Password"
                required
              ></input>
            </div>
            <div className="border my-6 mx-auto  lg:mx-0   bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-3/4 lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              ></input>
            </div>

            <div className="flex justify-start mt-5">
              <p className=" text-[black] ml-12 lg:ml-0 ">
                Already have an account?{" "}
                <Link href="/auth/login">
                  <span className="text-[#2F65EC] hover:underline">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
            <div className="">
              <button
                className="bg-gradient-to-br from-purple-600 to-blue-500 w-60 mx-auto lg:mx-0 lg:w-full p-2 rounded-md text-center text-white lg:mt-10 mt-3 hover:from-blue-600 hover:to-purple-700"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="">
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-600 w-60 mx-auto lg:mx-0 lg:w-full p-2 rounded-md text-center text-white lg:mt-5 mt-3 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
              type="submit"
            >
              <p>Sign In with</p> <FcGoogle size={20} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
