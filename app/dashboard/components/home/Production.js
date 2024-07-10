"use client";
import React, { useState, useEffect } from "react";
import ApiRequest from "@/app/_lib/Api_request";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { FaBan } from "react-icons/fa";
import { format } from "date-fns";
import { DrawerDialogDemo } from '@/app/_components/Header/BecomeMerchent/DrawerDialogDemo';

export default function Production() {
  const [keys, setKeys] = useState([]);
  const [copyMessage1, setCopyMessage1] = useState("");
  const [copyMessage2, setCopyMessage2] = useState("");
  const [showText, setShowText] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const[data,setData]=useState([]);

  useEffect(() => {
    getLiveKey();
    getMarchent();
  }, [isDrawerOpen]);

  const getLiveKey = async () => {
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

  const getMarchent=async()=>{
    const response = await ApiRequest({
      url: "/get_marchent_apply_info",
      method: "get",
    });
    console.log(response);
    if (response.status === 200) {
      if(response.data.length>0){
        setData(response.data); 
      }else{
        setData(null);
      }      
    } else {
      console.log(response);
    }
  }

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
          {data===null&&(
            <div className="overflow-x-auto">
            <div className="m-5">
              <h1> For Live key Please Apply Merchant {' '}
                <button 
                onClick={()=>{
                  console.log("clocked")
                  setIsDrawerOpen(true);
                }}
                className="button text-bold text-blue-500">Apply</button> 
              </h1>
                  
            </div>     
          </div>
          )}
    

      <div className="overflow-x-auto h-[60%]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Sl
                      </th>
                     
                      <th scope="col" className="px-4 py-3">
                      Business Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                      Email
                      </th>
                      <th scope="col" className="px-4 py-3">
                      Phone
                      </th>
                    
                      <th scope="col" className="px-4 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Date
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item,index) => (
                      <tr
                        key={index}
                        className="border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {index+1}
                        </th>
                        <td className="px-4 py-3">{item?.business_name}</td>
                        <td className="px-4 py-3">
                          {item?.name}
                        </td>
                        <td className="px-4 py-3">{item?.email}</td>
                        <td className="px-4 py-3">
                          {item?.phone}
                        </td>
                        <td className="px-4 py-3">{item?.confirmed==0?"pending":item?.confirmed==1?"Active":item?.confirmed==2?"Rejected":""}</td>
                        <td className="px-4 py-3">{item?.created_at && format(item?.created_at, "dd MMMM yyyy")}</td>
                        
                      
                        {/* <td className="px-4 py-3 flex items-center justify-end"></td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


      {keys?.map((key, index) => (
        <div key={key.id} className="mt-5 border rounded-md">
          <div className="border-b lg:p-4 text-center flex p-4 justify-between lg:flex md:flex items-center  lg:justify-between md:justify-between">
            <h3 className="text-sm lg:text-xl font-semibold  ">{key?.business_name}</h3>
            {/* <h3 className="text-xl font-semibold  ">Domain Name</h3> */}
            <div className="relative">
              <SlOptions onClick={handleDeleteBan} />
             
            </div>
          </div>
         
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="text-left mt-3 h-8 border-b">
                  <th className="w-[200px] text-xs font-medium">
                    <div className="ml-4">NAME</div>
                  </th>
                  <th className="lg:w-[200px] md:w-[300px] w-[150px] font-medium text-xs ">
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
                    className="relative cursor-pointer overflow-hidden"
                    onClick={() => handleCopy1(key?.public_key)}
                    onMouseEnter={() => setCopyMessage1("Click to copy")}
                    onMouseLeave={() => setCopyMessage1("")}
                  >
                    {copyMessage1 && (
                      <div className="absolute top-3 left-5 lg:top-9 lg:left-14 bg-blue-300 text-black text-xs p-1 rounded">
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
                  <td className="relative  overflow-hidden">
                    <span
                      className={`relative cursor-pointer ${
                        !showText ? "blur-lg" : ""
                      }`}
                      onClick={() => handleCopy2(key?.privet_key)}
                      onMouseEnter={() => setCopyMessage2("Click to copy")}
                      onMouseLeave={() => setCopyMessage2("")}
                    >
                      {copyMessage2 && (
                        <div className="absolute top-3 left-5 lg:top-3 lg:left-14 bg-blue-300 text-black text-xs p-1 rounded">
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
                        className="bg-white border rounded-md shadow-md p-1 lg:ml-10 md:ml-10"
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
      <DrawerDialogDemo open={isDrawerOpen} setOpen={setIsDrawerOpen} />
    </div>
  );
}