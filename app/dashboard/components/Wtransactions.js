'use client';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function Wtransactions() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className='mt-10'>
      <div>
        <section className='shadow-md border rounded-md ml-5'>
          <div className='max-w-screen-xl'>
            {/* <!-- Start coding here --> */}
            <div className='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden'>
              <div className='flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 p-4'>
                <div className='w-full md:w-full'>
                  <form className='flex items-center'>
                    <label htmlFor='simple-search' className='sr-only'>
                      Search
                    </label>
                    <div className='relative w-full flex'>
                      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <div className='grid grid-flow-col w-[100%]'>
                        <input
                          type='text'
                          id='simple-search'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                          placeholder='Search'
                          required=''
                        />
                        <button className='btn bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200 px-14 rounded-md ml-2'>
                          Search
                        </button>
                        <button
                          type='button'
                          className='btn bg-red-500 text-white px-14 rounded-md ml-2 flex items-center'
                          onClick={openModal}
                        >
                          <FaPlus className='ml-6 mr-2 ' />
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='w-fit md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
                  <div className='flex items-center space-x-3 w-full md:w-auto'>
                    <button
                      id='filterDropdownButton'
                      data-dropdown-toggle='filterDropdown'
                      className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                      type='button'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                        className='h-4 w-4 mr-2 text-gray-400'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Filter
                      <svg
                        className='-mr-1 ml-1.5 w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                      >
                        <path
                          clipRule='evenodd'
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-4 py-3'>
                        Sl
                      </th>
                      <th scope='col' className='px-4 py-3'>
                        Type
                      </th>
                      <th scope='col' className='px-4 py-3'>
                        Currency Name
                      </th>
                      <th scope='col' className='px-4 py-3'>
                        Network
                      </th>
                      <th scope='col' className='px-4 py-3'>
                        Deposit Address
                      </th>
                      <th scope='col' className='px-4 py-3'>
                        Trxid
                      </th>
                      <th scope='col' className='px-4 py-3'>
                        Debit
                      </th>
                      <th scope='col' className='px-4 py-3'>
                        Date
                      </th>
                      <th scope='col' className='px-4 py-3'>
                        Status
                      </th>
                      <th scope='col' className='px-4 py-3'>
                        <span className='sr-only'>Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b dark:border-gray-700'>
                      <th
                        scope='row'
                        className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        1
                      </th>
                      <td className='px-4 py-3'>Deposit</td>
                      <td className='px-4 py-3'>USD</td>
                      <td className='px-4 py-3'>Bank Transfer</td>
                      <td className='px-4 py-3'>N/A</td>
                      <td className='px-4 py-3'>TRX123456</td>
                      <td className='px-4 py-3'>1000</td>
                      <td className='px-4 py-3'>2024-05-01</td>
                      <td className='px-4 py-3'>Completed</td>
                      <td className='px-4 py-3 flex items-center justify-end'></td>
                    </tr>

                    <tr className='border-b dark:border-gray-700'>
                      <th
                        scope='row'
                        className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        2
                      </th>
                      <td className='px-4 py-3'>Deposit</td>
                      <td className='px-4 py-3'>USD</td>
                      <td className='px-4 py-3'>Bank Transfer</td>
                      <td className='px-4 py-3'>N/A</td>
                      <td className='px-4 py-3'>TRX123456</td>
                      <td className='px-4 py-3'>1000</td>
                      <td className='px-4 py-3'>2024-06-01</td>
                      <td className='px-4 py-3'>Completed</td>
                      <td className='px-4 py-3 flex items-center justify-end'></td>
                    </tr>

                    <tr className='border-b dark:border-gray-700'>
                      <th
                        scope='row'
                        className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        3
                      </th>
                      <td className='px-4 py-3'>Deposit</td>
                      <td className='px-4 py-3'>USD</td>
                      <td className='px-4 py-3'>Bank Transfer</td>
                      <td className='px-4 py-3'>N/A</td>
                      <td className='px-4 py-3'>TRX123456</td>
                      <td className='px-4 py-3'>1000</td>
                      <td className='px-4 py-3'>2024-07-01</td>
                      <td className='px-4 py-3'>Completed</td>
                      <td className='px-4 py-3 flex items-center justify-end'></td>
                    </tr>

                    <tr className='border-b dark:border-gray-700'>
                      <th
                        scope='row'
                        className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        4
                      </th>
                      <td className='px-4 py-3'>Deposit</td>
                      <td className='px-4 py-3'>USD</td>
                      <td className='px-4 py-3'>Bank Transfer</td>
                      <td className='px-4 py-3'>N/A</td>
                      <td className='px-4 py-3'>TRX123456</td>
                      <td className='px-4 py-3'>1000</td>
                      <td className='px-4 py-3'>2024-08-01</td>
                      <td className='px-4 py-3'>Completed</td>
                      <td className='px-4 py-3 flex items-center justify-end'></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* showing page number & table */}
              <nav
                className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4'
                aria-label='Table navigation'
              >
                <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                  Showing
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    1-10
                  </span>
                  of
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    1000
                  </span>
                </span>
                <ul className='inline-flex items-stretch -space-x-px'>
                  <li>
                    <a
                      href='#'
                      className='flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      <span className='sr-only'>Previous</span>
                      <svg
                        className='w-5 h-5'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      aria-current='page'
                      className='flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      100
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      <span className='sr-only'>Next</span>
                      <svg
                        className='w-5 h-5'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </div>

      {showModal ? (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50'>
          <div className='bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full'>
            <div className='flex justify-between items-center p-4 border-b'>
              <h3 className='text-lg font-semibold'>Withdraw Request</h3>
              <button
                className='text-gray-400 hover:text-gray-500'
                onClick={closeModal}
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='p-6'>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Currency Balance
                </label>
                <input
                  type='text'
                  className='mt-1 block w-full pl-4 py-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Currency Name
                </label>
                <select className='mt-1 block w-full pl-4 py-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'>
                  <option>--Select--</option>
                  <option>Dollar</option>
                  <option>Euro</option>
                  <option>tk</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Network
                </label>
                <select className='mt-1 block w-full pl-4 py-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'>
                  <option>--Select--</option>
                  <option>Dollar</option>
                  <option>Euro</option>
                  <option>tk</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Deposit Address
                </label>
                <input
                  type='text'
                  className='mt-1 block w-full pl-4 py-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Amount
                </label>
                <input
                  type='text'
                  className='mt-1 block w-full pl-4 py-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div className='flex justify-around'>
                <button
                  className='btn bg-red-500 text-white px-72 py-2 rounded-md'
                  onClick={closeModal}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Wtransactions;
