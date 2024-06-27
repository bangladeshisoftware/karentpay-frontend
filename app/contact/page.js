// pages/contact.js

import React from 'react';
import CardWithForm from '@/app/_components/ContactForm/ContactForm';
import IframeMap from '@/app/_components/ContactForm/IframeMap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import headquarter from '@/app/_assets/headquater.jpg';
import local from '@/app/_assets/local.jpg';

const Contact = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Header div */}
      <div className='flex flex-col lg:flex-row justify-between py-10'>
        {/* Header and contact form */}
        <div className='w-full lg:w-1/2 mt-12'>
          <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl py-10'>
              Hi, how can we help?
            </h1>
          </div>
          <div>
            <h2 className='text-xl sm:text-2xl lg:text-3xl py-5'>
              Help & Support
            </h2>
          </div>
          <div className='text-lg sm:text-xl text-gray-500 mb-10'>
            Have questions or need to report an issue{' '}
            <br className='hidden lg:block' />
            with a Bangladeshi Software product or service?{' '}
            <br className='hidden lg:block' />
            We &apos;ve got you covered.
          </div>
          <div>
            <Button className='bg-[#3B67ED] px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base'>
              Get Support
            </Button>
          </div>
        </div>
        {/* Contact form */}
        <div className='w-full lg:w-1/2 flex justify-center py-10 lg:py-6'>
          <CardWithForm />
        </div>
      </div>
      {/* Location */}
      <div className='bg-white flex flex-col lg:flex-row justify-between border shadow-md rounded-md transition duration-300 hover:shadow-lg hover:border-blue-500 sm:py-4 md:py-4 '>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:mb-10 lg:w-1/2 '>
          <div className='mt-4 lg:mt-0'>
            <Image
              alt='headquarter'
              className='inline-block object-cover object-center  lg:mt-4 rounded-md'
              src={headquarter}
              width={200}
              height={200}
            />
          </div>
          <div className='py-4 lg:py-16 mx-4 text-center lg:text-left'>
            <h2 className='text-xl sm:text-2xl lg:text-3xl mb-4 transition duration-300 hover:text-blue-500'>
              Bangladeshi Software HQ
            </h2>
            <p className='transition duration-300 hover:text-blue-500'>
              1600 Amphitheatre Parkway <br /> Mountain View, CA 94043, USA
            </p>
            <Link href='/'>
              <p className='text-blue-500 underline transition duration-300 hover:text-blue-700'>
                Phone: +(650) 253-0000
              </p>
            </Link>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:mb-10 lg:w-1/2'>
          <div className='mt-4 lg:mt-0'>
            <Image
              alt='local'
              className='inline-block object-cover object-center  lg:mt-4 rounded-md'
              src={local}
              width={200}
              height={200}
            />
          </div>
          <div className='py-4 lg:py-16 mx-4 text-center lg:text-left'>
            <h2 className='text-xl sm:text-2xl lg:text-3xl mb-2 transition duration-300 hover:text-blue-500'>
              Local Branch Bangladeshi Software
            </h2>
            <p className='transition duration-300 hover:text-blue-500'>
              1600 Amphitheatre Parkway <br /> Mountain View, CA 94043, USA
            </p>
            <Link href='/'>
              <p className='text-blue-500 underline transition duration-300 hover:text-blue-700'>
                Phone: +(650) 253-0000
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center py-4 mt-10'>
          Our Offices
        </h2>
      </div>
      {/* Google Map */}
      <div className='py-8 px-6 border shadow-md rounded-md mt-6 transition duration-300 hover:shadow-lg hover:border-blue-500 bg-white'>
        <IframeMap />
      </div>
    </div>
  );
};

export default Contact;
