import PriceCard2 from '@/app/_components/PricingCard/PriceCard2';
import PricingCard from '@/app/_components/PricingCard/PricingCard';
import React from 'react';

const pricing = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='text-center text-4xl font-bold mt-14'>
          E-Payment GateWay Pricing: Your Gateway to Value
        </h1>
      </div>
      <div>
        <p className='text-xl text-center mt-10 mb-10'>
          Unlock unbeatable value with E-Payment Gateway Pricing. Our
          transparent rates and tailored solutions ensure you get the best{' '}
          <br /> bang for your buck every time
        </p>
      </div>
      <div className='flex gap-6 justify-between'>
        <div>
          <PricingCard></PricingCard>
        </div>
        <div>
          <PriceCard2></PriceCard2>
        </div>
      </div>
    </div>
  );
};

export default pricing;
