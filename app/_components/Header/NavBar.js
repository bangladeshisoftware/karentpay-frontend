'use client';
import Image from 'next/image';
import Link from 'next/link';
import facebookIcon from '@/app/_assets/facebook.png';
import youtubeIcon from '@/app/_assets/youtube.png';
import Dropdown from '../Dropdown/Dropdown';
// Adjust the import path accordingly

const NavBar = () => {
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
    </nav>
  );
};

export default NavBar;
