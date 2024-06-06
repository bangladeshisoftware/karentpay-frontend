"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/app/_assets/epayget-white-logo.png";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Register() {
  const [countries, setCountries] = useState([]);
  const [showCountryList, setShowCountryList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/flag/images"
        );
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country.name);
    setShowCountryList(false);
  };
  const minifiedCountries = countries.slice(0, 220);
  console.log(countries);
  const filteredCountries = minifiedCountries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white h-full flex flex-row items-center py-10 my-auto">
      <div className="flex justify-center items-center w-full h-full my-auto">
        <div className="lg:h-[1000px] lg:w-[550px] md:w-[550px] sm:w-[550px] h-full w-full shadow-2xl rounded-2xl mt-16 pb-6 lg:px-20 md:px-20 sm:px-20 px-10 my-auto border-t flex flex-col">
          <div className="mx-auto lg:mt-14 mt-4">
            <Image
              className=""
              src={logo}
              width={150}
              height={62}
              alt="Epayget logo"
            />
          </div>
          <div className="lg:pt-5 lg:mt-5 mt-3 mb-5 text-[1.5rem] font-semibold text-[#2F65EC] text-center mx-auto">
            <h2>PayGet Sign Up</h2>
          </div>
          <form onSubmit={handleSignUp} className="">
            <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="text"
                name="Name"
                placeholder="Fullname"
                required
              />
            </div>
            <div className="relative border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <div
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none cursor-pointer"
                onClick={() => setShowCountryList(!showCountryList)}
              >
                {selectedCountry ? selectedCountry : "Select your country"}
              </div>
              {showCountryList && (
                <div className="absolute top-full left-0 right-0 bg-white border rounded-md z-10 max-h-60 overflow-y-auto">
                  <input
                    className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none border-b"
                    type="text"
                    placeholder="Search country..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {filteredCountries.map((country, index) => (
                    <div
                      key={index}
                      className="flex items-center px-2 py-2 lg:py-3 lg:px-3 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleCountryClick(country)}
                    >
                      <Image
                        src={country.flag}
                        alt={country.name}
                        width={20}
                        height={15}
                        className="mr-2"
                      />
                      {country.name}
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
            <div className="border my-6 mx-auto lg:mx-0 bg-white focus-within:border-[#2F65EC] hover:border-[#2F65EC] rounded-md w-full lg:w-full">
              <input
                className="w-full px-2 py-2 lg:py-3 lg:px-3 bg-transparent rounded-md outline-none"
                type="number"
                name="phone"
                placeholder="Phone"
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
