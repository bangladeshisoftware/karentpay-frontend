import React, { useState } from "react";
import { MdUploadFile } from "react-icons/md";
function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust this value as needed

  const tickets = [
    { name: "Apple MacBook Pro 17", date: "10", price: "$2999" },
    { name: "Microsoft Surface Pro", date: "White", price: "$1999" },
    { name: "Magic Mouse 2", date: "Black", price: "$99" },
    { name: "Dell XPS 15", date: "10", price: "$1999" },
    { name: "HP Spectre x360", date: "Silver", price: "$1499" },
    { name: "Lenovo ThinkPad X1", date: "Black", price: "$1899" },
    { name: "Razer Blade 15", date: "Green", price: "$2099" },
    { name: "Asus ZenBook 13", date: "Blue", price: "$1299" },
    { name: "Acer Swift 3", date: "Gray", price: "$999" },
    { name: "Apple iPad Pro", date: "Silver", price: "$799" },
  ];

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

  const totalPages = Math.ceil(tickets.length / itemsPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTickets = tickets.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mt-10 ml-8">
      <div className="grid grid-cols-3 justify-around gap-4 pb-5">
        <div className="border rounded-md shadow px-20 py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl bg-[#FFFF] rounded-full text-black p-3"></div>
          <div>
            <div>
              <h2 className="text-xl font-bold">200</h2>
            </div>
            <div>
              <p>Total Ticket</p>
            </div>
          </div>
        </div>
        <div className="border rounded-md shadow px-20 py-8 bg-gradient-to-r from-green-300 to-teal-400 text-white flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl bg-[#FFFF] rounded-full text-black p-3"></div>
          <div>
            <div>
              <h2 className="text-xl font-bold">75</h2>
            </div>
            <div>
              <p>Booked Ticket</p>
            </div>
          </div>
        </div>
        <div className="border rounded-md shadow px-20 py-8 bg-gradient-to-r from-pink-300 to-orange-400 text-white flex items-center transition-all duration-300 hover:shadow-lg">
          <div className="mr-3 text-2xl bg-[#FFFF] rounded-full text-black p-3"></div>
          <div>
            <div>
              <h2 className="text-xl font-bold">125</h2>
            </div>
            <div>
              <p>Available Ticket</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md border sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 w-full">
            <div className="flex justify-between ">
              <p>Our Tickets</p>
              <button
                onClick={handleCreateTicket}
                className="bg-black px-3 rounded-md"
              >
                <span className="text-center text-white">Create</span>
              </button>
            </div>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ticket Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTickets.map((ticket, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {ticket.name}
                </th>
                <td className="px-6 py-4">{ticket.date}</td>
                <td className="px-6 py-4">{ticket.price}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="px-6 py-3 text-right">
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <button
                      onClick={() => handleChangePage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleChangePage(index + 1)}
                        className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${
                          currentPage === index + 1
                            ? "text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => handleChangePage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-40 mx-auto p-5 border w-[600px] h-[520px] shadow-lg rounded-md bg-white">
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
                    className="w-full mt-4 px-4 py-16 border rounded-md"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="w-full border rounded-md p-2 mt-3 flex items-center bg-gradient-to-r from-purple-500 to-blue-600">
                    <MdUploadFile fontSize={30} className="text-white" />
                    <input
                      className="w-full bg-transparent text-white file:bg-transparent file:border-0 file:text-white file:font-semibold file:cursor-pointer"
                      type="file"
                      required
                    />
                  </div>
                </div>
                <div className="items-center px-6 py-3">
                  <button className=" py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
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
