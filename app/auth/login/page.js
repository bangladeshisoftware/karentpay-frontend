 'use client'
 import React from 'react'
import Image from 'next/image'
import logo from '@/app/_assets/Login_Logo.png'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'

export default function Login() {
  return (
    <div className=' bg-white h-screen  flex flex-row items-center '>
      <div className='flex justify-center items-center w-full h-screen p-5 '>
        <div className='h-[680px] lg:w-[550px] md:w-[550px]  w-full shadow-2xl rounded-sm py-14 pb-5 lg:px-20 md:px-20  flex flex-col  '>
         <div className='mx-auto'>
          <Image className='' src={logo} width={226} height={72}/>
         </div>
         <div className='pt-6 mb-5 text-[1.5rem] font-semibold text-[#2F65EC] text-center mx-auto'>
          <h2>PayGet Sign in</h2>
         </div>
         <form>
         <div className='border my-6 mx-auto  px-2 py-2 lg:mx-0 lg:py-4 lg:px-4 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-3/4 lg:w-full'>
          <input className=' w-full focus:border-[#2F65EC] outline-none' type='text' name='username' placeholder='UserName' ></input>
         </div>
         <div className='border my-6 mx-auto  px-2 py-2 lg:mx-0 lg:py-4 lg:px-4 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-3/4 lg:w-full'>
          <input className=' w-full  bg-white  outline-none' type='password' name='password' placeholder='Password' ></input>
         </div>
         <div className='flex justify-start mt-10 '>
          <Link href='/auth/reset-password'><p className='ml-12 lg:ml-0 text-[#2F65EC] hover:underline'>Forgot password?</p></Link>
         </div>
         <div className='flex justify-start mt-5'>
          <p className=' text-[#2F65EC] ml-12 lg:ml-0 hover:underline'>Don't have an account? <Link href='/auth/register'>Register</Link></p>
         </div>
         <div className='bg-gradient-to-br from-purple-600 to-blue-500 w-60 mx-auto lg:mx-0 lg:w-full  p-2 rounded-md text-center text-white mt-10'>
          <button type='submit'>Sign In</button>
         </div>
         <div className='bg-gradient-to-r from-blue-500 to-purple-600 w-60 mx-auto lg:mx-0 lg:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center '>
          <button className='flex items-center text-center gap-2' type='submit'><p>Sign In with</p> <FcGoogle size={20}/> </button>
         </div>
         </form>
        </div>
      </div>
    </div>
  )
}
