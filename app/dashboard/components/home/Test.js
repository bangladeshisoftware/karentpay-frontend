"use client";
import React, { useState, useEffect } from "react";
import ApiRequest from "@/app/_lib/Api_request";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { format } from 'date-fns';


const Test = () => {
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
      setKey(response.data[0]);
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
    console.log(showText, "showtext");
    if (showText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopyMessage2("Copied!");
          setTimeout(() => setCopyMessage2(""), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      navigator.clipboard
        .writeText(" ")
        .then(() => {
          setCopyMessage2("Copied!");
          setTimeout(() => setCopyMessage2(""), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  const handleRevealText = () => {
    setShowText(true);
  };
  const handleHideText = () => {
    setShowText(false);
  };

  return (
    <div className=" ml-2 lg:ml-8 mt-5">
      <div className="w-full border p-3 mt-3 rounded-md lg:flex items-center justify-between">
        <h3 className="text-xl font-semibold">API keys</h3>
        <Link className="" href="#">
          <span className="text-sm text-[#2F65EC] font-medium flex items-center">
            Learn more about API Authentication{" "}
            <IoIosArrowRoundForward fontSize={20} />
          </span>
        </Link>
      </div>

      <div className="mt-5 border rounded-md">
        <div className="border-b p-4">
          <h3 className="text-xl font-semibold">Standard keys</h3>
          <p className="text-sm font-normal">
          This key only for testing Purpose
          </p>
        </div>
        <div>
          <table className="table-auto w-full ">
            <thead>
              <tr className="w-full text-left  mt-3 h-8 border-b ">
                <th className="w-[200px]  text-xs font-medium">
                  <div className="ml-4">NAME</div>
                </th>
                <th className="lg:w-[200px] md:w-[300px] md:h-10 font-medium text-xs">
                  TOKEN
                </th>
                <th className="lg:w-[200px] md:w-[300px] font-medium text-xs">
                  LAST USED
                </th>
                <th className="lg:w-[200px] font-medium text-xs">CREATED</th>
                <th className="lg:w-[100px]"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xs ml-4 h-20 border-b w-full">
                <td>
                  <div className="ml-3 font-semibold">Publishable key</div>
                </td>
                <td
                  className={`relative cursor-pointer`}
                  onClick={() =>
                    handleCopy1(key.public_key)
                  }
                  onMouseEnter={() => setCopyMessage1("Click to copy")}
                  onMouseLeave={() => setCopyMessage1("")}
                >
                  {copyMessage1 && (
                    <div className="absolute -top-6 left-0 bg-gray-200 text-xs p-1 rounded">
                      {copyMessage1}
                    </div>
                  )}
                {key.public_key} &nbsp;&nbsp;&nbsp;
                </td>
                <td>-</td>
                <td>{key.created_at&&format(key.created_at, 'dd' + ' ' + 'MMMM' + ' ' + 'yyyy')}</td>
                
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
                    onClick={() =>  handleCopy2(key.privet_key)}
                    onMouseEnter={() => setCopyMessage2("Click to copy")}
                    onMouseLeave={() => setCopyMessage2("")}
                  >
                    {copyMessage2 && (
                      <div className="absolute -top-6 left-0 bg-gray-200 text-xs p-1 rounded">
                        {copyMessage2}
                      </div>
                    )}
                  {key.privet_key} &nbsp;&nbsp;&nbsp;<br />
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
                <td>{key.created_at&&format(key.created_at, 'dd' + ' ' + 'MMMM' + ' ' + 'yyyy')}</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Test;
