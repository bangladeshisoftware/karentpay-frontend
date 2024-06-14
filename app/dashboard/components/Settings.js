"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditProfile from "./Edit-Profile/EditProfile";
function Product_Catalog() {
  const [selected, setSelected] = useState("profile");
  const [updated, setUpdated] = useState(false);

  const handleSelect = (section) => {
    setSelected(section);
  };

  const handleUpdate = () => {
    setUpdated(!updated);
  };



  const[user,setUser]=useState('');




  return (
    <div className="mt-10 ml-2 lg:ml-8  px-5 lg:px-0  flex flex-col ">
      <div className="nav bg-gradient-to-r from-purple-500 to-blue-600 hidden lg:flex md:flex xl:flex lg:gap-4 border rounded-md shadow-md  items-center h-fit mt-2  text-white  lg:py-4">
        <h3
          className={` cursor-pointer rounded-md p-2 ml-3 ${
            selected == "profile"
              ? "bg-gradient-to-r from-blue-800 to-purple-950"
              : "none"
          }`}
        >
          {!updated ? (
            <span
              onClick={() => {
                handleSelect("profile");
              }}
            >
              Profile
            </span>
          ) : (
            <span
              onClick={() => {
                handleSelect("update");
              }}
              className={` cursor-pointer p-2 rounded-md ${
                selected == "update"
                  ? "bg-gradient-to-r from-blue-800 to-purple-950"
                  : "none"
              }`}
            >
              Update Profile
            </span>
          )}
        </h3>

        <h3
          onClick={() => {
            handleSelect("verification");
          }}
          className={` cursor-pointer p-2 rounded-md ${
            selected == "verification"
              ? "bg-gradient-to-r from-blue-800 to-purple-950"
              : "none"
          }`}
        >
          Verifications
        </h3>

        <h3
          onClick={() => {
            handleSelect("integration");
          }}
          className={` cursor-pointer p-2 rounded-md ${
            selected == "integration"
              ? "bg-gradient-to-r from-blue-800 to-purple-950"
              : "none"
          }`}
        >
          Integrations
        </h3>

        <h3
          onClick={() => {
            handleSelect("passkey");
          }}
          className={` cursor-pointer p-2 rounded-md ${
            selected == "passkey"
              ? "bg-gradient-to-r from-blue-800 to-purple-950"
              : "none"
          }`}
        >
          PassKeys
        </h3>
        {/* <button className="px-4 border rounded-md  flex items-center gap-2 hover:border-blue-600 focus-within:border-blue-600">
          Edit
          <span>
            <FaRegEdit />
          </span>
        </button> */}
      </div>
      <div className="nav bg-gradient-to-r from-purple-500 to-blue-600 flex flex-col lg:hidden md:hidden xl:hidden lg:gap-4 border rounded-md shadow-md  items-center h-fit  mt-2  text-white  lg:py-4">
        <h3
          className={` cursor-pointer rounded-md p-2 ml-3 ${
            selected == "profile"
              ? "bg-gradient-to-r from-blue-800 to-purple-950"
              : "none"
          }`}
        >
          {!updated ? (
            <span
              onClick={() => {
                handleSelect("profile");
              }}
            >
              Profile
            </span>
          ) : (
            <span
              onClick={() => {
                handleSelect("update");
              }}
              className={` cursor-pointer p-2 rounded-md ${
                selected == "update"
                  ? "bg-gradient-to-r from-blue-800 to-purple-950"
                  : "none"
              }`}
            >
              Update Profile
            </span>
          )}
        </h3>

        <h3
          onClick={() => {
            handleSelect("verification");
          }}
          className={` cursor-pointer p-2 rounded-md ${
            selected == "verification"
              ? "bg-gradient-to-r from-blue-800 to-purple-950"
              : "none"
          }`}
        >
          Verifications
        </h3>

        <h3
          onClick={() => {
            handleSelect("integration");
          }}
          className={` cursor-pointer p-2 rounded-md ${
            selected == "integration"
              ? "bg-gradient-to-r from-blue-800 to-purple-950"
              : "none"
          }`}
        >
          Integrations
        </h3>

        <h3
          onClick={() => {
            handleSelect("passkey");
          }}
          className={` cursor-pointer p-2 rounded-md ${
            selected == "passkey"
              ? "bg-gradient-to-r from-blue-800 to-purple-950"
              : "none"
          }`}
        >
          PassKeys
        </h3>
        {/* <button className="px-4 border rounded-md  flex items-center gap-2 hover:border-blue-600 focus-within:border-blue-600">
          Edit
          <span>
            <FaRegEdit />
          </span>
        </button> */}
      </div>

      <div className="contain w-full h-fit border shadow-md rounded-sm mt-12 pb-8 lg:px-12  xs:px-12 px-4 ">
        {selected == "profile" && !updated && (
          <div className="lg:mx-24 xl:mx-24 md:mx-16 sm:mx-8 mx-0 font-normal ">
            <div className="mt-8">
              <h3 className="">
                Name
                <p className="border  w-full rounded-sm p-2 ">abcdef</p>
              </h3>
            </div>
            <div className="mt-8">
              <h3 className="">
                Country
                <p className="border  w-full rounded-sm p-2 ">Bangladesh</p>
              </h3>
            </div>
            <div className="mt-8">
              <h3 className="">
                Email
                <p
                  className="border
                  w-full rounded-sm p-2 "
                >
                  abcdef@gmail.com
                </p>
              </h3>
            </div>
            <div className="mt-8">
              <h3 className="">
                Phone
                <p className="border  w-full rounded-sm p-2 ">01234567890</p>
              </h3>
            </div>
            <div className="mt-8">
              <h3 className="">
                Password
                <p className="border  w-full rounded-sm p-2 ">********</p>
              </h3>
            </div>
            <div className="mt-8">
              <button
                onClick={() => {
                  handleUpdate();
                  handleSelect("update");
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 md:mx-0 sm:mx-0 w-full lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
              >
                Update
              </button>
            </div>
          </div>
        )}
        <div>
          {updated && selected == "update" ? (
            <EditProfile
              handleUpdate={handleUpdate}
              handleSelect={handleSelect}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Product_Catalog;
