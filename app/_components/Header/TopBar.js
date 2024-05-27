import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { User } from 'lucide-react';
import Link from 'next/link';

const TopBar = () => {
  return (
    <section className='flex justify-between items-center my-4 px-96'>
      <h2 className='text-3xl'>E-Payment Gateway</h2>
      <div className='flex items-center gap-3'>
        <Link
          href='/auth/signup'
          className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
        >
          <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-1'>
            <FontAwesomeIcon className='w-4 h-4 text-lg' icon={faRegistered} />
            Become a Merchant
          </span>
        </Link>
        <Link
          href='/auth/login'
          className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
        >
          <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-1'>
            <User className='w-4 h-4' />
            Merchant Login
          </span>
        </Link>
      </div>
    </section>
  );
};
export default TopBar;
