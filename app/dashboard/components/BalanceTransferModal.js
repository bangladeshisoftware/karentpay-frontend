import React, { useState } from 'react';

const BalanceTransferModal = ({ isModalOpen, handleCloseModal }) => {
  const [selectedBalance, setSelectedBalance] = useState('Select Balance');
  const [amount, setAmount] = useState('');
  const [charge, setCharge] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);

  const handleBalanceChange = (e) => {
    setSelectedBalance(e.target.value);
    calculateChargeAndReceived(e.target.value, amount);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    calculateChargeAndReceived(selectedBalance, e.target.value);
  };

  const calculateChargeAndReceived = (balanceType, amount) => {
    if (!amount || isNaN(amount)) {
      setCharge(0);
      setReceivedAmount(0);
      return;
    }

    const amountNum = parseFloat(amount);
    let chargePercentage = 0;
    
    if (balanceType === 'Robotics Balance') {
      chargePercentage = 0.07;
    } else if (balanceType === 'Withdraw Balance') {
      chargePercentage = 0.05;
    }

    const calculatedCharge = amountNum * chargePercentage;
    const calculatedReceived = amountNum - calculatedCharge;

    setCharge(calculatedCharge);
    setReceivedAmount(calculatedReceived);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  return (
    isModalOpen && (
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
            <div className="flex justify-around gap-x-1 lg:gap-x-5 mt-2 items-center">
              <div className="mt-2">
                <select
                  className="border border-blue-500 rounded-md px-2 py-2 lg:py-2 lg:px-16"
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
                  Charge: {charge.toFixed(2)}
                </h3>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-2 px-7 py-3">
                <label className="flex justify-start my-2">Enter Amount</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md border-blue-500"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={handleAmountChange}
                  required
                />
              </div>
              <div className="mt-2 px-7 py-3">
                <h3 className="text-xl text-green-500">
                  Received Amount: {receivedAmount.toFixed(2)}
                </h3>
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
    )
  );
};

export default BalanceTransferModal;
