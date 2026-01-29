import React, { useState } from 'react';

const AmountFilter = ({ isOpen, onClose, onApply, initialFilter = null }) => {
  const [filterType, setFilterType] = useState(initialFilter?.type || 'between');
  const [fromValue, setFromValue] = useState(initialFilter?.from || '');
  const [toValue, setToValue] = useState(initialFilter?.to || '');

  const handleApply = () => {
    onApply({
      type: filterType,
      from: fromValue ? parseFloat(fromValue) : null,
      to: toValue ? parseFloat(toValue) : null,
    });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleClearAll = () => {
    setFilterType('between');
    setFromValue('');
    setToValue('');
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 w-64">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-13 font-graphik-semibold text-secondary-dark">Filter by</span>
          <button 
            onClick={handleClearAll}
            className="text-13 font-graphik-regular text-brand-primary hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Filter Type Radio Buttons */}
        <div className="space-y-3 mb-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="filterType"
              checked={filterType === 'between'}
              onChange={() => setFilterType('between')}
              className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
            />
            <span className="text-13 font-graphik-regular text-secondary-dark">Between</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="filterType"
              checked={filterType === 'greater'}
              onChange={() => setFilterType('greater')}
              className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
            />
            <span className="text-13 font-graphik-regular text-secondary-dark">Greater than</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="filterType"
              checked={filterType === 'less'}
              onChange={() => setFilterType('less')}
              className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
            />
            <span className="text-13 font-graphik-regular text-secondary-dark">Less than</span>
          </label>
        </div>

        {/* Value Inputs */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-11 font-graphik-regular text-secondary-light uppercase mb-1">
              {filterType === 'less' ? 'VALUE' : 'FROM'}
            </label>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              placeholder="0"
              className="w-full px-3 py-2 text-13 font-graphik-regular border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>
          {filterType === 'between' && (
            <div className="flex-1">
              <label className="block text-11 font-graphik-regular text-secondary-light uppercase mb-1">TO</label>
              <input
                type="number"
                value={toValue}
                onChange={(e) => setToValue(e.target.value)}
                placeholder="0"
                className="w-full px-3 py-2 text-13 font-graphik-regular border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <button
          onClick={handleCancel}
          className="px-4 py-2 text-13 font-graphik-regular text-secondary-dark hover:bg-gray-100 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleApply}
          className="px-4 py-2 text-13 font-graphik-semibold text-white bg-brand-primary rounded hover:bg-opacity-90"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default AmountFilter;
