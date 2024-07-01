'use client';
import React, { useEffect, useState } from 'react';
import Balance from '@/app/dashboard/components/Balance';
import Home from '@/app/dashboard/components/Home';
import Product_Catalog from '@/app/dashboard/components/Settings';
import Transactions from '@/app/dashboard/components/Transactions';
import Header from '@/app/dashboard/components/Header';
import { FiHome } from 'react-icons/fi';
import { AiOutlineDollar } from 'react-icons/ai';
import { GrTransaction } from 'react-icons/gr';
import { CiUser } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { SiConstruct3 } from 'react-icons/si';
import { TbSquareLetterW } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlinePayment } from 'react-icons/md';
import { FaHandsHelping } from 'react-icons/fa';
import { PiHandWithdrawFill } from "react-icons/pi";
import { FaRegFileWord } from "react-icons/fa6";

import {  toast } from 'react-toastify';

import ApiRequest from '@/app/_lib/Api_request';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable';
import Developer from './components/Developer';
import Wtransactions from '@/app/dashboard/components/Wtransactions';
import Payment from '@/app/dashboard/components/payment';
import Support from '@/app/dashboard/components/Support';
import PaymentCopy from './components/PaymentCopy';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isOn, setIsOn] = useState(true);
  const [windowWidth, setWindowWidth] = useState(1024); // Default to 1024, update after mounting

  // ali hasan code 
  const [checkedState, setCheckedState] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(true); 
  const array = []
  // ali hasan code 
  const containerType = [
    {
      id: 1,
      type: 'container-dashboard',
      minSize: 15
    },
    {
      id: 2,
      type: 'container-1',
      minSize: 20
    },
    {
      id: 3,
      type: 'container-2',
      minSize: 20
    },
    {
      id: 4,
      type: 'container-3',
      minSize: 20
    },
    {
      id: 5,
      type: 'container-4',
      minSize: 40
    },
    {
      id: 6,
      type: 'container-5',
      minSize: 50
    },
    {
      id: 7,
      type: 'container-6'
    },
    {
      id: 8,
      type: 'container-7'
    },
    {
      id: 9,
      type: 'container-8'
    },
    {
      id: 10,
      type: 'container-9'
    }
  ];

  const selectedContainer =
    windowWidth < 1024 ? containerType[0] : containerType[3];

    const toggleSwitch = () => {
   
      if (!isOn) {
        setIsOn(true);
      }else{
        setIsOn(false);
       // getTestKey();
      }
     
    };

  const getTestKey = async () => {
    const response = await ApiRequest({
      url: "/marchentuser/check_live",
      method: "get",
    });   
    if (response.status === 200) {
      setIsOn(false);
    } else {
      toast.error(response.message);
    }
  };


  const renderComponent = () => {
    switch (activeComponent) {
      case 'balance':
        return <Balance />;
      case 'transactions':
        return <Transactions />;
      case 'wtransactions':
        return <Wtransactions />;
      case 'payments':
        // return <Payment />;
        return <PaymentCopy/>;    const handleCheckboxChange = (position) => {
          const updatedCheckedState = checkedState.map((item, index) =>
              index === position ? !item : item
          );
  
          setCheckedState(updatedCheckedState);
          setIsAllChecked(updatedCheckedState.every((item) => item));
      };
  
      const handleSelectAllChange = () => {
          const newState = !isAllChecked;
          setCheckedState(new Array(array.length).fill(newState));
          setIsAllChecked(newState);
      };
  
      case 'developer':
        return <Developer isTest={isOn} />;
      case 'support':
        return <Support />;
      case 'productCatalog':
        return <Product_Catalog />;
      default:
        return <Home />;
    }
  };

  const getMinSize = () => {
    const container = containerType.find(
      (c) => c.type === selectedContainer.type
    );
    return container ? container.minSize : 10;
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth); // Set initial width on mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`${selectedContainer.type} flex h-screen mx-auto `}>
      <ResizablePanelGroup direction='horizontal'>
        {windowWidth >= 1024 && (
          <ResizablePanel defaultSize={15} minSize={getMinSize()}>
            <div
              className={`bg-gradient-to-b from-blue-600 to-purple-400 text-white rounded-md`}
            >
              <aside
                className={`py-5 px-4 mt-10 ${
                  windowWidth < 1024 ? 'hidden' : 'block'
                }`}
              >
                <ul>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === 'home'
                        ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                        : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                    }`}
                    onClick={() => setActiveComponent('home')}
                  >
                    <FiHome className='mr-2 text-2xl' />
                    {windowWidth >= 1024 && 'Dashboard'}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === 'balance'
                        ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                        : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                    }`}
                    onClick={() => setActiveComponent('balance')}
                  >
                    <AiOutlineDollar className='mr-2 text-2xl' />{' '}
                    {windowWidth >= 1024 && 'Balance'}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === 'transactions'
                        ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                        : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                    }`}
                    onClick={() => setActiveComponent('transactions')}
                  >
                    <PiHandWithdrawFill className='mr-2 text-2xl' />{' '}
                    {windowWidth >= 1024 && 'Transactions'}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === 'wtransactions'
                        ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                        : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                    }`}
                    onClick={() => setActiveComponent('wtransactions')}
                  >
                    <FaRegFileWord className='mr-2 text-2xl' />
                    {windowWidth >= 1024 && 'W Transactions'}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === 'payments'
                        ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                        : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                    }`}
                    onClick={() => setActiveComponent('payments')}
                  >
                    <MdOutlinePayment className='mr-2 text-2xl' />{' '}
                    {windowWidth >= 1024 && 'Payments'}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === 'developer'
                        ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                        : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                    }`}
                    onClick={() => setActiveComponent('developer')}
                  >
                    <FaRegUser className='mr-2 text-2xl' />
                    {windowWidth >= 1024 && 'Developer'}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === 'support'
                        ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                        : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                    }`}
                    onClick={() => setActiveComponent('support')}
                  >
                    <FaHandsHelping className='mr-2 text-2xl' />{' '}
                    {windowWidth >= 1024 && 'Support'}
                  </li>
                  <li
                    className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                      activeComponent === 'productCatalog'
                        ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                        : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                    }`}
                    onClick={() => setActiveComponent('productCatalog')}
                  >
                    <IoSettingsOutline className='mr-2 text-2xl' />{' '}
                    {windowWidth >= 1024 && 'Settings'}
                  </li>
                </ul>
              </aside>
            </div>
          </ResizablePanel>
        )}
        <ResizableHandle />
        {/* Navbar for small and medium devices */}
        <nav className='lg:hidden    inset-x-0 fixed bottom-0 left-0 w-full border border-blue-500  bg-black bg-opacity-70 text-blue-200 flex justify-between px-4 py-4 z-50'>
          <FiHome
            className='text-2xl cursor-pointer'
            onClick={() => setActiveComponent('home')}
          />
          <AiOutlineDollar
            className='text-2xl cursor-pointer'
            onClick={() => setActiveComponent('balance')}
          />
          <PiHandWithdrawFill
            className='text-2xl cursor-pointer'
            onClick={() => setActiveComponent('transactions')}
          />
          <FaRegFileWord
            className='text-2xl cursor-pointer'
            onClick={() => setActiveComponent('wtransactions')}
          />
          <MdOutlinePayment
            className='text-2xl cursor-pointer'
            onClick={() => setActiveComponent('payments')}
          />
          <FaRegUser
            className='text-2xl cursor-pointer'
            onClick={() => setActiveComponent('developer')}
          />
          <FaHandsHelping
            className='text-2xl cursor-pointer'
            onClick={() => setActiveComponent('support')}
          />
          <IoSettingsOutline
            className='text-2xl cursor-pointer'
            onClick={() => setActiveComponent('productCatalog')}
          />
        </nav>
        <ResizablePanel defaultSize={85} minSize={40}>
          <div className='flex-1 p-0 overflow-y-auto scrollbar-hide '>
            {activeComponent === 'developer' && (
              <Header isOn={isOn} toggleSwitch={toggleSwitch} />
            )}
            <main className='h-screen '>{renderComponent()}</main>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Dashboard;
