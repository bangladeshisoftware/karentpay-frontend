import CardWithForm from '@/app/_components/ContactForm/ContactForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import React from 'react';

const contact = () => {
  return (
    <div className='container'>
      {/* header div */}
      <div>
        <div className='flex justify-between '>
          {/* header and contact form */}
          <div className='container'>
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
          <div className='container flex justify-center py-10'>
            <CardWithForm></CardWithForm>
          </div>
        </div>
      </div>
      <div className='container flex justify-between'>
        <div className=' py-32'>
          <h2 className='text-2xl mb-4'>Bangladeshi Software HQ</h2>
          <p>
            1600 Amphitheatre Parkway <br /> Mountain View, CA 94043, USA
          </p>
          <Link href='\'>
            <p className='text-blue-500 underline'>.(650) 253-0000</p>
          </Link>
          <Button className='bg-[#3B67ED] mt-7'>See all Location</Button>
        </div>
        <div>
          <div className='container py-32'>
            <h2 className='text-2xl mb-4'>Local Branch Bangladeshi Software</h2>
            <p className=''>
              1600 Amphitheatre Parkway <br /> Mountain View, CA 94043, USA
            </p>
            <Link href='\'>
              <p className='text-blue-500 underline'>.(650) 253-0000</p>
            </Link>
            <Button className='bg-[#3B67ED] mt-7'>See all Location</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
