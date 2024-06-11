import React from "react";

const EditProfile = ({ handleUpdate, handleSelect }) => {
  return (
    <div className="lg:mx-24 ">
      <form className="">
        <div className="border  my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <input
            className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
            type="text"
            name="name"
            placeholder="Fullname"
          />
        </div>
        <div className="relative border  my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <input
            className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
            type="country"
            name="country"
            placeholder="Country"
          />
        </div>
        <div className="border  my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <input
            className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center  border  my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <span className="ml-2 text-slate-600"></span>
          <input
            className="w-full pr-2 pl-1 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
            type="number"
            name="phone"
            placeholder="Phone No."
          />
        </div>
        <div className="border  my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <input
            className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="border  my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
          <input
            className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 md:mx-0 sm:mx-0 w-full lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
      <button
        onClick={() => {
          handleUpdate(), handleSelect("profile");
        }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 md:mx-0 sm:mx-0 w-full lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
      >
        Back
      </button>
    </div>
  );
};

export default EditProfile;
