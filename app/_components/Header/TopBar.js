'use client';
import React, { useState, useEffect } from 'react';
import BecomeMerchant from '@/app/_components/Header/BecomeMerchent/BecomeMerchant';
import Link from 'next/link';
import Image from 'next/image';
import desktopLogo from '@/app/_assets/Logo.png';
import { GetCookies,deleteCookies } from '@/app/_lib/cookiesSetting';
import { toast } from 'react-toastify';


const TopBar = () => {

  const [authToken, setAuthToken] = useState(null);
  useEffect(() => {
    token();
  }, [authToken]);

  const token=async () => {
    const token =await GetCookies({ name: 'auth_token' });
    console.log("token",token);
    if (token) {
      setAuthToken(true);
    }else{
      setAuthToken(false);
    }
  }


  const logOut =async () => {
    if(localStorage.getItem('secret_key')){
      localStorage.removeItem('secret_key');
    }
   const deleteToken=await deleteCookies({ name: 'auth_token' });
   if(deleteToken) {
    location.reload(true);
    toast.success("Successfully Logged Out");
   }else{
    console.log( deleteToken);
   }
  }
  return (
    <section className='container flex justify-between items-center my-4 hidden lg:flex wide-laptop:flex small-laptop:flex'>
      {/* large screens */}
      <div className='flex items-center justify-between w-full'>
        <Link href='/'>
          <Image
            src={desktopLogo}
            alt='logo'
            className='w-auto h-auto'
            priority
          />
        </Link>
        <div className='flex items-center gap-3'>
           <BecomeMerchant /> 
         
          {!authToken && authToken !=null &&
          <Link
            href='/auth/login'
            className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
          >
            <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1'>
              Merchant Login
            </span>
          </Link>
          }


        {(authToken !=null && authToken)&&
          <button
            onClick={() => logOut()}
            className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
          >
            <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1'>
              Logout
            </span>
          </button>
          }

        </div>
      </div>
    </section>
  );
};

export default TopBar;
