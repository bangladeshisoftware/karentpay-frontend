"use client";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import Datepicker from "react-tailwindcss-datepicker";
import ApiRequest from "@/app/_lib/Api_request";
import { format } from "date-fns";
import { toast } from 'react-toastify';



function Wtransactions() {
  const [showModal, setShowModal] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  const [transactions, setTransactions] = useState([]);


  useEffect(() => {
    getWithdrw();
  }, [])

  const getWithdrw = async () => {
    const response = await ApiRequest({
      url: "/withdraw_history",
      method: "get",
    });
    console.log(response);
    if (response?.status === 200) {
      setTransactions(response?.data);
    } else {
      console.log(response);
    }
  }




  const withdrawReq = async (formdata) => {
    const response = await ApiRequest({
      url: "/withdrawal_request",
      formdata: formdata,

    });
    console.log(response);
    if (response?.status === 201) {
      toast.success("Withdraw Request Success");
      getWithdrw();
      closeModal();
    } else {
      console.log(response);
      toast.error(response?.message);
    }
  }




  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search != '' && search.length > 0) {
      getWithdrwSearch();
    }
  }, [search])
  const getWithdrwSearch = async () => {
    const response = await ApiRequest({
      url: "/withdrawal_request_search",
      formdata: { search: search },

    });
    if (response?.status == 200) {
      setTransactions(response?.data);
    } else {
      console.log(response);
    }

  }

  const handleDateRangeChange = async (newValue) => {
    console.log("newValue:", newValue);
    setDateRange(newValue);
    const response = await ApiRequest({
      url: "/withdraw_history_by_date",
      formdata: { startDate: newValue.startDate, endDate: newValue.endDate },
    });
    console.log(response);
    if (response?.status === 200) {
      setTransactions(response?.data);
    } else {
      console.log(response);
    }

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
  const totalItems = transactions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleTransactions = transactions.slice(
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

  const[maindata,setMaindata]=useState([])
  const[data,setData]=useState([])


  useEffect(()=>{
    getPayment();
  },[])
  const getPayment=async()=>{
    const response = await ApiRequest({
      url: "/get_withdraw_type",
      method: "get",
    });
    console.log(response);
    if (response?.status === 200) {
      setMaindata(response?.data);
    } else {
      console.log(response);
    }
  }


  const changeType = (name)=>{
    let filteredData  = maindata.filter((data) =>  data.method === name);
    setData(filteredData)
  }

  return (
    <div className="">
      <div className=" border shadow-lg mb-4 lg:mb-2 p-3 lg:p-3 mt-3 rounded-md text-center lg:text-left lg:hidden  ">
        <h3 className="text-xl font-semibold">Withdraw Transaction</h3>
      </div>
      <div className="px-1 lg:px-0 ">
        <section className="shadow-md border rounded-md ml-0  ">
          <div className="max-w-screen-xl">
            {/* <!-- Start coding here --> */}
            <div className="bg-white dark:bg-gray-800  shadow-md sm:rounded-lg overflow-hidden min-h-[500px]">
              <div className="relative  flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 p-4 ">
                <div className="w-full md:w-full">
                  <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full ">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="grid grid-flow-col w-[100%]">
                        <input
                          value={search}
                          onChange={(e) => {
                            setSearch(e.target.value)
                          }}
                          type="text"
                          id="simple-search"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Search"
                          required=""
                        />

                        <button
                          type="button"
                          className="btn bg-gradient-2 text-white justify-center rounded-md ml-2 mr-2 pr-2 flex items-center"
                          onClick={openModal}
                        >
                          <FaPlus className=" ml-2 mr-2 " />
                          Withdraw
                        </button>
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
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Sl
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Payment Method
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Currency
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Amount
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Withdraw Address
                      </th>

                      <th scope="col" className="px-4 py-3">
                        Trxid
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Date
                      </th>

                    </tr>
                  </thead>
                  <tbody>
                    {visibleTransactions?.map((transaction, index) => (
                      <tr
                        key={index}
                        className="border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {startIndex + index + 1}
                        </th>
                        <td className="px-4 py-3">{transaction.method}</td>
                        <td className="px-4 py-3">
                          {transaction.currency}
                        </td>
                        <td className="px-4 py-3">{transaction.amount}</td>
                        <td className="px-4 py-3">
                          {transaction.number}
                        </td>
                        <td className="px-4 py-3">{transaction.trxID ? transaction.trxID : "None"}</td>
                        <td className="px-4 py-3">{transaction.status ? transaction.status : ''}</td>
                        <td className="px-4 py-3">
                          {/* {transaction?.created_at && format(transaction?.created_at, "dd MMMM yyyy")} */}
                          {formatDateTime(transaction.created_at)}
                        </td>
                        {/* <td className="px-4 py-3 flex items-center justify-end"></td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* showing page number & table */}
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
                className="flex flex-col mt-2 md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-16 py-10 "
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

      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Withdraw Request</h3>
              <button
                className="text-gray-400 hover:text-gray-500"
                onClick={closeModal}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <form action={withdrawReq}>
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Currency Name
                  </label>
                  <select
                    onChange={(e)=>{
                      changeType(e.target.value);
                    }}
                    name="currency"
                    required
                    className="mt-1 block w-full pl-4 py-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value=''>--Select--</option>
                    <option value='BDT'>BDT</option>
                    <option value='USD'>USD</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Network
                  </label>
                  <select
                    name="method"
                    required
                    className="mt-1 block w-full pl-4 py-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value=''>--Select--</option>
                    {data?.map((item,index) => (
                      <option key={index} value={item.network}>{item.network}</option>
                    ))}
                 
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Deposit Address
                  </label>
                  <input
                    name="account"
                    required
                    type="text"
                    className="mt-1 block w-full pl-4 py-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <input
                    type="text"
                    name="amount"
                    required
                    className="mt-1 block w-full pl-4 py-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-around">
                  <button
                    type="submit"
                    className="btn bg-gradient-2 text-white px-36  md:px-48 lg:px-72 py-2 rounded-md">
                    Submit
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Wtransactions;
