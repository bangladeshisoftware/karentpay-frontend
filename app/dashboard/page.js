"use client";
import ApiRequest from "@/app/_lib/Api_request";
import Balance from "@/app/dashboard/components/Balance";
import Header from "@/app/dashboard/components/Header";
import Home from "@/app/dashboard/components/Home";
import Product_Catalog from "@/app/dashboard/components/Settings";
import Transactions from "@/app/dashboard/components/Transactions";
import React, { useEffect, useState } from "react";
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

import Payment from "@/app/dashboard/components/payment";
import Support from "@/app/dashboard/components/Support";
import Wtransactions from "@/app/dashboard/components/Wtransactions";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import useFetchingData from "@/lib/useFetchingData";
import Developer from "./components/Developer";
import PaymentCopy from "./components/PaymentCopy";
import Payout from "./components/Payout";

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("balance");
  const [isOn, setIsOn] = useState(true);
  const [windowWidth, setWindowWidth] = useState(1024); // Default to 1024, update after mounting

  // ali hasan code
  const [checkedState, setCheckedState] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(true);
  const array = [];
  // ali hasan code
  const containerType = [
    {
      id: 1,
      type: "container-dashboard",
      minSize: 15,
    },
    {
      id: 2,
      type: "container-1",
      minSize: 20,
    },
    {
      id: 3,
      type: "container-2",
      minSize: 20,
    },
    {
      id: 4,
      type: "container-3",
      minSize: 20,
    },
    {
      id: 5,
      type: "container-4",
      minSize: 40,
    },
    {
      id: 6,
      type: "container-5",
      minSize: 50,
    },
    {
      id: 7,
      type: "container-6",
    },
    {
      id: 8,
      type: "container-7",
    },
    {
      id: 9,
      type: "container-8",
    },
    {
      id: 10,
      type: "container-9",
    },
  ];

  const selectedContainer =
    windowWidth < 1024 ? containerType[0] : containerType[3];

  const toggleSwitch = () => {
    if (!isOn) {
      setIsOn(true);
    } else {
      setIsOn(false);
      // getTestKey();
    }
  };

  const getTestKey = async () => {
    const response = await ApiRequest({
      url: "/marchentuser/check_live",
      method: "get",
    });
    if (response.status === 200) {
      setIsOn(false);
    } else {
      toast.error(response.message);
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "balance":
        return <Balance />;
      case "cashin":
        return <Transactions />;
      case "payout":
        return <Payout />;
      case "wtransactions":
        return <Wtransactions />;
      case "payments":
        // return <Payment />;
        return <PaymentCopy />;
        const handleCheckboxChange = (position) => {
          const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
          );

          setCheckedState(updatedCheckedState);
          setIsAllChecked(updatedCheckedState.every((item) => item));
        };

        const handleSelectAllChange = () => {
          const newState = !isAllChecked;
          setCheckedState(new Array(array.length).fill(newState));
          setIsAllChecked(newState);
        };

      case "developer":
        return <Developer isTest={isOn} />;
      case "support":
        return <Support />;
      case "productCatalog":
        return <Product_Catalog />;
      default:
        return <Home />;
    }
  };

  const getMinSize = () => {
    const container = containerType.find(
      (c) => c.type === selectedContainer.type
    );
    return container ? container.minSize : 10;
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth); // Set initial width on mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [isGradient, setIsGradient] = useState(false);

  const { fetchData } = useFetchingData("/api/front/setting/color-setting");

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

  return (
    <div className={`${selectedContainer.type} flex h-screen mx-auto `}>
      <ResizablePanelGroup direction="horizontal">
        {windowWidth >= 1024 && (
          <ResizablePanel defaultSize={25} minSize={getMinSize()}>
            <div
              className={` rounded-md ${
                isGradient ? "text-gray-200" : "text-gray-800"
              }`}
              style={{
                background:
                  color1 && color2
                    ? `linear-gradient(to bottom, ${color1}, ${color2})`
                    : "#ffffff",
              }}
            >
              <aside
                className={`py-5 px-4 mt-10 ${
                  windowWidth < 1024 ? "hidden" : "block"
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
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === "balance"
                        ? "bg-gradient-2 "
                        : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                    }`}
                    onClick={() => setActiveComponent("balance")}
                  >
                    <FaSackDollar className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Dashboard"}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === "cashin"
                        ? "bg-gradient-2 "
                        : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                    }`}
                    onClick={() => setActiveComponent("cashin")}
                  >
                    <SiConstruct3 className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Cash In"}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === "payout"
                        ? "bg-gradient-2 "
                        : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                    }`}
                    onClick={() => setActiveComponent("payout")}
                  >
                    <SiPlausibleanalytics className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Payout"}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === "wtransactions"
                        ? "bg-gradient-2 "
                        : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                    }`}
                    onClick={() => setActiveComponent("wtransactions")}
                  >
                    <FaWordpress className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "W Transactions"}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === "payments"
                        ? "bg-gradient-2 "
                        : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                    }`}
                    onClick={() => setActiveComponent("payments")}
                  >
                    <FaParking className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Payments"}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === "developer"
                        ? "bg-gradient-2 "
                        : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                    }`}
                    onClick={() => setActiveComponent("developer")}
                  >
                    <MdDeveloperMode className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Developer"}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === "support"
                        ? "bg-gradient-2 "
                        : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                    }`}
                    onClick={() => setActiveComponent("support")}
                  >
                    <FaHandsHelping className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Support"}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === "productCatalog"
                        ? "bg-gradient-2 "
                        : "hover:bg-gradient-to-r from-blue-600 to-purple-400 "
                    }`}
                    onClick={() => setActiveComponent("productCatalog")}
                  >
                    <IoSettings className="mr-2 text-2xl" />
                    {windowWidth >= 1024 && "Settings"}
                  </li>
                </ul>
              </aside>
            </div>
          </ResizablePanel>
        )}
        <ResizableHandle />
        {/* Navbar for small and medium devices */}
        <nav
          className={`lg:hidden inset-x-0 fixed bottom-0 left-0 w-full border-t-2  bg-white text-gray-700 flex justify-between px-4 py-4 z-50 transition-transform duration-75 ${
            scrollDirection === "down"
              ? "transform translate-y-full"
              : "transform translate-y-0"
          }`}
        >
          <MdSpaceDashboard
            className="text-2xl cursor-pointer"
            onClick={() => setActiveComponent("balance")}
          />
          {/* <FaSackDollar
            className="text-2xl cursor-pointer"
            onClick={() => setActiveComponent("balance")}
          /> */}
          <SiConstruct3
            className="text-2xl cursor-pointer"
            onClick={() => setActiveComponent("cashin")}
          />
          <SiPlausibleanalytics
            className="text-2xl cursor-pointer"
            onClick={() => setActiveComponent("payout")}
          />
          <FaWordpress
            className="text-2xl cursor-pointer"
            onClick={() => setActiveComponent("wtransactions")}
          />
          <FaParking
            className="text-2xl cursor-pointer"
            onClick={() => setActiveComponent("payments")}
          />
          <MdDeveloperMode
            className="text-2xl cursor-pointer"
            onClick={() => setActiveComponent("developer")}
          />
          <FaHandsHelping
            className="text-2xl cursor-pointer"
            onClick={() => setActiveComponent("support")}
          />
          <IoSettings
            className="text-2xl cursor-pointer"
            onClick={() => setActiveComponent("productCatalog")}
          />
        </nav>
        <ResizablePanel defaultSize={85} minSize={40}>
          <div className="flex-1 p-0 overflow-y-auto scrollbar-hide ">
            {activeComponent === "developer" && (
              <Header isOn={isOn} toggleSwitch={toggleSwitch} />
            )}
            <main className="h-screen ">{renderComponent()}</main>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Dashboard;
