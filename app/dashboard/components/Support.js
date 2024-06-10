import React, { useState } from "react";

function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateTicket = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    // Handle the ticket submission logic here
    console.log("Subject:", subject);
    console.log("Message:", message);
    // Close the modal after submission
    setIsModalOpen(false);
  };

  return (
    <div className="mt-10 container">
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 w-full">
            <div className="flex justify-between mx-4">
              <p>Our Tickets</p>
              <button
                onClick={handleCreateTicket}
                className="bg-black px-3 rounded-md"
              >
                <span className="text-center text-white">Create</span>
              </button>
            </div>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Browse a list of Flowbite products designed to help you work and
              play, stay organized, get answers, keep in touch, grow your
              business, and more.
            </p>
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">10</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-40 mx-auto p-5 border w-[600px] h-[500px] shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Create Ticket
              </h3>
              <div className="mt-2 px-7 py-3">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="w-full mt-4 px-4 py-16 border rounded-md"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Submit
                </button>
                <button
                  onClick={handleCloseModal}
                  className="mt-2 px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Support;
