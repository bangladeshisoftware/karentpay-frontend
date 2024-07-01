"use client";
import React, { useState, useEffect } from "react";
import ApiRequest from "@/app/_lib/Api_request";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { FaBan } from "react-icons/fa";
import { format } from "date-fns";

export default function Production() {
  const [keys, setKeys] = useState([]);
  const [copyMessage1, setCopyMessage1] = useState("");
  const [copyMessage2, setCopyMessage2] = useState("");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    getTestKey();
  }, []);

  const getTestKey = async () => {
    const response = await ApiRequest({
      url: "/production_key",
      method: "get",
    });
    console.log(response);
    if (response.status === 200) {
      setKeys(response.data);
    } else {
      console.log(response);
    }
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

  const [DeleteBan, setDeleteBan] = useState(false);
  const handleDeleteBan = () => {
    setDeleteBan(!DeleteBan);
  };

  return (
    <div className=" mt-5">
      <div className="w-full border lg:p-3 mt-3 rounded-md lg:flex  lg:items-center lg:justify-between ">
        <h3 className="text-xl font-semibold"> API keys</h3>
        <Link className="" target="_blank" href="#">
          <span className="text-sm text-[#2F65EC] font-medium flex items-center">
            Learn more about API Authentication{" "}
            <IoIosArrowRoundForward fontSize={20} />
          </span>
        </Link>
      </div>

      {keys?.map((key, index) => (
        <div key={key.id} className="mt-5 border rounded-md">
          <div className="border-b lg:p-4 text-center lg:flex md:flex items-center  lg:justify-between md:justify-between">
            <h3 className="text-xl font-semibold  ">Standard keys</h3>
            {/* <h3 className="text-xl font-semibold  ">Domain Name</h3> */}
            <div className="relative">
              <SlOptions onClick={handleDeleteBan} />
              {DeleteBan ? (
                <div className="bg-white border shadow-md rounded-sm absolute right-0 p-2 flex flex-col gap-2 cursor: pointer">
                  <p
                    onClick={() => {
                      console.log("Deactived");
                    }}
                    className="flex items-center gap-1 cursor: pointer"
                  >
                    Deactive{" "}
                    <span>
                      <FaBan className="text-red-700" />
                    </span>
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="text-left mt-3 h-8 border-b">
                  <th className="w-[200px] text-xs font-medium">
                    <div className="ml-4">NAME</div>
                  </th>
                  <th className="lg:w-[200px] md:w-[300px] w-[150px] font-medium text-xs">
                    TOKEN
                  </th>
                  <th className="lg:w-[200px] md:w-[300px] w-[150px] font-medium text-xs">
                    LAST USED
                  </th>
                  <th className="lg:w-[200px] md:w-[300px] w-[150px] font-medium text-xs">
                    CREATED
                  </th>
                  <th className="lg:w-[200px] md:w-[300px] w-[150px] font-medium text-xs">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-xs ml-4 h-20 border-b">
                  <td>
                    <div className="ml-3 font-semibold">Publishable key</div>
                  </td>
                  <td
                    className="relative cursor-pointer break-words word-break-all overflow-hidden"
                    onClick={() => handleCopy1(key?.public_key)}
                    onMouseEnter={() => setCopyMessage1("Click to copy")}
                    onMouseLeave={() => setCopyMessage1("")}
                  >
                    {copyMessage1 && (
                      <div className="absolute -top-6 left-0 bg-gray-200 text-xs p-1 rounded">
                        {copyMessage1}
                      </div>
                    )}
                    <div className="break-words word-break-all overflow-hidden">
                      {key?.public_key}
                    </div>
                  </td>
                  <td>-</td>
                  <td>
                    {key?.created_at && format(key?.created_at, "dd MMMM yyyy")}
                  </td>
                  <td>{key?.status == 1 ? "Active" : "Deactive"}</td>
                </tr>
                <tr className="text-xs mt-4">
                  <td>
                    <div className="ml-3 font-semibold">Secret key</div>
                  </td>
                  <td className="relative break-words word-break-all overflow-hidden">
                    <span
                      className={`relative cursor-pointer ${
                        !showText ? "blur-lg" : ""
                      }`}
                      onClick={() => handleCopy2(key?.privet_key)}
                      onMouseEnter={() => setCopyMessage2("Click to copy")}
                      onMouseLeave={() => setCopyMessage2("")}
                    >
                      {copyMessage2 && (
                        <div className="absolute -top-6 left-0 bg-gray-200 text-xs p-1 rounded">
                          {copyMessage2}
                        </div>
                      )}
                      <div className="break-words word-break-all overflow-hidden">
                        {key?.privet_key}
                      </div>
                      <br />
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
                  <td>
                    {key?.created_at && format(key?.created_at, "dd MMMM yyyy")}
                  </td>
                  <td>{key?.status ==1 ? "Active" : "Deactive"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}