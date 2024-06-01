import MobileDropdownMenu from "@/app/_components/Header/MobileDropdownMenu";
import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "lucide-react";
import Link from "next/link";
import desktopLogo from "@/app/_assets/Logo.png";
import mobileLogo from "@/app/_assets/Mobile-Logo.png";
import Image from "next/image";
import BecomeMerchant from "@/app/_components/Header/BecomeMerchent/BecomeMerchant";

const TopBar = () => {
  return (
    <section className="container flex justify-between items-center my-4">
      <Link href="/">
        <Image
          src={desktopLogo}
          alt="logo"
          className="w-auto h-auto lg:block wide-laptop:block small-laptop:block hidden"
          priority
        />
        <Image
          src={mobileLogo}
          alt="logo"
          className="w-auto h-auto lg:hidden wide-laptop:hidden small-laptop:hidden block"
          priority
        />
      </Link>
      {/* large screens */}
      <div className="items-center gap-3 lg:flex wide-laptop:flex small-laptop:flex hidden">
        <BecomeMerchant />

        <Link
          href="/auth/login"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1">
            <User className="w-4 h-4" />
            Merchant Login
          </span>
        </Link>
      </div>

      {/* small screens */}
      <div className="lg:hidden wide-laptop:hidden small-laptop:hidden">
        <MobileDropdownMenu />
      </div>
    </section>
  );
};
export default TopBar;
