"use client";
import React, { useEffect, useState } from "react";
import desktopLogo from "@/app/_assets/kpay.png";
import Image from "next/image";
import { MdSupportAgent, MdOutlineSendToMobile } from "react-icons/md";
import { FaQuestionCircle, FaPiggyBank } from "react-icons/fa";
import { IoIosGift, IoIosLogIn } from "react-icons/io";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaBarcode } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import bkash from "@/app/_assets/bkash.png";
import nagad from "@/app/_assets/nagad.png";
import upay from "@/app/_assets/Upay.png";
import rocket from "@/app/_assets/rocket.png";
import dbbl from "@/app/_assets/dbbl.jpg";
import asia from "@/app/_assets/bank_asia.png";
import city from "@/app/_assets/city-bank.png";
import islami from "@/app/_assets/islami.png";
import visa from "@/app/_assets/visa.png";
import mastercard from "@/app/_assets/mastercard.png";
import { toast } from 'react-toastify';
import ApiRequest from "@/app/_lib/Api_request";

const Payment = () => {
  const [selected, setSelected] = useState("mobile");
  const [mobilePay, setMobilePay] = useState(0);
  const [amount, setAmount] = useState(0);
  const [mobileStatus, setMobileStatus] = useState({
    bkash: true,
    nagad: true,
    upay: true,
    rocket: true
  });
  const [internetStatus, setInternetStatus] = useState({
    dbbl: true,
    asia: true,
    city: true,
    islami: true
  });
  const [cardStatus, setCardStatus] = useState(true);

  useEffect(() => {
    checkSecret();
  }, []);

  const checkSecret = async () => {
    if (!localStorage.getItem('secret_key')) {
      const response = await ApiRequest({
        url: "/key",
        method: "get",
      });
      if (response?.status === 200) {
        localStorage.setItem('secret_key', response?.data[0].privet_key)
      } else {
        console.log(response);
      }
    }
  }

  const handleToggle = (key, type) => {
    if (type === 'mobile') {
      setMobileStatus(prevState => ({
        ...prevState,
        [key]: !prevState[key]
      }));
    } else if (type === 'internet') {
      setInternetStatus(prevState => ({
        ...prevState,
        [key]: !prevState[key]
      }));
    }
  }

  const handlePayment = async () => {
    if (selected === "mobile") {
      if (mobilePay === '' || mobilePay.id < 1) {
        toast.error('Please select a payment method to continue');
        return;
      }

      // if (!mobileStatus.bkash || !mobileStatus.nagad || !mobileStatus.rocket || !mobileStatus.upay) {
      //   console.log(mobileStatus[mobilePay.key]);
      //   toast.error(`${mobilePay.title} is turned off. Please select an active payment method.`);
      //   return;
      // }

      // if (mobilePay.id !== 1) {
      //   toast.error('Just Bkash Payment Available, Other payments will be available Soon');
      //   return;
      // }

      if (amount < 10) {
        toast.error('Minimum Pay 10Tk');
        return;
      }

      var rf = Math.floor(Math.random() * 1000000000) + 100000;
      const response = await ApiRequest({
        url: '/v1/create_payment',
        formdata: {
          currency: 'BDT',
          amount: amount,
          reference: rf,
          callback_url: process.env.NEXT_PUBLIC_PAYMENT_DOMAIN
        }
      });
      if (response?.status == 201) {
        window.location = response?.data.payment_url;
      } else {
        toast.error(response?.message);
      }
      console.log(response);
    } else {
      toast.error('Just for mobile payment Available');
    }
  }

  const mobileBanks = [
    {
      id: 1,
      title: "Bkash",
      img: bkash,
      key: "bkash"
    },
    {
      id: 2,
      title: "Nagad",
      img: nagad,
      key: "nagad"
    },
    {
      id: 3,
      title: "Upay",
      img: upay,
      key: "upay"
    },
    {
      id: 4,
      title: "rocket",
      img: rocket,
      key: "rocket"
    },
  ];

  const internetBanks = [
    {
      id: 1,
      title: "DBBL",
      img: dbbl,
      key: "dbbl"
    },
    {
      id: 2,
      title: "Bank Asia",
      img: asia,
      key: "asia"
    },
    {
      id: 3,
      title: "City Bank",
      img: city,
      key: "city"
    },
    {
      id: 4,
      title: "Islami Bank",
      img: islami,
      key: "islami"
    },
  ];

  const handleSelect = (section) => {
    setSelected(section);
  };



  const [link, setlink] = useState(null);

  useEffect(() => {
    getPayLink();
  }, []);

  const getPayLink = async () => {
    const response = await ApiRequest({
      url: "/v1/pay_with_link",
      method: "get",
    });
    if (response?.status === 200) {
      setlink(response?.data);
    } else {
      console.log(response);
    }
  }


  const getNewLink=async()=>{
    const response = await ApiRequest({
      url: "/v1/pay_with_link",
    });
    if (response?.status === 200) {
      setlink(response?.data);
    } else {
      console.log(response);
    }
  }


  return (
    <div className="">
      <div className="lg:w-[500px] lg:h-[700px] rounded-md border shadow-md mx-auto px-5 lg:px-0">
        <div className="container flex justify-start gap-10 items-center mt-5 border-b pb-4 border-gray-300">
          <div className="flex justify-start items-center mt-5">
            <Image src={desktopLogo} height={100} width={100} alt="Logo" />
          </div>
          <div className="mt-5">
            <h3 className="text-[44px] text-purple-600 font-bold">KarentPay</h3>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col items-center p-1 cursor-pointer rounded-md transition-transform duration-300 hover:scale-110 text-purple-600 hover:text-purple-700">
                <MdSupportAgent fontSize={15} />
                <p>Support</p>
              </div>
              <div className="flex flex-col items-center p-1 cursor-pointer rounded-md transition-transform duration-300 hover:scale-110 text-purple-600 hover:text-purple-700">
                <FaQuestionCircle fontSize={15} />
                <p>Faq</p>
              </div>
              <div className="flex flex-col items-center p-1 cursor-pointer rounded-md transition-transform duration-300 hover:scale-110 text-purple-600 hover:text-purple-700">
                <IoIosGift fontSize={15} />
                <p>Gift</p>
              </div>
              <div className="flex flex-col items-center p-1 cursor-pointer rounded-md transition-transform duration-300 hover:scale-110 text-purple-600 hover:text-purple-700">
                <IoIosLogIn fontSize={15} />
                <p>Login</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white mt-10">
          <div
            className={`flex flex-col items-center cursor-pointer p-2 ${
              selected === "mobile"
                ? "bg-gradient-to-r from-blue-800 to-purple-950"
                : "bg-transparent"
            }`}
            onClick={() => handleSelect("mobile")}
          >
            <MdOutlineSendToMobile fontSize={24} />
            <h3>Mobile Banking</h3>
          </div>
          <div
            className={`flex h-full flex-col items-center cursor-pointer p-2 ${
              selected === "internet"
                ? "bg-gradient-to-r from-blue-800 to-purple-950"
                : "bg-transparent"
            }`}
            onClick={() => handleSelect("internet")}
          >
            <FaPiggyBank fontSize={24} />
            <h3>Internet Banking</h3>
          </div>
          <div
            className={`flex flex-col items-center cursor-pointer p-2 ${
              selected === "card"
                ? "bg-gradient-to-r from-blue-800 to-purple-950"
                : "bg-transparent"
            }`}
            onClick={() => handleSelect("card")}
          >
            <BsFillCreditCard2FrontFill fontSize={24} />
            <h3>Debit/Credit Card</h3>
          </div>
        </div>

        {selected === "mobile" && (
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-2 md:gap-6 mt-10 ml-4">
              {mobileBanks.map((bank) => (
                <div key={bank.id} className="flex flex-col items-center">
                  <div
                    onClick={() => setMobilePay(bank)}
                    className={`${
                      bank.id === mobilePay.id ? 'border-purple-600 scale-110' : ''
                    } w-full scale-110 lg:scale-100 md:scale-100 lg:w-[100px] md:w-[70px] h-[120px] flex flex-col items-center justify-center border rounded-lg shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer`}
                  >
                    <Image className="h-auto" src={bank.img} height={50} width={80} alt={bank.title} />
                    <h3 className="text-sm font-medium">{bank.title}</h3>
                  </div>
                
                </div>
              ))}
            </div>
            <div className="w-[90%] flex justify-center text-center focus-within:border focus-within:border-blue-500 rounded-sm bg-gray-100 items-center mt-10 ml-6">
              <input
                type="phone"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="outline-none py-2 px-3 ml-0 bg-gray-100 rounded-sm w-full"
              />
            </div>
          </div>
        )}

        {selected === "internet" && (
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-2 md:gap-6 mt-10 ml-4">
              {internetBanks.map((bank) => (
                <div key={bank.id} className="flex flex-col items-center">
                  <div
                    className="w-full scale-110 lg:scale-100 md:scale-100 lg:w-[100px] md:w-[70px] h-[120px] flex flex-col items-center justify-center border rounded-lg shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer"
                  >
                    <Image className="h-auto" src={bank.img} height={50} width={80} alt={bank.title} />
                    <h3 className="text-sm font-medium">{bank.title}</h3>
                  </div>
                
                </div>
              ))}
            </div>
            <div className="w-[90%] flex justify-center text-center focus-within:border focus-within:border-blue-500 rounded-sm bg-gray-100 items-center mt-10 ml-6">
              <input
                type="phone"
                placeholder="Amount"
                value=""
                className="outline-none py-2 px-3 ml-0 bg-gray-100 rounded-sm w-full"
              />
            </div>
          </div>
        )}

        {selected === "card" && (
          <div className="mt-10">
            
            <div className="w-[90%] flex justify-center text-center focus-within:border focus-within:border-blue-500 rounded-sm bg-gray-100 items-center mt-5 ml-6">
              <BsFillCreditCard2FrontFill fontSize={25} className="text-blue-900 ml-2" />
              
              <input
                type="phone"
                placeholder="Card Number"
                value=""
                className="outline-none py-2 px-3 ml-0 bg-gray-100 rounded-sm w-full"
              />
            </div>
            <div className="w-[90%] flex justify-between gap-2 mt-10 text-center mx-auto">
              <div className="w-[60%] flex text-center focus-within:border focus-within:border-blue-500 rounded-sm bg-gray-100 items-center">
                <SlCalender fontSize={30} className="text-black w-10 ml-4" />
                <input
                  type="date"
                  placeholder="Card Number"
                  value=""
                  className="outline-none py-2 px-3 ml-4 rounded-sm w-full mr-6 bg-gray-100"
                />
              </div>
              <div className="w-[50%] flex gap-2 text-center focus-within:border focus-within:border-blue-500 rounded-sm bg-gray-100 items-center">
                <FaBarcode fontSize={40} className="text-black ml-2" />
                <input
                  type="phone"
                  placeholder="CVC/CVV"
                  value=""
                  className="outline-none py-2 px-3 rounded-sm w-full mr-6 bg-gray-100"
                />
              </div>
            </div>
            <div className="w-[90%] flex justify-center text-center focus-within:border focus-within:border-blue-500 rounded-sm bg-gray-100 items-center mt-10 ml-6">
              <ImProfile fontSize={25} className="text-black ml-2" />
              <input
                type="name"
                placeholder="Card Holder"
                value=""
                className="outline-none py-2 px-3 ml-0 bg-gray-100 rounded-sm w-full"
              />
            </div>
          </div>
        )}
        <div className="mt-10 w-full overflow-y-hidden flex flex-col">
          <button
            onClick={() => handlePayment()}
            className="bg-gradient-to-r from-purple-500 to-blue-600 p-3 w-full rounded-sm font-md text-lg text-white"
          >
            Pay {amount}
          </button>
        </div>
        

         <div  className="mt-10 w-full">
           <p className="pl-5 ">{link}</p>
           <br/>
           <button
           onClick={()=>getNewLink()}
            className="bg-gradient-to-r from-purple-500 to-blue-600 p-3 w-full rounded-sm font-md text-lg text-white"> New Link </button>
         </div>
      </div>

      
    </div>
  );
};

export default Payment;
