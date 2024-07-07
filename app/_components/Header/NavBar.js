// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu } from 'lucide-react';
// import facebookIcon from '@/app/_assets/facebook.png';
// import youtubeIcon from '@/app/_assets/youtube.png';
// import Dropdown from '../Dropdown/Dropdown';
// import Logo from '@/app/_assets/Mobile-Logo.png';
// import { DrawerDialogDemo } from '@/app/_components/Header/BecomeMerchent/DrawerDialogDemo';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleOpenDrawer = (e) => {
//     e.preventDefault();
//     setIsDrawerOpen(true);
//     setIsOpen(false); // Close the mobile menu when the drawer opens
//   };

//   const socialLinks = {
//     facebookLink: '',
//     linkedInLink: '',
//     youtubeLink: ''
//   };

//   const dropdownItems = [
//     { label: 'About', href: '/about' },
//     { label: 'Privacy & Policy', href: '/privacy-policy' },
//     { label: 'Terms & Conditions', href: '/terms-and-conditions' }
//   ];

//   return (
//     <nav className='bg-gradient-3 text-gray-200 py-2 sticky top-0 z-50'>
//       {/* large screens */}
//       <div className='container lg:flex wide-laptop:flex small-laptop:flex hidden items-center justify-between relative'>
//         <div className='flex items-center gap-5 h-10'>
//           <Link
//             href='/'
//             className='rounded p-1 hover:text-white hover:bg-blue-800'
//           >
//             Home
//           </Link>
//           <Link
//             href='/pricing'
//             className='rounded p-1 hover:text-white hover:bg-blue-800'
//           >
//             Pricing
//           </Link>
//           <Link
//             href='/payment-gateway'
//             className='rounded p-1 hover:text-white hover:bg-blue-800'
//           >
//             Payment Gateway
//           </Link>
//           <Link
//             href='/documentations'
//             className='rounded p-1 hover:text-white hover:bg-blue-800'
//           >
//             Documentations
//           </Link>
//           <Link
//             href='/news'
//             className='rounded p-1 hover:text-white hover:bg-blue-800'
//           >
//             News
//           </Link>
//           <Link
//             href='/customer-reviews'
//             className='rounded p-1 hover:text-white hover:bg-blue-800'
//           >
//             Review
//           </Link>
//           <Link
//             href='/contact'
//             className='rounded p-1 hover:text-white hover:bg-blue-800'
//           >
//             Contact
//           </Link>
//           <Dropdown label='Pages' items={dropdownItems} />
//         </div>

//         <div className='flex gap-4'>
//           <Link href={socialLinks.facebookLink} target='_blank'>
//             <Image src={facebookIcon} alt='facebook' className='w-8' />
//           </Link>
//           <Link href={socialLinks.youtubeLink} target='_blank'>
//             <Image src={youtubeIcon} alt='youtube' className='w-8 rounded-md' />
//           </Link>
//         </div>
//       </div>

//       {/* small and medium screens */}
//       <div className='container lg:hidden wide-laptop:hidden small-laptop:hidden flex items-center justify-between relative px-2'>
//         <div className='flex items-center'>
//           <button onClick={() => setIsOpen(!isOpen)} className='p-1 m-0 '>
//             <Menu className='w-14 h-16 text-white' />
//           </button>
//           <Link href='/'>
//             <Image src={Logo} alt='Logo' className='w-44 h-14 ml-6' />
//           </Link>
//         </div>
//       </div>

//       {isOpen && (
//         <div className='lg:hidden wide-laptop:hidden small-laptop:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200 flex flex-col items-start p-4'>
//           <Link
//             href='/'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href='/pricing'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setIsOpen(false)}
//           >
//             Pricing
//           </Link>
//           <Link
//             href='/payment-gateway'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setIsOpen(false)}
//           >
//             Payment Gateway
//           </Link>
//           <Link
//             href='/documentations'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setIsOpen(false)}
//           >
//             Documentations
//           </Link>
//           <Link
//             href='/news'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setIsOpen(false)}
//           >
//             News
//           </Link>
//           <Link
//             href='/customer-reviews'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setIsOpen(false)}
//           >
//             Review
//           </Link>
//           <Link
//             href='/contact'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </Link>
//           <Dropdown
//             label='Pages'
//             items={dropdownItems}
//             onClick={() => setIsOpen(false)}
//           />
//           {/* Additional links for small and medium screens */}
//           <Link
//             href='/become_merchant'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={handleOpenDrawer}
//           >
//             Become a Merchant
//           </Link>
//           <Link
//             href='/auth/login'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setIsOpen(false)}
//           >
//             Merchant Login
//           </Link>
//         </div>
//       )}
//       {/* Drawer Dialog */}
//       <DrawerDialogDemo open={isDrawerOpen} setOpen={setIsDrawerOpen} />
//     </nav>
//   );
// };

