'use client';

import { DrawerDialogDemo } from '@/app/_components/Header/BecomeMerchent/DrawerDialogDemo';
import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

const BecomeMerchant = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = (e) => {
    e.preventDefault();
    setIsDrawerOpen(true);
  };

  return (
    <div>
      <Link href='\become_merchant' onClick={handleOpenDrawer}>
        <div className='relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
          <span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0 flex items-center gap-1'>
            <FontAwesomeIcon className='w-4 h-4 text-lg' icon={faRegistered} />
            Become a Merchant
          </span>
        </div>
      </Link>

      {/* Drawer Dialog */}
      <DrawerDialogDemo open={isDrawerOpen} setOpen={setIsDrawerOpen} />
    </div>
  );
};

export default BecomeMerchant;
