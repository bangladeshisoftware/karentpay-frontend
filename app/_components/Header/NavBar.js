import { Button } from '@/components/ui/button';
import {
  faLinkedin,
  faSquareFacebook,
  faSquareYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between px-96 bg-gradient-to-br from-purple-600 to-blue-500 p-2 sticky top-0'>
      <div className='flex items-center gap-8'>
        <Link href='/'>
          <Button
            variant='ghost'
            size='sm'
            className='text-white hover:bg-blue-800 hover:text-white'
          >
            Home
          </Button>
        </Link>
        <Link href='/about'>
          <Button
            variant='ghost'
            size='sm'
            className='text-white hover:bg-blue-800 hover:text-white'
          >
            About
          </Button>
        </Link>
        <Link href='/pricing'>
          <Button
            variant='ghost'
            size='sm'
            className='text-white hover:bg-blue-800 hover:text-white'
          >
            Pricing
          </Button>
        </Link>
        <Link href='/payment-gateway'>
          <Button
            variant='ghost'
            size='sm'
            className='text-white hover:bg-blue-800 hover:text-white'
          >
            Payment Gateway
          </Button>
        </Link>
        <Link href='/documentations'>
          <Button
            variant='ghost'
            size='sm'
            className='text-white hover:bg-blue-800 hover:text-white'
          >
            Documentations
          </Button>
        </Link>
        <Link href='/news'>
          <Button
            variant='ghost'
            size='sm'
            className='text-white hover:bg-blue-800 hover:text-white'
          >
            News
          </Button>
        </Link>
      </div>

      <div className='flex gap-4'>
        <Link href='facebook'>
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className='w-8 h-8 text-base bg-white text-blue-700 rounded-md'
          />
        </Link>
        <Link href='facebook'>
          <FontAwesomeIcon
            icon={faLinkedin}
            className='w-8 h-8 text-base bg-white text-blue-700 rounded-md p-[0.5px]'
          />
        </Link>
        <Link href='facebook'>
          <FontAwesomeIcon
            icon={faSquareYoutube}
            className='w-8 h-8 text-base bg-red-700 text-white rounded-md'
          />
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
