import React, { useState } from 'react';

const statusOptions = [
  { id: 'draft', label: 'Draft', color: '#9CA3AF' },
  { id: 'for-approval', label: 'For approval', color: '#F97316' },
  { id: 'sent', label: 'Sent', color: '#3B82F6' },
  { id: 'viewed', label: 'Viewed', color: '#8B5CF6' },
  { id: 'suggest-edits', label: 'Suggest edits', color: '#06B6D4' },
  { id: 'completed', label: 'Completed', color: '#22C55E' },
  { id: 'expired', label: 'Expired', color: '#EF4444' },
  { id: 'awaiting-approval', label: 'Awaiting approval', color: '#F97316' },
  { id: 'rejected', label: 'Rejected', color: '#EF4444' },
];

const StatusFilter = ({ isOpen, onClose, onApply, selectedStatuses = [] }) => {
  const [selected, setSelected] = useState(new Set(selectedStatuses));

  const toggleStatus = (statusId) => {
    setSelected(prev => {
      const newSet = new Set(prev);
      if (newSet.has(statusId)) {
        newSet.delete(statusId);
      } else {
        newSet.add(statusId);
      }
      return newSet;
    });
  };

  const toggleSelectAll = () => {
    if (selected.size === statusOptions.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(statusOptions.map(s => s.id)));
    }
  };

  const handleApply = () => {
    onApply(Array.from(selected));
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 w-56">
      <div className="p-3">
        {/* Select All */}
        <label className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded px-2 -mx-2">
          <input
            type="checkbox"
            checked={selected.size === statusOptions.length}
            onChange={toggleSelectAll}
            className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
          />
          <span className="text-13 font-graphik-regular text-secondary-dark">Select all</span>
        </label>

        <div className="border-t border-gray-100 my-2"></div>

        {/* Status Options */}
        {statusOptions.map(status => (
          <label 
            key={status.id} 
            className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded px-2 -mx-2"
          >
            <input
              type="checkbox"
              checked={selected.has(status.id)}
              onChange={() => toggleStatus(status.id)}
              className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
            />
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: status.color }}
              ></div>
              <span className="text-13 font-graphik-regular text-secondary-dark">{status.label}</span>
            </div>
          </label>
        ))}
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

export default StatusFilter;
