import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { CiBookmarkCheck } from 'react-icons/ci';
import { GoCheckCircleFill } from 'react-icons/go';
import { RxCrossCircled } from 'react-icons/rx';

const PriceCard2 = () => {
  const crossItems = [
    'Statement Access',
    'Comprehensive Support',
    'Dedicated Key Account Manager',
    'All Payment Methods Included by Default',
    'No Additional Payment Method Fees'
  ];

  return (
    <div className='border shadow-md rounded-md w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
      <div className='bg-gradient-2 rounded-md py-10 '>
        <div className='border rounded-full flex justify-center mx-auto text-white mt-2 mb-10 w-32 '>
          <div className='mt-1 text-xl'>
            <CiBookmarkCheck />
          </div>
          <div className='ml-1 text-xl'>Cash In</div>
        </div>
        <div>
          <h1 className='text-xl text-center text-white font-bold pb-2'>
            Karentpay Cash In:<span className='text-2xl font-bold'> 4.5% </span>Charges
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
        'Instant Cash In'
      ].map((text, index, array) => (
        <div
          key={index}
          className={`flex pl-4 bg-white py-4 transition-colors duration-300 hover:bg-gray-100 ${
            index !== array.length - 1 ? 'border-b-2 border-gray-500' : ''
          }`}
        >
          <div
            className={`pt-1 pr-2 ${
              crossItems.includes(text) ? 'text-red-500' : 'text-[#7073F3]'
            }`}
          >
            {crossItems.includes(text) ? (
              <RxCrossCircled />
            ) : (
              <GoCheckCircleFill />
            )}
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

export default PriceCard2;
