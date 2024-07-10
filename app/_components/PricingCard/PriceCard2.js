import { Button } from '@/components/ui/button';
import React from 'react';
import { CiBookmarkCheck } from 'react-icons/ci';
import { GoCheckCircleFill } from 'react-icons/go';
import { RxCrossCircled } from 'react-icons/rx';

const PriceCard2 = () => {
  const crossItems = [
    // 'Statement Access',
    // 'Comprehensive Support',
    // 'Dedicated Key Account Manager',
    'All Payment Methods Included by Default',
    'No Additional Payment Method Fees'
  ];

  return (
    <div className='border shadow-md rounded-md w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
      <div className='bg-gradient-2 rounded-md py-10 '>
        <div className='border rounded-full flex justify-center mx-auto text-white mt-2 mb-10 w-32'>
          <div className='mt-1  text-xl'>
            <CiBookmarkCheck />
          </div>
          <div className='ml-1 text-xl'>Payout</div>
        </div>
        <div>
          <h1 className='text-xl text-center text-white font-bold pb-2'>
            Karentpay Payout:<span className='text-xl font-bold'> 2% Charges</span>
          </h1>
        </div>
        <div>
          <p className='text-base text-center mb-5 text-white px-4'>
            Karentpay GateWay offers institutions competitive prices are as
            follows:
          </p>
        </div>
      </div>
      {[
        'No Fee for onboarding / No annual charge',
        'No Monthly Fee: Enjoy Cost Savings with No Recurring Charges',
        'EMI and Discount Offer Facility',
        'Invoice Generator',
        'QR Payment Facility',
        'Payment Link',
        'Transaction Alerts',
        'Statement Access',
        'Comprehensive Support',
        'Dedicated Key Account Manager',
        'All Payment Methods Included by Default',
        'No Additional Payment Method Fees'
      ].map((text, index, array) => (
        <div
          key={index}
          className={`flex pl-4 py-4 bg-white transition-colors duration-300 hover:bg-gray-100 ${
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
      <div className='text-center py-4 bg-white'>
        <Button className='bg-gradient-2 transition-transform duration-300 hover:scale-105 px-12 py-6 mb-6'>
          Choose Plan
        </Button>
      </div>
    </div>
  );
};

export default PriceCard2;
