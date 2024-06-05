import PriceCard2 from '@/app/_components/PricingCard/PriceCard2';
import PricingCard from '@/app/_components/PricingCard/PricingCard';
import React from 'react';

const pricing = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='text-center text-4xl font-bold mt-14'>
          <span className='text-[#7073F3]'>E-Payment GateWay</span> Pricing:
          Your Gateway to Value
        </h1>
      </div>
      <div>
        <p className='text-base text-center mt-14 mb-24'>
          Unlock unbeatable value with E-Payment Gateway Pricing. Our
          transparent rates and tailored solutions ensure you get the best{' '}
          <br /> bang for your buck every time
        </p>
      </div>
      <div className='flex gap-6 justify-center items-center ml-8'>
        <div className='w-full md:w-[44%] '>
          <PricingCard />
        </div>
        <div className='w-full md:w-[44%]'>
          <PriceCard2 />
        </div>
      </div>
    </div>
  );
};

export default pricing;
