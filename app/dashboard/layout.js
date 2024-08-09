"use client";
import {
  SetCookies,
  GetCookies,
  deleteCookies,
} from "@/app/_lib/cookiesSetting";
import useFetchingData from "@/lib/useFetchingData";
import Cookies from "js-cookie";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";


import { AiOutlineDollar } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FaHandsHelping, FaParking, FaWordpress } from "react-icons/fa";
import { FaRegFileWord, FaRegUser, FaSackDollar } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { ImPaypal } from "react-icons/im";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import {
  MdDeveloperMode,
  MdOutlineLocalParking,
  MdOutlinePayment,
  MdSpaceDashboard,
} from "react-icons/md";
import { PiHandWithdrawFill } from "react-icons/pi";
import { SiConstruct3, SiPlausibleanalytics } from "react-icons/si";
import { TbSquareLetterW } from "react-icons/tb";
import { toast } from "react-toastify";



export default function LoginLayout({ children }) {
  const token = Cookies.get('auth_token');
  const pathname = usePathname();



  useEffect(() => {
    if (token == undefined || !token) {
      redirect("/auth/login");
    }
  },[])

  const [isGradient, setIsGradient] = useState(false);
  const { fetchData } = useFetchingData("/api/front/setting/color-setting");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [windowWidth, setWindowWidth] = useState(1024); // Default to 1024, update after mounting
  const [activeComponent, setActiveComponent] = useState("balance");

  useEffect(() => {

    if (
      fetchData?.settings?.GradientColor1 &&
      fetchData?.settings?.GradientColor2
    ) {
      setColor1(fetchData.settings.GradientColor1);
      setColor2(fetchData.settings.GradientColor2);
      setIsGradient(true);
    } else {
      setColor1("");
      setColor2("");
      setIsGradient(false);
    }
  }, [fetchData]);





  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className={` flex h-[85vh] w-full lg:w-[74vw] mx-auto `}>
        <div className="flex w-full">
          <div
            className={` hidden lg:block w-[300px] mr-8 mt-10 rounded-md ${isGradient ? "text-gray-200" : "text-gray-800"
              }`}
            style={{
              background:
                color1 && color2
                  ? `linear-gradient(to bottom, ${color1}, ${color2})`
                  : "#ffffff",
            }}
          >
            <aside
              className={` px-4 mt-5 ${windowWidth < 1024 ? "hidden" : "block"
                }`}
            >
              <ul>
                {/* <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === "home"
                        ? "bg-gradient-2 "
                        : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                    }`}
                    onClick={() => setActiveComponent("home")}
                  >
                    <MdSpaceDashboard className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Dashboard"}
                  </li> */}
                <Link href={'/dashboard'}>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${pathname === "/dashboard"
                      ? "bg-gradient-2 "
                      : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                      }`}
                    onClick={() => setActiveComponent("balance")}
                  >
                    <FaSackDollar className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Dashboard"}
                  </li>
                </Link>

                <Link href={'/dashboard/cash-in'}>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${pathname.includes('/dashboard/cash-in')
                      ? "bg-gradient-2 "
                      : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                      }`}
                    onClick={() => { setActiveComponent("cashin"); redirect('/dashboard/cash-in'); }}
                  >
                    <SiConstruct3 className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Cash In"}
                  </li>
                </Link>

                <Link href={'/dashboard/payout'}>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${pathname.includes('/dashboard/payout')
                      ? "bg-gradient-2 "
                      : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                      }`}
                    onClick={() => setActiveComponent("payout")}
                  >
                    <SiPlausibleanalytics className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Payout"}
                  </li>
                </Link>
                <Link href={'/dashboard/wtransactions'}>
                  <li
                    className={` whitespace-nowrap mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${pathname.includes('/dashboard/wtransactions')
                      ? "bg-gradient-2 "
                      : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                      }`}
                    onClick={() => setActiveComponent("wtransactions")}
                  >
                    <FaWordpress className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "W Transactions"}
                  </li>
                </Link>

                <Link href={'/dashboard/payments'}>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${pathname.includes('/dashboard/payments')
                      ? "bg-gradient-2 "
                      : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                      }`}
                    onClick={() => setActiveComponent("payments")}
                  >
                    <FaParking className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Payments"}
                  </li>
                </Link>
                <Link href={'/dashboard/developer'}>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${pathname.includes('/dashboard/developer')
                      ? "bg-gradient-2 "
                      : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                      }`}
                    onClick={() => setActiveComponent("developer")}
                  >
                    <MdDeveloperMode className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Developer"}
                  </li>
                </Link>
                <Link href={'/dashboard/support'}>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${pathname.includes('/dashboard/support')
                      ? "bg-gradient-2 "
                      : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                      }`}
                    onClick={() => setActiveComponent("support")}
                  >
                    <FaHandsHelping className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Support"}
                  </li>
                </Link>

                <Link href={'/dashboard/settings'}>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${pathname.includes('/dashboard/settings')
                      ? "bg-gradient-2 "
                      : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                      }`}
                    onClick={() => setActiveComponent("productCatalog")}
                  >
                    <IoSettings className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Settings"}
                  </li>
                </Link>




              </ul>

            </aside>
          </div>
          <nav
            className={`lg:hidden inset-x-0 fixed bottom-0 left-0 w-full border-t-2  bg-white text-gray-700 flex justify-between px-4 py-4 z-50 transition-transform duration-75 ${scrollDirection === "down"
              ? "transform translate-y-full"
              : "transform translate-y-0"
              }`}
          >
            <Link href={'/dashboard/mobile/home'}>
              <MdSpaceDashboard
                className="text-2xl cursor-pointer"
                onClick={() => setActiveComponent("balance")}
              />
            </Link>

            <Link href={'/dashboard/mobile/transactions'}>
              <SiConstruct3
                className="text-2xl cursor-pointer"
                onClick={() => setActiveComponent("cashin")}
              />
            </Link>

            <Link href={'/dashboard/mobile/payout'}>
              <SiPlausibleanalytics
                className="text-2xl cursor-pointer"
                onClick={() => setActiveComponent("payout")}
              />
            </Link>

            <Link href={'/dashboard/mobile/wtransactions'}>
              <FaWordpress
                className="text-2xl cursor-pointer"
                onClick={() => setActiveComponent("wtransactions")}
              />
            </Link>

            <Link href={'/dashboard/mobile/payment'}>
              <FaParking
                className="text-2xl cursor-pointer"
                onClick={() => setActiveComponent("payments")}
              />
            </Link>

            <Link href={'/dashboard/mobile/developer'}>
              <MdDeveloperMode
                className="text-2xl cursor-pointer"
                onClick={() => setActiveComponent("developer")}
              />
            </Link>

            <Link href={'/dashboard/mobile/support'}>
              <FaHandsHelping
                className="text-2xl cursor-pointer"
                onClick={() => setActiveComponent("support")}
              />
            </Link>

            <Link href={'/dashboard/mobile/settings'}>
              <IoSettings
                className="text-2xl cursor-pointer"
                onClick={() => setActiveComponent("productCatalog")}
              />
            </Link>

          </nav>
          <section className="w-full mt-10 rounded-md border-t-[1px] border-b-[1px] overflow-y-scroll scroll-smooth hide-scrollbar ">
            {children}
          </section>
        </div>
      </div>

    </>
  )
}
