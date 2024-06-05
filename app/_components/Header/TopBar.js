import BecomeMerchant from '@/app/_components/Header/BecomeMerchent/BecomeMerchant';
import Link from 'next/link';
import Image from 'next/image';
import desktopLogo from '@/app/_assets/Logo.png';

const TopBar = () => {
  return (
    <section className='container flex justify-between items-center my-4 hidden lg:flex wide-laptop:flex small-laptop:flex'>
      {/* large screens */}
      <div className='flex items-center justify-between w-full'>
        <Link href='/'>
          <Image
            src={desktopLogo}
            alt='logo'
            className='w-auto h-auto'
            priority
          />
        </Link>
        <div className='flex items-center gap-3'>
          <BecomeMerchant />
          <Link
            href='/auth/login'
            className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
          >
            <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1'>
              Merchant Login
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
