"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/app/_assets/epayget-white-logo.png";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import ApiRequest from "@/app/_lib/Api_request";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { SetCookies, GetCookies } from "@/app/_lib/cookiesSetting";
import { IoMdClose } from "react-icons/io";
import useFetchingData from "@/lib/useFetchingData";

export default function Register() {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [showCountryList, setShowCountryList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [countryId, setCountryId] = useState(0);
  const [phoneCode, setPhoneCode] = useState("+00");


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // const response = await fetch(
        //   "https://countriesnow.space/api/v0.1/countries/flag/images"
        // );
        const response = await ApiRequest({
          url: '/country',
          method: 'Get'
        });

        if (response?.status == 200) {
          setCountries(response?.data);
        } else {
          toast.error(response?.message)
        }

      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryClick = (country) => {
    setSearchTerm(country.name);
    setCountryId(country.id);
    setPhoneCode(country.phone_code);
    setShowCountryList(false);
  };
  const minifiedCountries = countries.slice(0, 220);
  const filteredCountries = minifiedCountries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleSignUp = async (formdata) => {
    formdata.append('country', countryId);

    const response = await ApiRequest({
      url: '/register',
      formdata: formdata
    });

    if (response?.status == 201) {
      const token = await SetCookies({ name: "auth_token", value: response?.data.trim() });
      if (token) {
        toast.success("Successfully Registered");
        location.reload();
      } else {
        toast.error("Something went wrong");
      }

    } else if (response?.status == 400) {
      var err = JSON.parse(response?.message);
      if (err.name) {
        toast.error(err.name[0]);
      } else if (err.email) {
        toast.error(err.email[0]);
      } else if (err.phone) {
        toast.error(err.phone[0]);
      } else if (err.country) {
        toast.error(err.country[0]);
      } else if (err.password) {
        toast.error(err.password[0]);
      }

    } else {
      toast.error(response?.message);
    }

  };
  const { fetchData } = useFetchingData('/api/front/setting/logo-identity')




  return (
    <div className="h-full flex flex-row items-center py-10 my-auto">
      <div className="flex justify-center items-center w-full h-full my-auto">
        <div className=" pb-20 bg-white lg:w-[550px] md:w-[550px] sm:w-[550px] w-full shadow-2xl rounded-2xl mt-16  lg:px-20 md:px-20 sm:px-20 px-10 my-auto border-t flex flex-col">
          {/* <div className="mx-auto lg:mt-14 mt-4">
            <Image
              className=""
              src={logo}
              width={150}
              height={62}
              alt="Epayget logo"
            />
          </div> */}
          <div className="lg:pt-5 lg:mt-5 mt-3 mb-5 text-[1.5rem] font-semibold text-[#2F65EC] text-center mx-auto">
          {fetchData?.settings?.siteName &&
                <h2>{fetchData?.settings?.siteName} Sign Up</h2>
              }
          </div>
          <form action={handleSignUp} className="">
            <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="text"
                name="name"
                placeholder="Fullname"
                required
              />
            </div>


            <div
              id="showMerchantList"
              onClick={() => setShowCountryList(!showCountryList)}
              className="relative rounded-[4px]  my-2 md:my-0"
            >
              <div className="flex items-center">
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`border  text-gray-900 text-size   ${showCountryList ? "rounded-t-[4px] " : "rounded-[4px] "
                    }  block w-full p-2.5 bg-gray-50  dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  ${searchTerm
                      ? " focus:border-green-500 border-green-500"
                      : "border-gray-300 "
                    } outline-none`}
                  placeholder="Select your country..."
                  value={searchTerm}
                />
                <div className="absolute top-5 right-2">
                  <svg
                    className={`w-2.5 h-2.5 ms-3 text-gray-400 transition-transform transform ${showCountryList ? "rotate-180" : ""
                      }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </div>
              </div>
              {showCountryList && (
                <div
                  id="showMerchantList"
                  className="absolute top-full left-0 right-0 bg-white rounded-b-md z-10 max-h-[300px] overflow-y-auto dark:bg-[#374151]"
                >
                  {filteredCountries.map((country, index) => (
                    <div
                      key={index}
                      className="px-2 py-2 lg:py-2 lg:px-3 text-black dark:text-white text-size cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-600 mx-auto hover:text-white w-full justify-between flex items-center "
                      onClick={() => handleCountryClick(country)}
                    >
                      {country.name}
                      <span> {country.phone_code}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex items-center  border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <span className='ml-2 text-slate-600'>{phoneCode}</span>
              <input
                className="w-full pr-2 pl-1 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="number"
                name="phone"
                placeholder="Phone No."
                required
              />
            </div>
            <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="flex justify-start mt-5">
              <p className="text-[black] ml-12 lg:ml-0">
                Already have an account?{" "}
                <Link href="/auth/login">
                  <span className="text-[#2F65EC] hover:underline">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
            <div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 md:mx-0 sm:mx-0 w-full lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 md:mx-0 sm:mx-0 w-full lg:w-full md:w-full sm:w-full p-2 rounded-md text-center text-white mt-5 flex justify-center items-center hover:from-purple-700 hover:to-blue-600 gap-2"
              type="button"
            >
              <p>Sign In with</p> <FcGoogle size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
