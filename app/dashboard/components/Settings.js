import React from "react";
import { FaRegEdit } from "react-icons/fa";
function Product_Catalog() {
  return (
    <div className="mt-10 ml-8">
      <div className="flex justify-between items-center border-b pb-3">
        <h3 className=" text-2xl font-bold">Profile</h3>
        <button className="px-4 border rounded-md  flex items-center gap-2 hover:border-blue-600 focus-within:border-blue-600">
          Edit
          <span>
            <FaRegEdit />
          </span>
        </button>
      </div>
      <div className="w-full h-fit border shadow-md rounded-sm mt-5 pb-8">
        <div className="ml-5 font-medium">
          <div className="mt-8">
            <h3 className="flex">
              Name:
              <span className=" flex-1 text-center">abcdef</span>
            </h3>
          </div>
          <div className="mt-8">
            <h3 className="flex">
              Country:<span className=" flex-1 text-center">Bangladesh</span>{" "}
            </h3>
          </div>
          <div className="mt-8">
            <h3 className="flex">
              Email:
              <span className=" flex-1 text-center">abcdef@gmail.com</span>{" "}
            </h3>
          </div>
          <div className="mt-8">
            <h3 className="flex">
              Phone: <span className=" flex-1 text-center">01734578901</span>
            </h3>
          </div>
          <div className="mt-8">
            <h3 className="flex">
              Password: <span className=" flex-1 text-center">********</span>
            </h3>
          </div>
          <div className="mt-8">
            <h3 className="flex">
              Change Password
              <span className=" flex-1 text-center ">
                <button className="px-4 mr-16 mx-auto border rounded-md  hover:border-blue-600 focus-within:border-blue-600">
                  Change
                </button>
              </span>{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Catalog;