// export default NavBar;








// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
// import facebookIcon from '@/app/_assets/facebook.png';
// import youtubeIcon from '@/app/_assets/youtube.png';
// import Dropdown from '../Dropdown/Dropdown';
// import Logo from '@/app/_assets/Mobile-Logo.png';
// import { DrawerDialogDemo } from '@/app/_components/Header/BecomeMerchent/DrawerDialogDemo';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [mainMenuOpen, setMainMenuOpen] = useState(false);
//   const [dashboardMenuOpen, setDashboardMenuOpen] = useState(true); // Initially open
//   const [pagesMenuOpen, setPagesMenuOpen] = useState(false); // Initially closed

//   const handleOpenDrawer = (e) => {
//     e.preventDefault();
//     setIsDrawerOpen(true);
//     setIsOpen(false); // Close the mobile menu when the drawer opens
//   };

//   const socialLinks = {
//     facebookLink: '',
//     linkedInLink: '',
//     youtubeLink: ''
//   };

//   const dropdownItemsMainMenu = [
//     { label: 'Home', href: '/' },
//     { label: 'Pricing', href: '/pricing' },
//     { label: 'Payment Gateway', href: '/payment-gateway' },
//     { label: 'Documentations', href: '/documentations' },
//     { label: 'News', href: '/news' },
//     { label: 'Customer Reviews', href: '/customer-reviews' },
//     { label: 'Contact', href: '/contact' },
//     {
//       label: 'Pages', submenu: [
//         { label: 'About', href: '/about' },
//         { label: 'Privacy & Policy', href: '/privacy-policy' },
//         { label: 'Terms & Conditions', href: '/terms-and-conditions' }
//       ]
//     }
//   ];

//   const dropdownItemsDashboard = [
//     { label: 'Home', href: '/dashboard/mobile/home' },
//     { label: 'Balance', href: '/dashboard/mobile/balance' },
//     { label: 'Transactions', href: '/dashboard/mobile/transactions' },
//     { label: 'W Transactions', href: '/dashboard/mobile/wtransactions' },
//     { label: 'Payment', href: '/dashboard/mobile/payment' },
//     { label: 'Developer', href: '/dashboard/mobile/developer' },
//     { label: 'Support', href: '/dashboard/mobile/support' },
//     { label: 'Settings', href: '/dashboard/mobile/settings' }
//   ];

//   return (
//     <nav className='bg-gradient-3 text-gray-200 py-2 sticky top-0 z-50'>
//       {/* large screens */}
//       <div className='container lg:flex wide-laptop:flex small-laptop:flex hidden items-center justify-between relative'>
//         <div className='flex items-center gap-5 h-10'>
//           {dropdownItemsMainMenu.slice(0, 7).map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className='rounded p-1 hover:text-white hover:bg-blue-800'
//             >
//               {item.label}
//             </Link>
//           ))}
//           <Dropdown label='Pages' items={dropdownItemsMainMenu.find(item => item.label === 'Pages').submenu} />
//         </div>
//         <div className='flex gap-4'>
//           <Link href={socialLinks.facebookLink} target='_blank'>
//             <Image src={facebookIcon} alt='facebook' className='w-8' />
//           </Link>
//           <Link href={socialLinks.youtubeLink} target='_blank'>
//             <Image src={youtubeIcon} alt='youtube' className='w-8 rounded-md' />
//           </Link>
//         </div>
//       </div>

