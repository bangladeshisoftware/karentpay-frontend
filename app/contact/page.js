import CardWithForm from '@/app/_components/ContactForm/ContactForm';
// import GoogleMap from '@/app/_components/ContactForm/GoogleMap';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import headquarter from '@/app/_assets/headquater.jpg';
import local from '@/app/_assets/local.jpg';

import React from 'react';
import Image from 'next/image';
import IframeMap from '@/app/_components/ContactForm/IframeMap';

const contact = () => {
  return (
    <div className='container'>
      {/* header div */}
      <div className='container gap-x-6 px-0 '>
        <div className='flex justify-between py-10  '>
          {/* header and contact form */}
          <div className='container mt-12 px-0'>
            <div>
              <h1 className='text-5xl py-10'>Hi, how can we help?</h1>
            </div>
            <div>
              <h2 className='text-2xl py-5'>Help & Support</h2>
            </div>
            <div className='text-xl text-gray-500 mb-10'>
              Have questions or need to report an issue <br /> with a
              Bangladeshi Software product or service? <br /> We&apos;ve got you
              covered.
            </div>
            <div>
              <Button className='bg-[#3B67ED] gap-6'>Get Support</Button>
            </div>
          </div>
          {/* contact form */}
          <div className='container flex justify-center py-10 px-0'>
            <CardWithForm></CardWithForm>
          </div>
        </div>
      </div>
      {/* location */}
      <div className='container flex justify-between border shadow-md rounded-md transition duration-300 hover:shadow-lg hover:border-blue-500'>
        <div className='flex justify-center mb-4 '>
          <div>
            <Image
              alt='headquarter'
              className='inline-block object-cover object-center mt-16  rounded-md'
              src={headquarter}
              width={200}
              height={200}
            />
          </div>
          <div className='py-16 mx-4'>
            <h2 className='text-2xl mb-4 transition duration-300 hover:text-blue-500'>
              Bangladeshi Software HQ
            </h2>
            <p className='transition duration-300 hover:text-blue-500'>
              1600 Amphitheatre Parkway <br /> Mountain View, CA 94043, USA
            </p>
            <Link href='\'>
              <p className='text-blue-500 underline transition duration-300 hover:text-blue-700'>
                Phone: +(650) 253-0000
              </p>
            </Link>
          </div>
        </div>

        <div className='flex justify-center '>
          <div>
            <Image
              alt='headquarter'
              className='inline-block object-cover object-center mt-16  rounded-md'
              src={local}
              width={200}
              height={200}
            />
          </div>
          <div className='py-16 mx-4'>
            <h2 className='text-2xl mb-4 transition duration-300 hover:text-blue-500'>
              Local Branch Bangladeshi Software
            </h2>
            <p className='transition duration-300 hover:text-blue-500'>
              1600 Amphitheatre Parkway <br /> Mountain View, CA 94043, USA
            </p>
            <Link href='\'>
              <p className='text-blue-500 underline transition duration-300 hover:text-blue-700'>
                Phone: +(650) 253-0000
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-3xl font-bold text-center py-4 mt-10'>
          Our Offices
        </h2>
      </div>
      {/* Google Map */}
      <div className='container py-8 border shadow-md rounded-md mt-6 transition duration-300 hover:shadow-lg hover:border-blue-500'>
        {/* <GoogleMap /> */}
        <IframeMap />
      </div>
    </div>
  );
};

export default contact;
