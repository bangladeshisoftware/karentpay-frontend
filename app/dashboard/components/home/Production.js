"use client";
import React, { useState, useEffect } from "react";
import ApiRequest from "@/app/_lib/Api_request";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { FaBan } from "react-icons/fa";
export default function Production() {
  const [key, setKey] = useState({});
  const [copyMessage1, setCopyMessage1] = useState("");
  const [copyMessage2, setCopyMessage2] = useState("");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    getTestKey();
  }, []);

  useEffect(() => {
    console.log(key[0]);
  }, [key]);

  const getTestKey = async () => {
    const response = await ApiRequest({
      url: "/key",
      method: "get",
    });
    if (response.status === 200) {
      setKey(response.data);
    } else {
      console.log(response);
    }

    console.log(key);
  };

  const handleCopy1 = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyMessage1("Copied!");
        setTimeout(() => setCopyMessage1(""), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCopy2 = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyMessage2("Copied!");
        setTimeout(() => setCopyMessage2(""), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleRevealText = () => {
    setShowText(true);
  };
  const handleHideText = () => {
    setShowText(false);
  };
  return (
    <div className="container ml-0 mt-5">
      <h2 className="text-3xl font-bold">Developers</h2>
      <div className="border-b">
        <p className="mt-2">API keys</p>
      </div>
      <div className="w-full border p-3 mt-3 rounded-md flex items-center justify-between">
        <h3 className="text-xl font-semibold">API keys</h3>
        <Link className="" href="#">
          <span className="text-sm text-[#2F65EC] font-medium flex items-center">
            Learn more about API Authentication{" "}
            <IoIosArrowRoundForward fontSize={20} />
          </span>
        </Link>
      </div>

      <div className="mt-5 border rounded-md">
        <div className="border-b p-4 text-center flex items-center  justify-between ">
          <h3 className="text-xl font-semibold  ">Standard keys</h3>
          <h3 className="text-xl font-semibold  ">Domain Name</h3>
          <div className="relative">
            <SlOptions />
            <div className="bg-white border shadow-md rounded-sm absolute p-2 flex flex-col gap-2">
              <p className="flex items-center gap-1">
                Delete{" "}
                <span>
                  <MdDelete className="text-red-900" />
                </span>
              </p>
              <p className="flex items-center gap-1">
                Ban{" "}
                <span>
                  <FaBan className="text-red-700" />
                </span>
              </p>
            </div>
          </div>
          {/* <p className="text-sm font-normal">
            Create a key that unlocks full API access, enabling extensive
            interaction with your account.{" "}
            <Link href="#">
              <span className="text-[#2F65EC]">Learn more</span>
            </Link>
          </p> */}
        </div>
        <div className="">
          <table>
            <thead>
              <tr className="w-full text-left  mt-3 h-8 border-b ">
                <th className="lg:w-[30%]  text-xs font-medium">
                  <div className="ml-4">NAME</div>
                </th>
                <th className="lg:w-[30%] font-medium text-xs">TOKEN</th>
                <th className="lg:w-[15%] font-medium text-xs">LAST USED</th>
                <th className="lg:w-[15%] font-medium text-xs">CREATED</th>
                <th className="lg:w-[10%] font-medium text-xs">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xs ml-4 h-20 border-b">
                <td>
                  <div className="ml-3 font-semibold">Publishable key</div>
                </td>
                <td
                  className="break-words cursor-pointer relative "
                  onClick={() =>
                    handleCopy1(
                      "pk_test_51POXHyGQoiRj0oYpQgjiiaOxOnhhmT7ZFvGQUdAOV9aRJSM4i50shZI6ICgXtw3bhXzIINJDkRh2o8ioxxEWpT8V00w4lYTsM3"
                    )
                  }
                  onMouseEnter={() => setCopyMessage1("Click to copy")}
                  onMouseLeave={() => setCopyMessage1("")}
                >
                  {copyMessage1 && (
                    <div className="absolute -top-6 left-0 bg-gray-200 text-xs p-1 rounded">
                      {copyMessage1}
                    </div>
                  )}
                  pk_test_51POXHyGQoiRj0oYpQgjiiaOxOnhhmT7
                  ZFvGQUdAOV9aRJSM4i50shZI6ICgXtw
                  3bhXzIINJDkRh2o8ioxxEWpT8V00w4lYTsM3
                </td>
                <td>-</td>
                <td>9jun</td>
              </tr>
              <tr className="text-xs mt-4">
                <td>
                  <div className="ml-3 font-semibold">Secret key</div>
                </td>
                <td className="relative">
                  <span
                    className={`relative cursor-pointer ${
                      !showText ? "blur-lg" : ""
                    }`}
                    onClick={() =>
                      handleCopy2(
                        "pk_test_51POXHyGQoiRj0oYpQgjiiaOxOnhhmT7ZFvGQUdAOV9aRJSM4i50shZI6ICgXtw3bhXzIINJDkRh2o8ioxxEWpT8V00w4lYTsM3"
                      )
                    }
                    onMouseEnter={() => setCopyMessage2("Click to copy")}
                    onMouseLeave={() => setCopyMessage2("")}
                  >
                    {copyMessage2 && (
                      <div className="absolute -top-6 left-0 bg-gray-200 text-xs p-1 rounded">
                        {copyMessage2}
                      </div>
                    )}
                    pk_test_51POXHyGQoiRj0oYpQgjiiaOxOnhhmT7
                    ZFvGQUdAOV9aRJSM4i50shZI6ICgXtw
                    3bhXzIINJDkRh2o8ioxxEWpT8V00w4lYTsM3 <br />
                  </span>
                  {showText ? (
                    <button
                      className="bg-white border rounded-md shadow-md p-1"
                      onClick={handleHideText}
                    >
                      Hide Token
                    </button>
                  ) : (
                    <button
                      className="bg-white border absolute top-4 left-20 rounded-md shadow-md p-1"
                      onClick={handleRevealText}
                    >
                      Reveal Token
                    </button>
                  )}
                </td>
                <td>-</td>
                <td>9jun</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 border rounded-md">
        <div className="border-b p-4">
          <h3 className="text-xl font-semibold">Restricted keys</h3>
        </div>
        <table>
          <thead>
            <tr className="w-full text-left text-xs  border-b h-8">
              <th className="w-[75%]">
                <div className="ml-4 font-medium">NAME</div>
              </th>
              <th className="w-[200px] font-medium">TOKEN</th>
              <th className="w-[200px] font-medium">LAST USED</th>
              <th className="w-[200px] font-medium">CREATED</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs ml-3 h-8">
              <td>
                <p className="ml-4">No restricted keys</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