//       {/* small and medium screens */}
//       <div className='container lg:hidden wide-laptop:hidden small-laptop:hidden flex items-center justify-between relative px-2'>
//         <div className='flex items-center'>
//           <button onClick={() => setIsOpen(!isOpen)} className='p-1 m-0 '>
//             <Menu className='w-14 h-16 text-white' />
//           </button>
//           <Link href='/'>
//             <Image src={Logo} alt='Logo' className='w-44 h-14 ml-6' />
//           </Link>
//         </div>
//       </div>

//       {isOpen && (
//         <div className='lg:hidden wide-laptop:hidden small-laptop:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200 flex flex-col items-start p-4'>
//           <button
//             className='flex items-center justify-between rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setMainMenuOpen(!mainMenuOpen)}
//           >
//             <span>Main Menu</span>
//             {mainMenuOpen ? <ChevronUp className='ml-2' /> : <ChevronDown className='ml-2' />}
//           </button>
//           {mainMenuOpen && (
//             <div className='flex flex-col ml-4'>
//               {dropdownItemsMainMenu.slice(0, 7).map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href || '#'} // Default to '#' if href is not provided
//                   className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <button
//                 className='flex items-center justify-between rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//                 onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
//               >
//                 <span>Pages</span>
//                 {pagesMenuOpen ? <ChevronUp className='ml-2' /> : <ChevronDown className='ml-2' />}
//               </button>
//               {pagesMenuOpen && (
//                 <div className='flex flex-col ml-4'>
//                   {dropdownItemsMainMenu.find(item => item.label === 'Pages').submenu.map((subItem) => (
//                     <Link
//                       key={subItem.label}
//                       href={subItem.href || '#'}
//                       className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {subItem.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//           <button
//             className='flex items-center justify-between rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left mt-4'
//             onClick={() => setDashboardMenuOpen(!dashboardMenuOpen)}
//           >
//             <span>Dashboard</span>
//             {dashboardMenuOpen ? <ChevronUp className='ml-2' /> : <ChevronDown className='ml-2' />}
//           </button>
//           {dashboardMenuOpen && (
//             <div className='flex flex-col ml-4'>
//               {dropdownItemsDashboard.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href || '#'} // Default to '#' if href is not provided
//                   className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           )}
//           {/* Additional links for small and medium screens */}
//           <Link
//             href='/become_merchant'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left mt-4'
//             onClick={handleOpenDrawer}
//           >
//             Become a Merchant
//           </Link>
//           <Link
//             href='/auth/login'
//             className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
//             onClick={() => setIsOpen(false)}
//           >
//             Merchant Login
//           </Link>
//         </div>
//       )}
//       {/* Drawer Dialog */}
//       <DrawerDialogDemo open={isDrawerOpen} setOpen={setIsDrawerOpen} />
//     </nav>
//   );
// };

