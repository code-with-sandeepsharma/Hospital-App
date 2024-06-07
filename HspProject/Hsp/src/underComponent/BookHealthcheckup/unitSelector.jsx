// src/components/UnitSelector.jsx
import React from 'react';

const UnitSelector = ({ units = [], selectedUnit, onUnitSelect }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Select Unit</h2>
      <div className="grid grid-cols-1 gap-2">
        {units.map(unit => (
          <button
            key={unit}
            className={`py-2 px-4 border rounded transition-colors ${selectedUnit === unit ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 hover:bg-gray-200'}`}
            onClick={() => onUnitSelect(unit)}
          >
            {unit}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnitSelector;
