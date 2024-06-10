import React from 'react';

function Home() {
  return (
    <div className='bg-[#E5E7EB] rounded-md mt-5 ml-2'>
      <div>
        <h2 className='text-3xl font-bold m-4'>Dashboard</h2>
      </div>
      <div className='flex space-around gap-4'>
        <div className='border rounded-md shadow px-20 py-8 bg-[#FFFFFF]'>
          1
        </div>
        <div className='border rounded-md shadow px-20 py-8 bg-[#FFFFFF]'>
          2
        </div>
        <div className='border rounded-md shadow px-20 py-8 bg-[#FFFFFF]'>
          3
        </div>
      </div>
    </div>
  );
}

export default Home;
