"use clint";
import React, { useEffect, useState } from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { toast } from "react-toastify";
import ApiRequest from "@/app/_lib/Api_request";
import Datepicker from "react-tailwindcss-datepicker";
import { GetCookies } from "@/app/_lib/cookiesSetting";
import { format } from "date-fns";


function Balance() {
  const [balance, setbalance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const [selectedBalance, setSelectedBalance] = useState('Select Balance');




  useEffect(() => {
    handlePayment();
  }, []);

  const handlePayment = async () => {
    const response = await ApiRequest({
      url: "/user",
      method: "get",
    });
    if (response.status == 200) {
      setbalance(response.data.user.balance);
    } else {
      toast.error(response.message);
    }
  };

  const handleCreateTicket = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subject:", subject);
    console.log("Message:", message);
    setIsModalOpen(false);
  };

  const [transactions, setTransactions] = useState([]);
  const [transactionsData, settransactionsData] = useState([]);
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const [copiedReferenceId, setCopiedReferenceId] = useState(null);
  const [hoveredReferenceId, setHoveredReferenceId] = useState(null);


  const handleDateRangeChange = async (newValue) => {
    console.log("newValue:", newValue);
    setDateRange(newValue);
    const token = await GetCookies({ name: "auth_token" });
    if (token) {
      const response = await ApiRequest({
        url: "/transactionsByDate",
        formdata: { startDate: newValue.startDate, endDate: newValue.endDate },
      });

      if (response.status == 200) {
        settransactionsData(response.data);
        console.log(response.data);
      } else {
        toast.error(response.message);
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
      if (response.status == 200) {
        settransactionsData(response.data);
        // console.log(response.data);
      } else {
        toast.error(response.message);
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
        if (response.status == 200) {
          settransactionsData(response.data);
          // console.log(response.data);
        } else {
          toast.error(response.message);
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


  const handleBalanceChange = (e) => {
    setSelectedBalance(e.target.value);
  };

  const getChargePercentage = () => {
    if (selectedBalance === 'Withdraw Balance') {
      return '5%';
    } else if (selectedBalance === 'Robotics Balance') {
      return '7%';
    } else {
      return '';
    }
  };

  const getPlaceholderText = () => {
    if (selectedBalance === 'Withdraw Balance') {
      return 'Enter Withdraw Balance';
    } else if (selectedBalance === 'Robotics Balance') {
      return 'Enter Robotics Balance';
    } else {
      return ' ';
    }
  }

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
  const itemsPerPage = 4;
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

  return (
    <div className="rounded-md mt-10 ml-0 lg:ml-5">
      <div className=" border shadow-lg mb-4 lg:mb-2 p-3 lg:p-3 mt-3 rounded-md text-center lg:text-left lg:hidden  ">
        <h3 className="text-xl font-semibold">Balance</h3>
      </div>
      <div className=" flex justify-center lg:justify-end  ">
        <button
          type="button"
          className="btn bg-gradient-2 text-white justify-center rounded-md  flex items-center px-8 py-3 mb-2 "
          onClick={handleCreateTicket}
        >
          Transfer Balance
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around gap-2 px-1 lg:px-0 ">
        <div className="border shadow-lg rounded-md w-full h-60 flex items-center transition-all duration-300 hover:shadow-lg bg-white sm:h-60">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Main Balance</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">{balance}</h2>
            </div>
            <div>
              <p>Jan-March 2024</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <HiOutlineCurrencyDollar className="text-red-500 text-opacity-80" />
          </div>
        </div>

        <div className="border shadow-lg rounded-md w-full h-60 flex items-center transition-all duration-300 hover:shadow-lg bg-white sm:h-60">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Robotic Balance</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">{balance}</h2>
            </div>
            <div>
              <p>Jan-March 2024</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <HiOutlineCurrencyDollar className="text-green-700 text-opacity-80" />
          </div>
        </div>

        <div className="border shadow-lg rounded-md w-full h-60 flex items-center transition-all duration-300 hover:shadow-lg bg-white sm:h-60 mb-2">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Withdraw Balance</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">{balance}</h2>
            </div>
            <div>
              <p>Jan-March 2024</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <HiOutlineCurrencyDollar className="text-blue-700 text-opacity-80" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around gap-2 px-1 lg:px-0 pb-2">
        <div className="border shadow-lg rounded-md w-full h-60 flex items-center transition-all duration-300 hover:shadow-lg bg-white sm:h-60">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Cash In  Balance</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">{balance}</h2>
            </div>
            <div>
              <p>Jan-March 2024</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <HiOutlineCurrencyDollar className="text-violet-800 text-opacity-80" />
          </div>
        </div>

        <div className="border shadow-lg rounded-md w-full h-60 flex items-center transition-all duration-300 hover:shadow-lg bg-white sm:h-60">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Payout Balance</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">{balance}</h2>
            </div>
            <div>
              <p>Jan-March 2024</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <HiOutlineCurrencyDollar className="text-pink-700 text-opacity-80" />
          </div>
        </div>

        <div className="border shadow-lg rounded-md w-full h-60 flex items-center transition-all duration-300 hover:shadow-lg bg-white sm:h-60 mb-4">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Wallet Balance</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">{balance}</h2>
            </div>
            <div>
              <p>Jan-March 2024</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <HiOutlineCurrencyDollar className="text-yellow-500 text-opacity-80" />
          </div>
        </div>
      </div>

      <div className="lg:px-0 px-1">
        <section class=" shadow-md border rounded-md ml-0 mb-36">
          <div class=" max-w-screen-xl ">
            {/* <!-- Start coding here --> */}
            <div class="bg-white dark:bg-gray-800  shadow-md sm:rounded-lg overflow-hidden">
              <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                  <form class="flex items-center">
                    <label for="simple-search" class="sr-only">
                      Search
                    </label>
                    <div class="relative w-full ">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
              <div class="overflow-x-auto h-[60%]">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-4 py-3">
                        Sl
                      </th>
                      <th scope="col" class="px-4 py-3 lg:w-[150px]">
                        Date
                      </th>
                      <th scope="col" class="px-4 py-3 lg:w-[200px] md:w-[300px] w-[150px]">
                        Reference
                      </th>

                      <th scope="col" class="px-4 py-3">
                        Method
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Amount
                      </th>
                      <th scope="col" class="px-4 py-3">
                        TrxId
                      </th>

                      <th scope="col" class="px-4 py-3">
                        customerMsisdn
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleTransactions?.map((transaction, index) => (
                      <tr
                        className="border-b dark:border-gray-700"
                        key={transaction.id}
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {startIndex + index + 1}
                        </th>
                        <td className="px-4 py-3">
                          {/* {transaction.created_at && format(transaction.created_at, "dd" + " " + "MMMM" + " " + "yyyy")} */}
                          {formatDateTime(transaction.created_at)}
                        </td>
                        <td
                          className="px-4 py-3 relative cursor-pointer break-words word-break-all overflow-hidden "
                          onClick={() => handleCopy(transaction.id, transaction.reference)}
                        >
                          {copiedReferenceId === transaction.id ? (
                            <div className="absolute top-3 left-5 lg:top-3 lg:left-14 bg-blue-300 text-black text-xs p-1 rounded">
                              Copied!
                            </div>
                          ) : hoveredReferenceId === transaction.id ? (
                            <div className="absolute top-3 left-5 lg:top-3 lg:left-14 bg-gray-300 text-black text-xs p-1 rounded">
                              Copy to clipboard
                            </div>
                          ) : (
                            transaction.reference
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {transaction.payment_method}
                        </td>
                        <td className="px-4 py-3">{transaction.amount}</td>
                        <td className="px-4 py-3">{transaction.trxID}</td>
                        <td className="px-4 py-3">
                          {transaction.customerMsisdn}
                        </td>
                        <td className="px-4 py-3">
                          {transaction.transactionStatus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* this is pagination */}
              {/* <nav
                class="flex flex-col mt-2  md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-16"
                aria-label="Table navigation"
              >
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
              </nav> */}
              <nav
                className="flex flex-col mt-2 md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-16"
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 lg:top-40 mx-auto my-auto p-5 border sm:w-[550px] sm:h-[520px] md:w-[600px] md:h-[520px] lg:w-[600px] lg:h-[550px] shadow-lg rounded-md bg-white">
            <div className="mt-6 text-center ">
              <h3 className="text-3xl mb-4 leading-6 font-medium gradient-text">
                Transfer Balance to Robotic/Withdraw
              </h3>
              <div className="flex justify-evenly mt-2 items-center">
                <div className="mt-2 mb-10">
                  <h3 className="text-2xl">
                    Main Balance = <span>19,999</span>
                  </h3>

                  <h3 className="text-xl text-green-500">
                    Received Balance = <span>999</span>
                  </h3>

                </div>
              </div>
              <div className="flex justify-around  gap-x-1 lg:gap-x-5 mt-2 items-center ">
                {/* Dropdown here */}
                <div className="mt-2">
                  <select
                    className="border border-blue-500 rounded-md  px-2 py-2   lg:py-2 lg:px-16"
                    value={selectedBalance}
                    onChange={handleBalanceChange}
                  >
                    <option value="Select Balance">Select Balance</option>
                    <option value="Robotics Balance">Robotics Balance</option>
                    <option value="Withdraw Balance">Withdraw Balance</option>
                  </select>
                </div>
                <div className="mt-2">
                  <h3 className="text-md text-red-500 border border-red-500 rounded-md py-1 px-3 lg:py-1 lg:px-6">
                    Charge  {getChargePercentage()}
                  </h3>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-2 px-7 py-3">
                  <label className="flex justify-start my-2">{getPlaceholderText()}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md border-blue-500"
                    placeholder={getPlaceholderText()}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="items-center px-6 py-3">
                  <button className="py-2 bg-gradient-2 mb-5 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="mt-2 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Balance;
