import React, { useState, useEffect } from "react";
import { MdUploadFile } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Link from "next/link";
import moment from "moment";
//  import time formate package

moment().format();

function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [Image, setImage] = useState("");
  const [url, seturl] = useState("/admin/tickets/user?page=1&per_page=7");
  const [tecket, settecket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("auth_token");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_DATA_API}/admin/tickets/user?page=1&per_page=7`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        settecket(response.data);
      } catch (error) { }
    };

    fetchData();
  }, [url]);

  console.log(tecket);

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateRangeChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateRange(newValue);
  };

  const transactions = [
    {
      id: 1,

      currencyName: "USD",
      network: "Bank Transfer",
      depositAddress: "N/A",
      trxid: "TRX123456",
      debit: 1000,
      date: "2024-02-01",
      status: "Edit",
    },
    {
      id: 2,

      currencyName: "USD",
      network: "Bank Transfer",
      depositAddress: "N/A",
      trxid: "TRX123456",
      debit: 1000,
      date: "2024-03-01",
      status: "Edit",
    },
    {
      id: 3,

      currencyName: "USD",
      network: "Bank Transfer",
      depositAddress: "N/A",
      trxid: "TRX123456",
      debit: 1000,
      date: "2024-04-01",
      status: "Edit",
    },
    {
      id: 4,

      currencyName: "USD",
      network: "Bank Transfer",
      depositAddress: "N/A",
      trxid: "TRX123456",
      debit: 1000,
      date: "2024-05-01",
      status: "Edit",
    },
    {
      id: 5,

      currencyName: "USD",
      network: "Bank Transfer",
      depositAddress: "N/A",
      trxid: "TRX123456",
      debit: 1000,
      date: "2024-06-01",
      status: "Edit",
    },
    {
      id: 6,

      currencyName: "USD",
      network: "Bank Transfer",
      depositAddress: "N/A",
      trxid: "TRX123456",
      debit: 1000,
      date: "2024-07-01",
      status: "Edit",
    },
    // Add more transaction objects here as needed
  ];

  // Filter transactions based on the selected date range
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const startDateObj = dateRange.startDate
      ? new Date(dateRange.startDate)
      : null;
    const endDateObj = dateRange.endDate ? new Date(dateRange.endDate) : null;

    return (
      (!startDateObj || transactionDate >= startDateObj) &&
      (!endDateObj || transactionDate <= endDateObj)
    );
  });

  const handleCreateTicket = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", 488);
    formData.append("date", " 2024-06-26");
    formData.append("time", " 22:00");
    formData.append("track_id", 4346);
    formData.append("type", "Payment Gateway");
    formData.append("status", "open");

    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("image", Image);

    const token = Cookies.get("auth_token");

    axios
      .post(process.env.NEXT_PUBLIC_DATA_API + "/admin/tickets", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        toast.success("Tecket Added Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.success("Failed to Add Tecket");
      });

    console.log("Subject:", subject);
    console.log("Message:", message);
    console.log("images:", Image);
    console.log("token:", token);
    setIsModalOpen(false);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("user_id", Math.random().toString());
  //   formData.append("date", Date.now().toString());
  //   formData.append("time", new Date().toLocaleTimeString());
  //   formData.append("track_id", Math.random().toString());
  //   formData.append("type", "test");
  //   formData.append("status", "open");

  //   formData.append("subject", subject);
  //   formData.append("message", message);
  //   formData.append("image", Image);

  //   const token = Cookies.get("auth_token");

  //   try {
  //     const response = await fetch("http://karentpay-api.test/api/admin/tickets", {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       },
  //       body: formData,
  //       credentials: 'include',
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok ' + response.statusText);
  //     }

  //     const data = await response.json();
  //     console.log("Response:", data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }

  //   console.log("Subject:", subject);
  //   console.log("Message:", message);
  //   console.log("images:", Image);
  //   console.log("token:", token);
  //   setIsModalOpen(false);
  // };
  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalItems = filteredTransactions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleTransactions = filteredTransactions.slice(
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
    <div className="mt-4 lg:mt-10 ml-0 lg:ml-8">
      <div className=" border shadow-lg mb-4 lg:mb-2 p-3 lg:p-3 mt-3 rounded-md text-center lg:text-left lg:hidden  ">
        <h3 className="text-xl font-semibold">Support</h3>
      </div>

      {/* <div className="grid lg:grid-cols-3 grid-cols-1 px-1 lg:px-0 justify-around gap-2 pb-5">

        <div className="border shadow-lg rounded-md w-full flex items-center transition-all duration-300 hover:shadow-lg bg-white py-4">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">All Ticket</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">0</h2>
            </div>
            <div>
              <p>Work in progress</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <GiTicket className="text-red-500 text-opacity-80" />
          </div>
        </div>

        <div className="border shadow-lg rounded-md w-full flex items-center transition-all duration-300 hover:shadow-lg bg-white py-4">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Open Ticket</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">0</h2>
            </div>
            <div>
              <p>Work in progress</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <MdOutlineAirplaneTicket className="text-green-700 text-opacity-80" />
          </div>
        </div>

        <div className="border shadow-lg rounded-md w-full flex items-center transition-all duration-300 hover:shadow-lg bg-white py-4">
          <div className="flex-grow ml-8">
            <div>
              <p className="font-bold">Closed Ticket</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold my-2">0</h2>
            </div>
             <div>
              <p>Work in progress</p>
            </div>
          </div>
          <div className="mr-8 text-5xl text-black p-3 ">
            <MdAirplaneTicket className="text-blue-700 text-opacity-80" />
          </div>
        </div>
      </div> */}

      <div className=" lg:px-0 ">
        <section className="shadow-md border rounded-md   mb-36 ">
          <div className="max-w-screen-xl">
            {/* <!-- Start coding here --> */}
            <div className="bg-white dark:bg-gray-800  shadow-md sm:rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 p-4 ">
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
                          type="text"
                          id="simple-search"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Search"
                          required=""
                        />
                        <button className="btn bg-gradient-2 text-gray-200 px-14 rounded-md ml-2">
                          Search
                        </button>
                        <button
                          type="button"
                          className="btn bg-gradient-2 text-white justify-center rounded-md ml-2 mr-2 pr-2 flex items-center px-4"
                          onClick={handleCreateTicket}
                        >
                          {/* <FaPlus className=" ml-2 mr-2 " /> */}
                          Create
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

              {/* <div className="overflow-x-auto h-96">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Sl
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Ticket ID
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Date
                      </th>

                      <th scope="col" className="px-4 py-3">
                        Subject
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3 flex-1">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tecket?.data?.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b dark:border-gray-700 "
                      >
                        <td className="pl-5">
                          {item?.id}</td>
                        <td className="pl-5">
                          {item?.track_id}</td>
                        <td>
                          {item?.date}</td>
                        <td className="pl-5">
                          {item?.subject}</td>
                        <td className="pl-5">
                          {item?.status}</td>
                        <td className="flex-1">
                          <button className="p-1 px-2 rounded-[4px] bg-blue-500 text-white  my-2">
                          <FaEye/>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}

              <div className="overflow-x-auto mt-2">
                <table className="w-full text-size text-left text-black dark:text-white">
                  <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Sl
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Ticket ID
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Date
                      </th>

                      <th scope="col" className="px-4 py-3">
                        Subject
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3 flex-1">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tecket?.data?.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="px-4 py-2 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-4 py-2 ">
                          <h2 className="flex items-center">{item?.track_id}</h2>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <h2>
                            {item.date
                              ? moment(item.date).format("Do MMM YYYY")
                              : "--"}
                          </h2>
                          <h2 className="opacity-80">
                            {item.time
                              ? moment(item.date).format("h:mm a")
                              : "--"}
                          </h2>
                        </td>
                        <td className="px-4 py-2 ">
                          <h2 className="flex items-center">{item?.subject}</h2>
                        </td>
                        <td className="px-4 py-2 ">
                          <h2 className="flex items-center">{item?.status}</h2>
                        </td>
                        <td className="px-4 py-2 ">
                          <div className="flex items-center gap-2">
                            <Link href='/kdjgkdl'
                              className=" text-xl w-fit text-white bg-blue-500 hover:bg-blue-800 rounded-[4px]  p-2 dark:bg-blue-600 dark:hover:bg-blue-500 flex items-center gap-1">
                              <FaEye />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
              <nav
                className="flex flex-col mt-2 md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-16 "
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
          <div className="relative top-40 mx-auto my-auto p-5 border sm:w-[550px] sm:h-[520px] md:w-[600px] md:h-[520px] lg:w-[600px] lg:h-[520px] shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Create Ticket
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mt-2 px-7 py-3">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <textarea
                    rows="5"
                    className="w-full p-2 mt-3 border rounded-md"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="w-full border rounded-md p-2 mt-3 flex items-center bg-gradient-2">
                    <MdUploadFile fontSize={30} className="text-white" />
                    <input
                      onChange={(e) => setImage(e.target.files[0])}
                      className="w-full bg-transparent text-white file:bg-transparent file:border-0 file:text-white file:font-semibold file:cursor-pointer"
                      type="file"
                      required
                    />
                  </div>
                </div>
                <div className="items-center px-6 py-3">
                  <button className=" py-2 bg-gradient-2 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="mt-2  py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
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

export default Support;
