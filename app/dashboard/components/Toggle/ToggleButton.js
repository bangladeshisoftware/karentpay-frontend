// ToggleButton.js
import React, { useState } from 'react';

const ToggleButton = ({ optionName }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center justify-between py-2 px-4 bg-gray-100 rounded-md mb-2">
      <span>{optionName}</span>
      <button
        onClick={handleToggle}
        className={`py-1 px-3 rounded-full transition-colors duration-200 ${
          isActive ? 'bg-green-500 text-white' : 'bg-gray-300'
        }`}
      >
        {isActive ? 'Active' : 'Inactive'}
      </button>
    </div>
  );
};

export default ToggleButton;
