'use client';
import React, { useState } from 'react';
import Balance from '@/app/dashboard/components/Balance';
import Developer from '@/app/dashboard/components/Developer';
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

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable';
import Developer2 from './components/Developer2';
import Wtransactions from '@/app/dashboard/components/Wtransactions';
import Payment from '@/app/dashboard/components/payment';
import Support from '@/app/dashboard/components/Support';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isOn, setIsOn] = useState(true);

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

  const selectedContainer = containerType[3];

  const toggleSwitch = () => {
    setIsOn(!isOn);
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
        return <Payment />;
      case 'developer':
        return <Developer2 isTest={isOn} />;
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

  return (
    <div className={`${selectedContainer.type} flex h-screen mx-auto`}>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={15} minSize={getMinSize()}>
          <div
            className={`bg-gradient-to-b from-blue-600 to-purple-400 text-white rounded-md`}
          >
            <aside className='py-5 px-4 mt-10'>
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
                  Dashboard
                </li>
                <li
                  className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                    activeComponent === 'balance'
                      ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                      : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                  }`}
                  onClick={() => setActiveComponent('balance')}
                >
                  <AiOutlineDollar className='mr-2 text-2xl' /> Balance
                </li>
                <li
                  className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                    activeComponent === 'transactions'
                      ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                      : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                  }`}
                  onClick={() => setActiveComponent('transactions')}
                >
                  <SiConstruct3 className='mr-2 text-2xl' /> Transactions
                </li>
                <li
                  className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                    activeComponent === 'wtransactions'
                      ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                      : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                  }`}
                  onClick={() => setActiveComponent('wtransactions')}
                >
                  <TbSquareLetterW className='mr-2 text-2xl' /> W Transactions
                </li>
                <li
                  className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                    activeComponent === 'payments'
                      ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                      : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                  }`}
                  onClick={() => setActiveComponent('payments')}
                >
                  <MdOutlinePayment className='mr-2 text-2xl' /> Payments
                </li>
                <li
                  className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                    activeComponent === 'developer'
                      ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                      : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                  }`}
                  onClick={() => setActiveComponent('developer')}
                >
                  <FaRegUser className='mr-2 text-2xl' /> Developer
                </li>
                <li
                  className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                    activeComponent === 'support'
                      ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                      : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                  }`}
                  onClick={() => setActiveComponent('support')}
                >
                  <FaHandsHelping className='mr-2 text-2xl' /> Support
                </li>
                <li
                  className={`mb-4 cursor-pointer flex items-center p-2 rounded-md transition-all duration-300 ${
                    activeComponent === 'productCatalog'
                      ? 'bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                      : 'hover:bg-gradient-to-r from-blue-800 to-purple-950 text-gray-200'
                  }`}
                  onClick={() => setActiveComponent('productCatalog')}
                >
                  <IoSettingsOutline className='mr-2 text-2xl' /> Settings
                </li>
              </ul>
            </aside>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={85} minSize={40}>
          <div className='flex-1 p-0 overflow-auto'>
            {activeComponent === 'developer' && (
              <Header isOn={isOn} toggleSwitch={toggleSwitch} />
            )}
            <main>{renderComponent()}</main>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default Dashboard;
