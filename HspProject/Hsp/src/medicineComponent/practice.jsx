import React, { useState } from 'react';

const Dropdown = ({ options, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="text-gray-700 hover:bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center transition duration-150 ease-in-out"
        onClick={toggleDropdown}
      >
        {buttonText}
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.293l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414-1.414L5.293 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute z-50 top-full left-0 w-full bg-white rounded-md shadow-sm py-1 divide-y divide-gray-200"
          onMouseLeave={toggleDropdown}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
