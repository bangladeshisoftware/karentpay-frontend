'use client';
import React, { useState } from 'react';
import Developer from '../../components/Developer';
import Header from '../../components/Header'; // Assuming you have this component

export default function DeveloperPage() {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <div>
      <Header isOn={isOn} toggleSwitch={toggleSwitch} />
      <Developer isTest={isOn} />
    </div>
  );
}
