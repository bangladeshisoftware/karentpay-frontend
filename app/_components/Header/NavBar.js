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
      // console.log("token 411", token);

      if (token) {
        const response = await ApiRequest({
          url: "/user",
          method: "get",
        });
        if (response.status == 200) {
          setUser(response.data.user);
        } else {
          toast.error(response.message);
        }
      }
    };

    getUser();
  }, []);

  // console.log(fetchData);

  const logOut = async () => {
    if (localStorage.getItem("secret_key")) {
      localStorage.removeItem("secret_key");
    }
    const deleteToken = await deleteCookies({ name: "auth_token" });
    if (deleteToken) {
      location.reload(true);
      toast.success("Successfully Logged Out");
    } else {
      // console.log(deleteToken);
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
    { label: "Home", href: "/dashboard/mobile/home" },
    { label: "Balance", href: "/dashboard/mobile/balance" },
    { label: "Cash In", href: "/dashboard/mobile/transactions" },
    { label: "Payout", href: "/dashboard/mobile/payout" },
    { label: "W Transactions", href: "/dashboard/mobile/wtransactions" },
    { label: "Payment", href: "/dashboard/mobile/payment" },
    { label: "Developer", href: "/dashboard/mobile/developer" },
    { label: "Support", href: "/dashboard/mobile/support" },
    { label: "Settings", href: "/dashboard/mobile/settings" },
  ];

  useEffect(() => {
    if (gradientColors.GradientColor1 && gradientColors.GradientColor2) {
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
      <div className="container lg:flex wide-laptop:flex small-laptop:flex hidden items-center justify-between relative">
        <div className="flex items-center gap-5 h-10">
          {dropdownItemsMainMenu.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded p-1 hover:text-white hover:bg-blue-800"
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
      <div className="container lg:hidden wide-laptop:hidden small-laptop:hidden flex items-center justify-between relative px-2">
        <div className="flex items-center">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 m-0 "
          >
            <Menu className="w-14 h-16 text-white" />
          </button>
          <Link href="/">
            <Image
              src={MobileLogo}
              alt="Logo"
              className="w-44 h-10 bg-white rounded px-2 py-1 ml-6"
            />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden wide-laptop:hidden small-laptop:hidden absolute top-full left-0 w-full bg-gradient-2 text-gray-200 flex flex-col items-start p-4"
        >
          <button
            className="flex items-center justify-between rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left"
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
                  className="rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Adjusted the code to render "Pages" submenu under the "Main Menu" */}
              <button
                className="flex items-center justify-between rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left"
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
                        className="rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left"
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
            className="flex items-center justify-between rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left mt-4"
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
                  className="rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left"
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
            className="rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left mt-4"
            onClick={handleOpenDrawer}
          >
            Become a Merchant
          </Link>

          {user ? (
            <>
              <Link
                href="/auth/login"
                className="rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left"
                onClick={() => logOut()}
              >
                Sign out
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left"
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
