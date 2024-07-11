import { Button } from '@/components/ui/button';
import React from 'react';
import { GoCheckCircleFill } from 'react-icons/go';
import { CiBookmarkCheck } from 'react-icons/ci';
import Link from 'next/link';

const PriceCard3 = () => {
  return (
    <div className='border shadow-md rounded-md w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
      <div className='bg-gradient-2 rounded-md py-10 '>
        <div className='border rounded-full flex justify-center mx-auto text-white mt-2  mb-10 w-36 pl-4 pr-4'>
          <div className='mt-1  text-xl'>
            <CiBookmarkCheck />
          </div>
          <div className='ml-1  text-xl'>Withdraw</div>
        </div>
        <div>
          <h1 className='text-xl text-center text-white pb-2 font-bold'>
            Karentpay Withdraw:<span className='text-2xl font-bold'> 0.0% </span>Charges
          </h1>
        </div>
        <div>
          <p className='text-base text-center mb-5 text-white px-4'>
          
          </p>
        </div>
      </div>
      {[
        'No annual charge',
        'No Monthly Fee: Enjoy Cost Savings with No Recurring Charges',
        'Default Payment Link',
        'Create payment link facilities',
        'QR Payment Facility',
        'Instant Account Active',
        'Easy To Use System',
        'Support ticket system ',
        'Emergency call support ',
        'Emergency Google Meet support ',
        'Free API Integration Support ',
        'Instant Withdraw'
      ].map((text, index, array) => (
        <div
          key={index}
          className={`flex pl-4 py-4 bg-white transition-colors duration-300 hover:bg-gray-100 ${
            index !== array.length - 1 ? 'border-b-2 border-gray-500' : ''
          }`}
        >
          <div className='pt-1 pr-2 text-[#7073F3]'>
            <GoCheckCircleFill />
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      ))}
      <div className='text-center py-10  bg-white'>
        <Link href='/auth/register' className='bg-gradient-2 transition-transform duration-300 hover:scale-105 text-white px-12 py-3 mb-6 rounded-md'>
          Choose Plan
        </Link>
      </div>
    </div>
  );
};

export default PriceCard3;
