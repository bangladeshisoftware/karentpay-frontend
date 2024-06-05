'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import facebookIcon from '@/app/_assets/facebook.png';
import youtubeIcon from '@/app/_assets/youtube.png';
import Dropdown from '../Dropdown/Dropdown';
import footerLogo from '@/app/_assets/Footer-Logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = {
    facebookLink: '',
    linkedInLink: '',
    youtubeLink: ''
  };

  const dropdownItems = [
    { label: 'About', href: '/about' },
    { label: 'Privacy & Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' }
  ];

  return (
    <nav className='bg-gradient-to-r from-blue-600 to-purple-400 text-white py-2 sticky top-0 z-50'>
      {/* large screens */}
      <div className='container lg:flex wide-laptop:flex small-laptop:flex hidden items-center justify-between relative'>
        <div className='flex items-center gap-5 h-10'>
          <Link
            href='/'
            className='rounded p-1 hover:text-white hover:bg-blue-800'
          >
            Home
          </Link>
          <Link
            href='/pricing'
            className='rounded p-1 hover:text-white hover:bg-blue-800'
          >
            Pricing
          </Link>
          <Link
            href='/payment-gateway'
            className='rounded p-1 hover:text-white hover:bg-blue-800'
          >
            Payment Gateway
          </Link>
          <Link
            href='/documentations'
            className='rounded p-1 hover:text-white hover:bg-blue-800'
          >
            Documentations
          </Link>
          <Link
            href='/news'
            className='rounded p-1 hover:text-white hover:bg-blue-800'
          >
            News
          </Link>
          <Link
            href='/customer-reviews'
            className='rounded p-1 hover:text-white hover:bg-blue-800'
          >
            Review
          </Link>
          <Link
            href='/contact'
            className='rounded p-1 hover:text-white hover:bg-blue-800'
          >
            Contact
          </Link>
          <Dropdown label='Pages' items={dropdownItems} />
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
      <div className='container lg:hidden wide-laptop:hidden small-laptop:hidden flex items-center justify-between relative'>
        <button onClick={() => setIsOpen(!isOpen)} className='p-2'>
          <Menu className='w-6 h-6 text-white' />
        </button>
        <Link href='/'>
          <Image src={footerLogo} alt='Footer Logo' className='w-24 h-10' />
        </Link>
      </div>

      {isOpen && (
        <div className='lg:hidden wide-laptop:hidden small-laptop:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-600 to-purple-400 text-white flex flex-col items-start p-4'>
          <Link
            href='/'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href='/pricing'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href='/payment-gateway'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setIsOpen(false)}
          >
            Payment Gateway
          </Link>
          <Link
            href='/documentations'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setIsOpen(false)}
          >
            Documentations
          </Link>
          <Link
            href='/news'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          <Link
            href='/customer-reviews'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setIsOpen(false)}
          >
            Review
          </Link>
          <Link
            href='/contact'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Dropdown
            label='Pages'
            items={dropdownItems}
            onClick={() => setIsOpen(false)}
          />
          {/* Additional links for small and medium screens */}
          <Link
            href='/become-merchant'
            className='rounded p-1 hover:text-white hover:bg-blue-800 w-full text-left'
            onClick={() => setIsOpen(false)}
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
    </nav>
  );
};

export default NavBar;
