'use client';
import React, { useState } from 'react';
import Header from '../../components/Header'; // Assuming you have this component
import Developer from '../../developer/page';

export default function DeveloperPage() {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <div>
      <Developer isTest={isOn} />
    </div>
  );
}
