"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/_assets/epayget-white-logo.png";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { ResetPasswordToast } from "@/app/_components/ResetPassword/ResetPasswordToast";
import {toast} from 'react-toastify';
import ApiRequest from "@/app/_lib/Api_request";
import { useRouter } from "next/navigation";
import {SetCookies,GetCookies} from "@/app/_lib/cookiesSetting";



export default function Login() {
  useEffect(() => {

  },[])
 
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogin = async(formData) => {
    const response=await ApiRequest({url:'/login',formdata:formData});
    if(!response){
      toast.error("Something went wrong");
      return;  
    }

    if(response?.status==200){      
      localStorage.setItem("auth_token",response?.data.trim());
      const token=await SetCookies({name:"auth_token",value:response?.data.trim()}); 
      if(token){
        toast.success("Successfully Logged In");
        location.reload();
      }else{
        toast.error("Something went wrong");
      }    
     
    }else if(response?.status==400){
      var err=JSON.parse(response?.message);
      if (err.email) {
        toast.error(err.email[0]);        
      }else if(err.password){
        toast.error(err.password[0]);
      }else{
        toast.error("Something went wrong");
      }
    }
    else{
      toast.error(response?.message);
    }

  };

  return (
    <>
    
      <div className=" flex flex-row items-center ">
      <ResetPasswordToast open={isDrawerOpen} setOpen={setIsDrawerOpen} />
      <div className="flex justify-center items-center w-full mt-20 mb-5  p-5 ">
        <div className="h-[680px] bg-white lg:w-[550px] md:w-[550px] sm:w-[550px]  w-full shadow-2xl border-t rounded-2xl py-14 lg:px-20 md:px-20 sm:px-20 px-10 flex flex-col  ">
          <div className="mx-auto">
            {/* <Image className="" src={logo} width={150} height={62} alt="" /> */}
          </div>
          <div className="pt-6 mb-5 text-[1.5rem] font-semibold text-[#2F65EC] text-center mx-auto">
            <h2>PayGet Sign in</h2>
          </div>
          <form action={handleLogin}>
            <div className="border my-6 mx-auto  lg:mx-0   bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <input
                className=" w-full px-2 py-2 lg:py-3 lg:px-3 md:px-3 bg-transparent rounded-md outline-none"
                type="email"
                name="email"
                placeholder="Email"
                autocomplate="true"
              />
            </div>
            <div className="border my-6 mx-auto   lg:mx-0  bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <input
                className=" w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-start mt-10 ">
              <p
                onClick={() => setIsDrawerOpen(true)}
                className="ml-12 lg:ml-0 text-[#2F65EC] hover:underline cursor-pointer"
              >
                Forgot password?
              </p>
            </div>
            <div className="flex justify-start mt-5">
              <p className=" text-[black] ml-12 lg:ml-0 ">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register">
                  <span className="text-[#2F65EC] hover:underline">
                    Register
                  </span>
                </Link>
              </p>
            </div>
            <div className="">
              <button
                className="bg-gradient-to-br from-purple-600 to-blue-500 w-full mx-auto lg:mx-0 md:mx-0 sm:mx-0 lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-10 hover:from-blue-600 hover:to-purple-700"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="">
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-600  mx-auto lg:mx-0 md:mx-0 sm:mx-0 w-full lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2 "
              type="submit"
            >
              <span>Sign In with</span> <FcGoogle size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
