"use client";
import BecomeMerchant from "@/app/_components/Header/BecomeMerchent/BecomeMerchant";
import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies, deleteCookies } from "@/app/_lib/cookiesSetting";
import useFetchingData from "@/lib/useFetchingData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Dashboard from "./../../dashboard/page";

const TopBar = ({ topbarGradientColors }) => {
  const [dropdownDefaultButton, setDropdownDefaultButton] = useState(false);
  const dropdown = useRef(null);
  const trigger = useRef(null);
  const [loading, setLoading] = useState(true);
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");

  const [authToken, setAuthToken] = useState(null);
  useEffect(() => {
    token();
  }, [authToken]);

  const token = async () => {
    const token = await GetCookies({ name: "auth_token" });
    // console.log("token", token);
    if (token) {
      setAuthToken(true);
    } else {
      setAuthToken(false);
    }
  };

  const logOut = async () => {
    if (localStorage.getItem("secret_key")) {
      localStorage.removeItem("secret_key");
    }
    const deleteToken = await deleteCookies({ name: "auth_token" });
    if (deleteToken) {
      location.reload(true);
      toast.success("Successfully Logged Out");
    } else {
      console.log(deleteToken);
    }
  };

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownDefaultButton ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownDefaultButton(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownDefaultButton]);

  const [user, setuser] = useState("");

  useEffect(() => {
    handlePayment();
  }, []);

  const handlePayment = async () => {
    const token = await GetCookies({ name: "auth_token" });
    // console.log("token", token);
    if (token) {
      const response = await ApiRequest({
        url: "/user",
        method: "get",
      });
      if (response?.status == 200) {
        setuser(response?.data.user);
      } else {
        toast.error(response?.message);
      }
    }
  };

  const { fetchData } = useFetchingData("/api/front/setting/header-setting");

  useEffect(() => {
    if (topbarGradientColors?.Color1 && topbarGradientColors?.Color2) {
      setColor1(topbarGradientColors?.Color1);
      setColor2(topbarGradientColors?.Color2);
    }
  }, [topbarGradientColors]);

  return (
    <section
      className="py-2"
      style={{
        background: `linear-gradient(to right, ${color1}, ${color2})`,
      }}
    >
      <div className="container justify-between items-center hidden lg:flex wide-laptop:flex small-laptop:flex">
        {/* large screens */}
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            {fetchData?.settings?.HeaderBanner ? (
              <Image
                src={fetchData?.settings?.HeaderBanner}
                quality={100}
                width="1000"
                height="100"
                alt="logo"
                className="w-auto h-14"
                priority
              />
            ) : (
              <div className="w-[300px] h-14 bg-gray-200 animate-pulse"></div>
            )}
          </Link>

          <div className="flex items-center gap-3">
            <BecomeMerchant />

            {/* {!authToken && authToken != null && (
              <Link
                href="/auth/login"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1">
                  Merchant Login
                </span>
              </Link>
            )}

            {authToken != null && authToken && (
              <div className="relative">
                {user && (
                  <button
                    ref={trigger}
                    onClick={() =>
                      setDropdownDefaultButton(!dropdownDefaultButton)
                    }
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1">
                      {user && user.name}
                    </span>
                  </button>
                )}

                {dropdownDefaultButton && (
                  <div
                    className=" bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute button-0 left-0 "
                    style={{ zIndex: "1000" }}
                    ref={dropdown}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 hover:bg-[#351476] hover:text-white dark:hover:text-white"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => logOut()}
                          href="#"
                          className="block px-4 py-2 hover:bg-[#351476] hover:text-white dark:hover:text-white"
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )} */}

            {authToken != null && authToken && user ? (
              <div className="relative">
                {user && (
                  <button
                    ref={trigger}
                    onClick={() =>
                      setDropdownDefaultButton(!dropdownDefaultButton)
                    }
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1">
                      {user && user.name}
                    </span>
                  </button>
                )}

                {dropdownDefaultButton && (
                  <div
                    className=" bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute button-0 left-0 "
                    style={{ zIndex: "1000" }}
                    ref={dropdown}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 hover:bg-[#351476] hover:text-white dark:hover:text-white"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => logOut()}
                          href="#"
                          className="block px-4 py-2 hover:bg-[#351476] hover:text-white dark:hover:text-white"
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1">
                  Merchant Login
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
