"use client";
import facebookIcon from "@/app/_assets/facebook.png";
import Logo from "@/app/_assets/Mobile-Logo.png";
import MobileLogo from "@/app/_assets/updated-karentpay-logo222.png";
import youtubeIcon from "@/app/_assets/youtube.png";
import { DrawerDialogDemo } from "@/app/_components/Header/BecomeMerchent/DrawerDialogDemo";
import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies, deleteCookies } from "@/app/_lib/cookiesSetting";
import useFetchingData from "@/lib/useFetchingData";
import axios from "axios";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Dropdown from "../Dropdown/Dropdown";

const NavBar = ({ gradientColors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [dashboardMenuOpen, setDashboardMenuOpen] = useState(true); // Initially open
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false); // Initially closed
  const menuRef = useRef(null); // Ref for the menu
  const buttonRef = useRef(null); // Ref for the hamburger button
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [isGradient, setIsGradient] = useState(false);

  const { fetchData } = useFetchingData("/api/front/pages");

  // get user
  const [user, setUser] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const token = await GetCookies({ name: "auth_token" });


      if (token) {
        const response = await ApiRequest({
          url: "/user",
          method: "get",
        });
        if (response?.status == 200) {
          setUser(response?.data.user);
        } else {
          toast.error(response?.message);
        }
      }
    };

    getUser();
  }, []);



  const logOut = async () => {
    if (localStorage.getItem("secret_key")) {
      localStorage.removeItem("secret_key");
    }
    const deleteToken = await deleteCookies({ name: "auth_token" });
    if (deleteToken) {
      location.reload(true);
      toast.success("Successfully Logged Out");
    } else {

    }
  };

  const handleOpenDrawer = (e) => {
    e.preventDefault();
    setIsDrawerOpen(true);
    setIsOpen(false); // Close the mobile menu when the drawer opens
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const socialLinks = {
    facebookLink: "https://www.facebook.com/karentpay",
    linkedInLink: "",
    youtubeLink: "https://www.youtube.com/@Karentpay",
  };

  const [submenuItems, setSubmenuItems] = useState([]);

  useEffect(() => {
    const getSubmenuItems = async () => {
      try {
        const mappedSubmenuItems = fetchData.map((item) => ({
          label: item.page_name,
          href: `/${item.slug}`,
        }));
        setSubmenuItems((prevItems) => [...prevItems, ...mappedSubmenuItems]);
      } catch (error) {
        console.error("Error fetching submenu items:", error);
      }
    };

    getSubmenuItems();
  }, [fetchData]);

  const dropdownItemsMainMenu = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Payment Gateway", href: "/payment-gateway" },
    { label: "Documentations", href: "/documentations" },
    { label: "News", href: "/news" },
    { label: "Customer Reviews", href: "/customer-reviews" },
    { label: "Contact", href: "/contact" },
    {
      label: "Pages",
      submenu: submenuItems,
    },
  ];

  const dropdownItemsDashboard = [
    { label: "Home", href: "/dashboard" },
    { label: "Cash In", href: "/dashboard/cash-in" },
    { label: "Payout", href: "/dashboard/payout" },
    { label: "W Transactions", href: "/dashboard/wtransactions" },
    { label: "Payment", href: "/dashboard/payments" },
    { label: "Developer", href: "/dashboard/developer" },
    { label: "Support", href: "/dashboard/support" },
    { label: "Settings", href: "/dashboard/settings" },
  ];

  useEffect(() => {
    if (gradientColors?.GradientColor1 && gradientColors?.GradientColor2) {
      setColor1(gradientColors.GradientColor1);
      setColor2(gradientColors.GradientColor2);
      setIsGradient(true);
    } else {
      setColor1("");
      setColor2("");
      setIsGradient(false);
    }
  }, [gradientColors]);

  return (
    <nav
      className={`py-2 sticky top-0 z-50 ${
        isGradient ? "text-gray-200" : "text-gray-800"
      }`}
      style={{
        background:
          color1 && color2
            ? `linear-gradient(to right, ${color1}, ${color2})`
            : "#ffffff",
      }}
    >
      {/* large screens */}
      <div className="relative items-center justify-between hidden mx-auto container-3 lg:flex wide-laptop:flex small-laptop:flex">
        <div className="flex items-center h-10 gap-5">
          {dropdownItemsMainMenu.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-1 rounded hover:text-white hover:bg-blue-800"
            >
              {item.label}
            </Link>
          ))}
          <Dropdown
            label="Pages"
            items={
              dropdownItemsMainMenu.find((item) => item.label === "Pages")
                .submenu
            }
          />
        </div>
        <div className="flex gap-4">
          <Link href={socialLinks.facebookLink} target="_blank">
            <Image src={facebookIcon} alt="facebook" className="w-8" />
          </Link>
          <Link href={socialLinks.youtubeLink} target="_blank">
            <Image src={youtubeIcon} alt="youtube" className="w-8 rounded-md" />
          </Link>
        </div>
      </div>

      {/* small and medium screens */}
      <div className="container relative flex items-center justify-between px-2 lg:hidden wide-laptop:hidden small-laptop:hidden">
        <div className="flex items-center">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 m-0 "
          >
            <Menu className="h-16 text-white w-14" />
          </button>
          <Link href="/">
            <Image
              src={MobileLogo}
              alt="Logo"
              className="h-10 px-2 py-1 ml-6 bg-white rounded w-44"
            />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 flex flex-col items-start w-full p-4 text-gray-200 lg:hidden wide-laptop:hidden small-laptop:hidden top-full bg-gradient-2"
        >
          <button
            className="flex items-center justify-between w-full p-1 text-left rounded hover:text-white hover:bg-blue-800"
            onClick={() => setMainMenuOpen(!mainMenuOpen)}
          >
            <span>Main Menu</span>
            {mainMenuOpen ? (
              <ChevronUp className="ml-2" />
            ) : (
              <ChevronDown className="ml-2" />
            )}
          </button>
          {mainMenuOpen && (
            <div className="flex flex-col ml-4">
              {dropdownItemsMainMenu.slice(0, 7).map((item) => (
                <Link
                  key={item.label}
                  href={item.href || "#"} // Default to '#' if href is not provided
                  className="w-full p-1 text-left rounded hover:text-white hover:bg-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Adjusted the code to render "Pages" submenu under the "Main Menu" */}
              <button
                className="flex items-center justify-between w-full p-1 text-left rounded hover:text-white hover:bg-blue-800"
                onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
              >
                <span>Pages</span>
                {pagesMenuOpen ? (
                  <ChevronUp className="ml-2" />
                ) : (
                  <ChevronDown className="ml-2" />
                )}
              </button>
              {pagesMenuOpen && (
                <div className="flex flex-col ml-4">
                  {dropdownItemsMainMenu
                    .find((item) => item.label === "Pages")
                    .submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href || "#"}
                        className="w-full p-1 text-left rounded hover:text-white hover:bg-blue-800"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          )}
          <button
            className="flex items-center justify-between w-full p-1 mt-4 text-left rounded hover:text-white hover:bg-blue-800"
            onClick={() => setDashboardMenuOpen(!dashboardMenuOpen)}
          >
            <span>Dashboard</span>
            {dashboardMenuOpen ? (
              <ChevronUp className="ml-2" />
            ) : (
              <ChevronDown className="ml-2" />
            )}
          </button>
          {dashboardMenuOpen && (
            <div className="flex flex-col ml-4">
              {dropdownItemsDashboard.map((item) => (
                <Link
                  key={item.label}
                  href={item.href || "#"} // Default to '#' if href is not provided
                  className="w-full p-1 text-left rounded hover:text-white hover:bg-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          {/* Additional links for small and medium screens */}
          <Link
            href="/become_merchant"
            className="w-full p-1 mt-4 text-left rounded hover:text-white hover:bg-blue-800"
            onClick={handleOpenDrawer}
          >
            Become a Merchant
          </Link>

          {user ? (
            <>
              <Link
                href="/auth/login"
                className="w-full p-1 text-left rounded hover:text-white hover:bg-blue-800"
                onClick={() => logOut()}
              >
                Sign out
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="w-full p-1 text-left rounded hover:text-white hover:bg-blue-800"
                onClick={() => setIsOpen(false)}
              >
                Merchant Login
              </Link>
            </>
          )}
        </div>
      )}
      {/* Drawer Dialog */}
      <DrawerDialogDemo open={isDrawerOpen} setOpen={setIsDrawerOpen} />
    </nav>
  );
};

export default NavBar;
