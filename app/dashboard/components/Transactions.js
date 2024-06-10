import React from 'react';
import Image from 'next/image';
import img2 from '@/app/_assets/r2.jpg';

function Transactions() {
  return (
    <div className='mt-10'>
      <div className='border rounded-md shadow p-8 bg-[#FFFFFF] m-4 transition-all duration-300 hover:shadow-lg'>
        <div className='mb-4'>
          <h2 className='text-2xl font-bold'>User Information</h2>
        </div>
        <div className='overflow-auto'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                <th className='py-2 px-4 border-b-2 border-gray-300 text-left'>
                  NAME
                </th>
                <th className='py-2 px-4 border-b-2 border-gray-300 text-left'>
                  EMAIL
                </th>
                <th className='py-2 px-4 border-b-2 border-gray-300 text-left'>
                  TITLE
                </th>
                <th className='py-2 px-4 border-b-2 border-gray-300 text-left'>
                  STATUS
                </th>
                <th className='py-2 px-4 border-b-2 border-gray-300 text-left'>
                  ROLE
                </th>
                <th className='py-2 px-4 border-b-2 border-gray-300 text-left'>
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='transition-all duration-300 hover:bg-gray-100'>
                <td className='py-2 px-4 border-b border-gray-300 flex items-center'>
                  <Image
                    src={img2}
                    alt='John Doe'
                    width={30}
                    height={30}
                    className='rounded-full mr-3'
                  />
                  John Doe
                </td>
                <td className='py-2 px-4 border-b border-gray-300'>
                  john@example.com
                </td>
                <td className='py-2 px-4 border-b border-gray-300'>
                  Software Engineer
                </td>
                <td className='py-2 px-4 border-b border-gray-300'>Active</td>
                <td className='py-2 px-4 border-b border-gray-300'>Owner</td>
                <td className='py-2 px-4 border-b border-gray-300 text-blue-500 cursor-pointer'>
                  Edit
                </td>
              </tr>
              <tr className='transition-all duration-300 hover:bg-gray-100'>
                <td className='py-2 px-4  border-gray-300 flex items-center'>
                  <Image
                    src={img2}
                    alt='John Doe'
                    width={30}
                    height={30}
                    className='rounded-full mr-3'
                  />
                  John Doe
                </td>
                <td className='py-2 px-4  border-gray-300'>john@example.com</td>
                <td className='py-2 px-4  border-gray-300'>
                  Software Engineer
                </td>
                <td className='py-2 px-4  border-gray-300'>Active</td>
                <td className='py-2 px-4  border-gray-300'>Owner</td>
                <td className='py-2 px-4  border-gray-300 text-blue-500 cursor-pointer'>
                  Edit
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
