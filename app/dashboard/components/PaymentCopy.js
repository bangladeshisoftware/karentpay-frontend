'use client';
import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { RiDeleteBin2Fill } from "react-icons/ri";



function PaymentCopy() {
  const [copied, setCopied] = useState(false);
  const [copyText, setCopyText] = useState("");
  const [date, searchData] = useState("");

  const handleCopy = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setCopyText(link)
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleNewLink = () => {
    alert('create new link')
  }

  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const handleDeleteLink = (id) => {
    console.log(id);
    setDeleteModalOpen(false)
  }
  return (
    <div className="mt-10 ">
      <div className="lg:px-0 px-1">
        <section class=" shadow-md border rounded-md ml-1 lg:ml-5 mb-36">
          <div class=" max-w-screen-xl ">
            {/* <!-- Start coding here --> */}
            <div class="bg-white dark:bg-gray-800  shadow-md sm:rounded-lg overflow-hidden">
              <div className='px-5 pt-5 flex items-center justify-end' >
                <button onClick={handleNewLink}
                  className="text-white bg-gradient-to-r from-[#395BEF] to-[#5C28D5] font-medium rounded-[4px] px-4 py-2  flex items-center gap-1"
                >
                  New Link
                </button>
              </div>
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm text-left text-black dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        SL
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Link
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Copy Link
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HZZONB2Xa0AoNJhtiqwQHnRIxFaHUteyaQ&s
                      </td>
                      <td className="px-4 py-2 flex-1 ">
                        <div className="flex items-center gap-2 relative">
                          <button
                            className={`text-white text-xl w-fit ${copied ? 'bg-green-500' : 'bg-blue-500'
                              } hover:bg-blue-800 font-medium rounded-[4px] px-3 py-1  flex items-center gap-1`}
                            onClick={() => handleCopy('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HZZONB2Xa0AoNJhtiqwQHnRIxFaHUteyaQ&s')}
                            disabled={copied}
                          >
                            <FaCopy />
                          </button>
                          {
                            copied && <span className='absolute z-1000 -bottom-2 -right-4'>Copy</span>
                          }
                        </div>
                      </td>
                      <td className="px-4 py-2 flex-1">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setDeleteModalOpen(true)}
                            className="text-white text-xl w-fit bg-red-500 hover:bg-red-800 font-medium rounded-[4px] px-4 py-1 flex items-center gap-1"
                          >
                            <RiDeleteBin2Fill />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {
                  deleteModalOpen && <div
                    id="popup-modal"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                  >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        {/* Modal content */}
                        <div className="p-4 pr-10 md:p-5 text-center">
                          <div className="flex justify-center items-center text-[60px] text-red-600">
                            <MdDeleteForever />
                          </div>
                          <h3 className="mb-5 text-lg font-normal text-black dark:text-white">
                            Are you sure you want to delete this Link
                          </h3>
                          {/* Add your modal content here */}
                          <button
                            onClick={() => handleDeleteLink(1)}
                            type="button"
                            className="text-white bg-gradient-to-r from-[#395BEF] to-[#5C28D5] focus:outline-none font-medium rounded-[4px] text-sm inline-flex items-center px-5 py-2.5 text-center"
                          >
                            Yes, I'm sure
                          </button>
                          <button
                            onClick={() => setDeleteModalOpen(false)}
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-[4px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 hover:bg-gradient-to-r from-[#395BEF] to-[#5C28D5] hover:text-white cursor-pointer dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            style={{
                              transition: "background-image 0.5s ease",
                              color: "black",
                            }}

                            onMouseEnter={(e) => {
                              e.target.style.backgroundImage = "linear-gradient(to right, #395BEF, #5C28D5,)";
                              e.target.style.color = "#FFFFFF";
                            }}

                            onMouseLeave={(e) => {
                              e.target.style.color = "black";
                            }}
                          >
                            No, cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
              <nav
                class="flex flex-col md:flex-row justify-between items-start md:items-center  p-5"
                aria-label="Table navigation"
              >
                <div className='border border-gray-300 py-1 px-3 rounded-lg'>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span class="font-semibold text-gray-900 dark:text-white">
                    1-10
                  </span>
                  of
                  <span class="font-semibold text-gray-900 dark:text-white">
                    1000
                  </span>
                </span>
                </div>
                <ul class="inline-flex items-stretch -space-x-px">
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Previous</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      100
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Next</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
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
    </div>
  );
}

export default PaymentCopy;