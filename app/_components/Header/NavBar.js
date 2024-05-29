import { Button } from '@/components/ui/button';
import {
  faLinkedin,
  faSquareFacebook,
  faSquareYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const NavBar = () => {
  const socialLinks = {
    facebookLink: '',
    linkedInLink: '',
    youtubeLink: ''
  };
  return (
    <nav className='bg-gradient-to-brs bg-[#f2f3f3] py-2 sticky top-0'>
      <div className='container lg:flex wide-laptop:flex small-laptop:flex hidden items-center justify-between'>
        <div className='flex items-center gap-5'>
          <Link
            href='/'
            className='rounded p-1 hover:text-white hover:bg-blue-600'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='rounded p-1 hover:text-white hover:bg-blue-600'
          >
            About
          </Link>
          <Link
            href='/pricing'
            className='rounded p-1 hover:text-white hover:bg-blue-600'
          >
            Pricing
          </Link>
          <Link
            href='/payment-gateway'
            className='rounded p-1 hover:text-white hover:bg-blue-600'
          >
            Payment Gateway
          </Link>
          <Link
            href='/documentations'
            className='rounded p-1 hover:text-white hover:bg-blue-600'
          >
            Documentations
          </Link>
          <Link
            href='/news'
            className='rounded p-1 hover:text-white hover:bg-blue-600'
          >
            News
          </Link>
        </div>

        <div className='flex gap-4'>
          <Link href={socialLinks.facebookLink} target='_blank'>
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className='w-8 h-8 text-base bg-white text-blue-600 rounded-md'
            />
          </Link>
          <Link href={socialLinks.linkedInLink} target='_blank'>
            <FontAwesomeIcon
              icon={faLinkedin}
              className='w-8 h-8 text-base bg-white text-blue-600 rounded-md p-[0.5px]'
            />
          </Link>
          <Link href={socialLinks.youtubeLink} target='_blank'>
            <FontAwesomeIcon
              icon={faSquareYoutube}
              className='w-8 h-8 text-base bg-white text-[#e41f25] rounded-md p-[0.5px]'
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
