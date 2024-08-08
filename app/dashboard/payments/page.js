"use client";
import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import ApiRequest from "@/app/_lib/Api_request";

function PaymentCopy() {
  const [link, setlink] = useState([]);

  useEffect(() => {
    getPayLink();
  }, []);

  const getPayLink = async () => {
    const response = await ApiRequest({
      url: "/v1/pay_with_link",
      method: "get",
    });
    if (response?.status === 200) {
      if (Array.isArray(response?.data)) {
        setlink(response?.data);
      }
    } else {
      console.log(response);
    }
  };

  const getNewLink = async () => {
    const response = await ApiRequest({
      url: "/v1/pay_with_link",
    });
    if (response?.status === 200) {
      getPayLink();
    } else {
      console.log(response);
    }
  };

  const [copied, setCopied] = useState(false);
  const [copyText, setCopyText] = useState("");
  const [date, searchData] = useState("");

  const handleCopy = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setCopyText(link);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const [deleteid, setDeleteid] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const handleDeleteLink = async (id) => {
    const response = await ApiRequest({
      url: "/v1/pay_with_link/" + id,
      method: "delete",
    });
    if (response?.status === 200) {
      getPayLink();
    } else {
      console.log(response);
    }
    setDeleteModalOpen(false);
  };

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = link.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleLink = link.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" ">

      <div className=" border shadow-lg mb-4 lg:mb-2 p-3 lg:p-3 mt-3 rounded-md text-center lg:text-left lg:hidden  ">
        <h3 className="text-xl font-semibold">Payment</h3>
      </div>
      <div className="lg:px-0 px-1">
        <section className=" shadow-md border rounded-md ml-0  ">
          <div className=" max-w-screen-xl ">
            {/* <!-- Start coding here --> */}
            <div className="bg-white dark:bg-gray-800  shadow-md sm:rounded-lg overflow-hidden">
              <div className="px-5 pt-5 flex items-center justify-end">
                <button
                  onClick={() => {
                    getNewLink();
                  }}
                  className="text-white bg-gradient-2 font-medium rounded-[4px] px-4 py-2  flex items-center gap-1"
                >
                  New Link
                </button>
              </div>
              <div className="overflow-x-auto mt-3 h-[62vh]">
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
                    {visibleLink?.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {startIndex + index + 1}
                        </td>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                          {process.env.NEXT_PUBLIC_PAYMENT_DOMAIN + '/pay/' + item.link}
                        </td>
                        <td className="px-4 py-2 flex-1 ">
                          <div className="flex items-center gap-2 relative">
                            <button
                              className={`text-white text-xl w-fit ${copied ? "bg-green-500" : "bg-blue-500"
                                } hover:bg-blue-800 font-medium rounded-[4px] px-3 py-1  flex items-center gap-1`}
                              onClick={() => {
                                handleCopy(process.env.NEXT_PUBLIC_PAYMENT_DOMAIN + '/pay/' + item.link);
                                toast.success("Successfully copied");
                              }}
                            >
                              <FaCopy />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-2 flex-1">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                console.log(item.id);
                                setDeleteid(item.id);
                                setDeleteModalOpen(true);
                              }}
                              className="text-white text-xl w-fit bg-red-500 hover:bg-red-800 font-medium rounded-[4px] px-4 py-1 flex items-center gap-1"
                            >
                              <RiDeleteBin2Fill />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {deleteModalOpen && (
                  <div
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
                            onClick={() => handleDeleteLink(deleteid)}
                            type="button"
                            className="text-white bg-gradient-to-r from-[#395BEF] to-[#5C28D5] focus:outline-none font-medium rounded-[4px] text-sm inline-flex items-center px-5 py-2.5 text-center"
                          >
                            Yes, I am sure
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
                              e.target.style.backgroundImage =
                                "linear-gradient(to right, #395BEF, #5C28D5,)";
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
                )}
              </div>
              {/* pagination */}
              {/* <nav
                className="flex flex-col mt-24  md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-16"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1-10
                  </span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1000
                  </span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-5 h-5"
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
                      className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      100
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-5 h-5"
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
              </nav> */}
              <nav
                className="flex flex-col mt-2 md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-16 py-8 "
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing {startIndex + 1} -{" "}
                  {Math.min(startIndex + itemsPerPage, totalItems)} of{" "}
                  {totalItems} Transactions
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <button
                      onClick={handlePreviousPage}
                      className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      disabled={currentPage === 1}
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i}>
                      <button
                        onClick={() => handlePageClick(i + 1)}
                        className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${currentPage === i + 1
                          ? "text-primary-600 bg-primary-50 border border-primary-300"
                          : "text-gray-500 bg-white border border-gray-300"
                          } hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleNextPage}
                      className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      disabled={currentPage === totalPages}
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
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
