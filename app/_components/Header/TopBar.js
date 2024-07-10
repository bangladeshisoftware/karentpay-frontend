'use client';
import React, { useState, useEffect, useRef } from 'react';
import BecomeMerchant from '@/app/_components/Header/BecomeMerchent/BecomeMerchant';
import Link from 'next/link';
import Image from 'next/image';
import desktopLogo from '@/app/_assets/updated-karentpay-logo222.png';
import { GetCookies,deleteCookies } from '@/app/_lib/cookiesSetting';
import { toast } from 'react-toastify';
import Dashboard from './../../dashboard/page';
import ApiRequest from '@/app/_lib/Api_request';

const TopBar = () => {
  const [dropdownDefaultButton, setDropdownDefaultButton] = useState(false);
  const dropdown = useRef(null);
  const trigger = useRef(null);
  

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

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownDefaultButton || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownDefaultButton(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [dropdownDefaultButton]);


  const[user,setuser]=useState('');
  useEffect(() => {
    handlePayment();
  }, []);
  
  
    const handlePayment=async()=>{    
      const token =await GetCookies({ name: 'auth_token' });
      console.log("token",token);
      if (token) {        
        const response=await ApiRequest({
          url:'/user',
         method:'get',
        });
        if(response.status==200){
          setuser(response.data.user)
        
        }else{
          toast.error(response.message)
        }
      }
        
    }


  return (
    <section className='container flex justify-between items-center my-2 hidden lg:flex wide-laptop:flex small-laptop:flex'>
      {/* large screens */}
      <div className='flex items-center justify-between w-full'>
        <Link href='/'>
          <Image
            src={desktopLogo}
            alt='logo'
            className='w-auto h-16'
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
          <div className='relative'>
            <button
              ref={trigger}
              onClick={() => setDropdownDefaultButton(!dropdownDefaultButton)}
              className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
            >
              <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1'>
                {user?user.name:''}
              </span>
            </button>
            {dropdownDefaultButton &&
              <div className=" bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute button-0 left-0 " style={{ zIndex: '1000' }} ref={dropdown}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-[#351476] hover:text-white dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <Link 
                    onClick={() => logOut()}
                    href="#" className="block px-4 py-2 hover:bg-[#351476] hover:text-white dark:hover:text-white">Sign out</Link>
                  </li>
                </ul>
              </div>
            }
          </div>
        }
        


        </div>
      </div>
    </section>
  );
};

export default TopBar;
