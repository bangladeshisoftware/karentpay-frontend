import React from 'react';
import { GoCheckCircleFill } from 'react-icons/go';

const PricingCard = () => {
  return (
    <div className='border shadow-md rounded-md w-7/10 '>
      <div className='bg-[#7073F3] rounded-md py-4 '>
        <div>
          <h1 className='text-xl text-center text-white pb-2'>
            MoneyBag Education
          </h1>
        </div>
        <div>
          <p className='text-base text-center mb-5 text-white px-2'>
            Moneybag offers institutions competitive prices, empowering them to
            streamline <br /> operations and prioritize their educational
            mission. Prices are as follows:
          </p>
        </div>
      </div>
      <div className='flex pl-4 py-4 border-b-2'>
        <div className='pt-1 pr-2'>
          <GoCheckCircleFill />
        </div>
        <div>
          <p>No Fee for onboarding / No annual charge</p>
        </div>
      </div>
      <div className='flex pl-4 py-4 border-b-2'>
        <div className='pt-1 pr-2'>
          <GoCheckCircleFill />
        </div>
        <div>
          <p>No Fee for onboarding / No annual charge</p>
        </div>
      </div>
      <div className='flex pl-4 py-4 border-b-2'>
        <div className='pt-1 pr-2'>
          <GoCheckCircleFill />
        </div>
        <div>
          <p>No Fee for onboarding / No annual charge</p>
        </div>
      </div>
      <div className='flex pl-4 py-4 border-b-2'>
        <div className='pt-1 pr-2'>
          <GoCheckCircleFill />
        </div>
        <div>
          <p>No Fee for onboarding / No annual charge</p>
        </div>
      </div>
      <div className='flex pl-4 py-4 border-b-2'>
        <div className='pt-1 pr-2'>
          <GoCheckCircleFill />
        </div>
        <div>
          <p>No Fee for onboarding / No annual charge</p>
        </div>
      </div>
      <div className='flex pl-4 py-4 border-b-2'>
        <div className='pt-1 pr-2'>
          <GoCheckCircleFill />
        </div>
        <div>
          <p>No Fee for onboarding / No annual charge</p>
        </div>
      </div>
      <div className='flex pl-4 py-4 border-b-2'>
        <div className='pt-1 pr-2'>
          <GoCheckCircleFill />
        </div>
        <div>
          <p>No Fee for onboarding / No annual charge</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
