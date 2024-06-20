import React from "react";
import Image from "next/image";
import img2 from "@/app/_assets/r2.jpg";
import { FaUsers } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { GiShoppingBag } from "react-icons/gi";

function Home() {
  return (
    <div className="rounded-md mt-10 ml-0 lg:ml-5 ">
      {/* <div>
        <h2 className='text-3xl font-bold m-4'>Dashboard</h2>
      </div> */}
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 lg:px-0 justify-around gap-2 pb-5">
        <div className="border border-blue-500 rounded-md shadow px-20 py-16  text-black flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <FaUsers />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">8,235</h2>
            </div>
            <div>
              <p>New User</p>
            </div>
          </div>
        </div>
        <div className="border  border-blue-500 rounded-md shadow px-20 py-16  text-black flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <LuShoppingCart />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">200,235</h2>
            </div>
            <div>
              <p>Total Order</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-500 md:col-span-2 lg:col-span-1 rounded-md shadow px-20 py-16 text-black flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <GiShoppingBag />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">221,235</h2>
            </div>
            <div>
              <p>Available Product</p>
            </div>
          </div>
        </div>
      </div>
      {/* card 2*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-2 px-1 lg:px-0 pb-5">
        <div className="border border-blue-500 md:col-span-1 lg:col-span-2 rounded-md shadow px-20 py-16  text-black flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <FaUsers />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">8,235</h2>
            </div>
            <div>
              <p>New User</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-500 rounded-md shadow px-20 py-16  text-black flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <LuShoppingCart />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">200,235</h2>
            </div>
            <div>
              <p>Total Order</p>
            </div>
          </div>
        </div>
      </div>
      {/* card 3*/}
      <div className="grid grid-cols-3 justify-around gap-4 px-1 lg:px-0 pb-5">
        <div className="border border-blue-500 col-span-1 md:col-span-3 lg:col-span-3 rounded-md shadow px-20 py-20  text-black flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl border border-blue-500 rounded-full text-black p-3">
            <GiShoppingBag />
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold ">221,235</h2>
            </div>
            <div>
              <p>Available Product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