// export default NavBar;

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import facebookIcon from '@/app/_assets/facebook.png';
import youtubeIcon from '@/app/_assets/youtube.png';
import Dropdown from '../Dropdown/Dropdown';
import Logo from '@/app/_assets/Mobile-Logo.png';
import { DrawerDialogDemo } from '@/app/_components/Header/BecomeMerchent/DrawerDialogDemo';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [dashboardMenuOpen, setDashboardMenuOpen] = useState(true); // Initially open
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false); // Initially closed
  const menuRef = useRef(null); // Ref for the menu
  const buttonRef = useRef(null); // Ref for the hamburger button

  const handleOpenDrawer = (e) => {
    e.preventDefault();
    setIsDrawerOpen(true);
    setIsOpen(false); // Close the mobile menu when the drawer opens
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const socialLinks = {
    facebookLink: '',
    linkedInLink: '',
    youtubeLink: ''
  };

  const dropdownItemsMainMenu = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Payment Gateway', href: '/payment-gateway' },
    { label: 'Documentations', href: '/documentations' },
    { label: 'News', href: '/news' },
    { label: 'Customer Reviews', href: '/customer-reviews' },
    { label: 'Contact', href: '/contact' },
    {
      label: 'Pages', submenu: [
        { label: 'About', href: '/about' },
        { label: 'Privacy & Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-and-conditions' }
      ]
    }
  ];

  const dropdownItemsDashboard = [
    { label: 'Home', href: '/dashboard/mobile/home' },
    { label: 'Balance', href: '/dashboard/mobile/balance' },
    { label: 'Transactions', href: '/dashboard/mobile/transactions' },
    { label: 'W Transactions', href: '/dashboard/mobile/wtransactions' },
    { label: 'Payment', href: '/dashboard/mobile/payment' },
    { label: 'Developer', href: '/dashboard/mobile/developer' },
    { label: 'Support', href: '/dashboard/mobile/support' },
    { label: 'Settings', href: '/dashboard/mobile/settings' }
  ];

  return (
    <nav className='bg-gradient-3 text-gray-200 py-2 sticky top-0 z-50'>
      {/* large screens */}
      <div className='container lg:flex wide-laptop:flex small-laptop:flex hidden items-center justify-between relative'>
        <div className='flex items-center gap-5 h-10'>
          {dropdownItemsMainMenu.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='rounded p-1 hover:text-white hover:bg-blue-800'
            >
              {item.label}
            </Link>
          ))}
          <Dropdown label='Pages' items={dropdownItemsMainMenu.find(item => item.label === 'Pages').submenu} />
        </div>
        <div className='flex gap-4'>
          <Link href={socialLinks.facebookLink} target='_blank'>
            <Image src={facebookIcon} alt='facebook' className='w-8' />
          </Link>
          <Link href={socialLinks.youtubeLink} target='_blank'>
            <Image src={youtubeIcon} alt='youtube' className='w-8 rounded-md' />
          </Link>
        </div>
      </div>

      {/* small and medium screens */}
      <div className='container lg:hidden wide-laptop:hidden small-laptop:hidden flex items-center justify-between relative px-2'>
        <div className='flex items-center'>
          <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)} className='p-1 m-0 '>
            <Menu className='w-14 h-16 text-white' />
          </button>
          <Link href='/'>
            <Image src={Logo} alt='Logo' className='w-44 h-14 ml-6' />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} className='lg:hidden wide-laptop:hidden small-laptop:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200 flex flex-col items-start p-4'>
          <button
            className='flex items-center justify-between rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setMainMenuOpen(!mainMenuOpen)}
          >
            <span>Main Menu</span>
            {mainMenuOpen ? <ChevronUp className='ml-2' /> : <ChevronDown className='ml-2' />}
          </button>
          {mainMenuOpen && (
            <div className='flex flex-col ml-4'>
              {dropdownItemsMainMenu.slice(0, 7).map((item) => (
                <Link
                  key={item.label}
                  href={item.href || '#'} // Default to '#' if href is not provided
                  className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                className='flex items-center justify-between rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
                onClick={() => setPagesMenuOpen(!pagesMenuOpen)}
              >
                <span>Pages</span>
                {pagesMenuOpen ? <ChevronUp className='ml-2' /> : <ChevronDown className='ml-2' />}
              </button>
              {pagesMenuOpen && (
                <div className='flex flex-col ml-4'>
                  {dropdownItemsMainMenu.find(item => item.label === 'Pages').submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href || '#'}
                      className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
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
            className='flex items-center justify-between rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left mt-4'
            onClick={() => setDashboardMenuOpen(!dashboardMenuOpen)}
          >
            <span>Dashboard</span>
            {dashboardMenuOpen ? <ChevronUp className='ml-2' /> : <ChevronDown className='ml-2' />}
          </button>
          {dashboardMenuOpen && (
            <div className='flex flex-col ml-4'>
              {dropdownItemsDashboard.map((item) => (
                <Link
                  key={item.label}
                  href={item.href || '#'} // Default to '#' if href is not provided
                  className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          {/* Additional links for small and medium screens */}
          <Link
            href='/become_merchant'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left mt-4'
            onClick={handleOpenDrawer}
          >
            Become a Merchant
          </Link>
          <Link
            href='/auth/login'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setIsOpen(false)}
          >
            Merchant Login
          </Link>
        </div>
      )}
      {/* Drawer Dialog */}
      <DrawerDialogDemo open={isDrawerOpen} setOpen={setIsDrawerOpen} />
    </nav>
  );
};

export default NavBar;


 









