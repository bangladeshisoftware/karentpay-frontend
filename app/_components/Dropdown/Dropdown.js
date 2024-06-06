import { useState } from "react";
import Link from "next/link";

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onClick={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <button className="rounded p-1 hover:text-white hover:bg-blue-800">
        {label}
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white text-black rounded-lg shadow-lg z-50 transition duration-300 ease-in-out transform origin-top-right scale-95 ">
          {items.map((item, index) => (
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href={item.href}
              key={index}
              className="block px-4 py-2 hover:bg-gray-200 hover: hover:scale-105 hover:rotate-x-15 hover:rotate-y-15 border-b text-base transition-colors duration-200 ease-in-out first:rounded-t-lg last:rounded-b-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
