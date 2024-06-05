import PriceCard2 from '@/app/_components/PricingCard/PriceCard2';
import PriceCard3 from '@/app/_components/PricingCard/PriceCard3';
import PricingCard from '@/app/_components/PricingCard/PricingCard';
import { Button } from '@/components/ui/button';
import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

const pricing = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='   text-4xl font-bold mt-24 mb-28'>
          <span className='bg-gradient-to-r from-blue-600  to-purple-400 inline-block text-transparent bg-clip-text'>
            E-Payment GateWay
          </span>{' '}
          Pricing: Your Gateway to Value
        </h1>
      </div>
      {/* <div>
        <p className='text-base text-center mt-14 mb-24'>
          Unlock unbeatable value with E-Payment Gateway Pricing. Our
          transparent rates and tailored solutions ensure you get the best{' '}
          <br /> bang for your buck every time
        </p>
      </div> */}
      <div className='flex flex-col md:flex-row gap-16 justify-evenly items-center container mb-24 px-0'>
        <div className='w-full md:w-[30%]'>
          <PricingCard />
        </div>
        <div className='w-full md:w-[30%]'>
          <PriceCard2 />
        </div>
        <div className='w-full md:w-[30%]'>
          <PriceCard3 />
        </div>
      </div>
      {/* add Block  */}
      <div>
        <div className='text-3xl text-center font-bold py-4 mb-10'>
          Start your Gold plan trial today
        </div>
        <div className='flex justify-around w-full items-center border rounded-md shadow-md  py-8 mb-28 transition-all duration-300 hover:border-blue-500'>
          <div>
            <div className='text-2xl text-[#7073F3]'>
              Per transaction we cut BDT 10.00TK
            </div>
            <div className='text-xl text-[#7073F3] line-through'>
              BDT 20.00/Per Transaction
            </div>
            <div>
              <Button className='bg-gradient-to-r from-blue-600  to-purple-400 transition-transform duration-300 hover:scale-105 px-12 py-6 mt-4 mb-4'>
                Start Transaction
              </Button>
            </div>
          </div>
          <div>
            <div className='flex items-center py-2'>
              <IoCheckmark className='text-blue-500 mr-2' />
              <p>E-Payment GetWay Advanced</p>
            </div>
            <div className='flex items-center py-2'>
              <IoCheckmark className='text-blue-500 mr-2 ' />
              <p>Additional Store Support</p>
            </div>
            <div className='flex items-center py-2'>
              <IoCheckmark className='text-blue-500 mr-2 ' />
              <p>All Payment Methods Included</p>
            </div>
            <div className='flex items-center py-2'>
              <IoCheckmark className='text-blue-500 mr-2' />
              <p>Other Diamond plan benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pricing;
