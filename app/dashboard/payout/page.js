"use client";
import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import ApiRequest from "@/app/_lib/Api_request";
import { GetCookies } from "@/app/_lib/cookiesSetting";
import { toast } from "react-toastify";
import { format } from "date-fns";
import Looader from "@/lib/looder";

function Payout() {
  const [transactions, setTransactions] = useState([]);
  const [transactionsData, settransactionsData] = useState([]);
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });



  const [copiedReferenceId, setCopiedReferenceId] = useState(null);
  const [hoveredReferenceId, setHoveredReferenceId] = useState(null);
  const [looding, setlooding] = useState(true);


  const handleDateRangeChange = async (newValue) => {
    setDateRange(newValue);
    const token = await GetCookies({ name: "auth_token" });
    if (token) {
      const response = await ApiRequest({
        url: "/transactionsByDate",
        formdata: { startDate: newValue.startDate, endDate: newValue.endDate },
      });

      if (response?.status == 200) {
        settransactionsData(response?.data);
        setlooding(false)

      } else {
        toast.error(response?.message);
        setlooding(false)

      }
    }
  };

  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    const token = await GetCookies({ name: "auth_token" });
    if (token) {
      const response = await ApiRequest({
        url: "/transactions",
        method: "get",
      });
      if (response?.status == 200) {
        settransactionsData(response?.data);
        setlooding(false)

      } else {
        toast.error(response?.message);
        setlooding(false)

      }
    }
  };

  const searchData = async (data) => {
    if (data.length > 1) {
      const token = await GetCookies({ name: "auth_token" });
      if (token) {
        const response = await ApiRequest({
          url: "/transactions",
          formdata: { search: data },
        });

        if (response?.status == 200) {
          settransactionsData(response?.data);
        setlooding(false)
        } else {
          toast.error(response?.message);
        setlooding(false)
        }
      }
    }
  };

  const handleCopy = (id, text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedReferenceId(id);
        setTimeout(() => setCopiedReferenceId(null), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const formatDateTime = (date) => {
    if (!date) return '';
    const formattedDate = format(new Date(date), 'dd MMMM yyyy');
    const formattedTime = format(new Date(date), 'HH:mm:ss');
    return (
      <div>
        <div>{formattedDate}</div>
        <div>{formattedTime}</div>
      </div>
    );
  };

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = transactionsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleTransactions = transactionsData.slice(
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
  // Filter transactions based on the selected date range

  return (
    <div className="relative">
      {looding &&
        <Looader></Looader>
      }
      <div className="py-4 text-center lg:hidden">
        <h3 className="text-xl font-semibold">Payout Transaction</h3>
      </div>
      <div className="lg:px-0 px-1">
        <section className=" shadow-md border rounded-md ml-0 ">
          <div className=" max-w-screen-xl ">
            {/* <!-- Start coding here --> */}
            <div className="bg-white dark:bg-gray-800  shadow-md sm:rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2">
                  <form className="flex items-center">
                    <label for="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full ">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex">
                        <input
                          onChange={(e) => searchData(e.target.value)}
                          type="text"
                          id="simple-search"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Search"
                          required=""
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="w-fit md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0 border border-blue-500 rounded-md">
                  <div className="flex items-center space-x-3 w-full md:w-auto">
                    <Datepicker
                      showShortcuts={true}
                      showFooter={true}
                      configs={{
                        shortcuts: {
                          today: "Today",
                          yesterday: "Yesterday",
                          past: (period) => `Past ${period}`,
                          currentMonth: "Current Month",
                          pastMonth: "Past Month",
                        },
                        footer: {
                          cancel: "Cancel",
                          apply: "Apply",
                        },
                      }}
                      value={dateRange}
                      onChange={handleDateRangeChange}
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto h-[60vh]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Sl
                      </th>
                      <th scope="col" className="px-4 py-3 lg:w-[150px]">
                        Date
                      </th>

                      <th scope="col" className="px-4 py-3">
                        TrxId
                      </th>

                      <th scope="col" className="px-4 py-3">
                        Payout Number
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Method
                      </th>


                      <th scope="col" className="px-4 py-3">
                        Amount
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3 lg:w-[150px]">
                        Reason
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleTransactions?.map((transaction, index) => (
                      <tr
                        className="border-b dark:border-gray-700"
                        key={transaction.id}
                      >
                        <td
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {startIndex + index + 1}
                        </td>
                        <td className="px-4 py-3">

                          {formatDateTime(transaction.created_at)}
                        </td>
                        <td
                          className="px-4 py-3 relative cursor-pointer break-words word-break-all overflow-hidden"
                          onClick={() => handleCopy(transaction.id, transaction.trxID)}
                        >{transaction.trxID}</td>
                        <td className="px-4 py-3">
                          {transaction.withdraw_number}
                        </td>
                        <td className="px-4 py-3">{transaction.payment_method}</td>
                        <td className="px-4 py-3">{transaction.amount}</td>
                        <td className="px-4 py-3">
                          {transaction.status}
                        </td>
                        <td className="px-4 py-3">
                          {transaction.failed_reason ? transaction.failed_reason : '---'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* this is pagination */}
              {/* <nav
                className="flex flex-col mt-2  md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-16"
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
                className="flex flex-col mt-2 md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-16 py-10"
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

export default Payout;
