import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '../Icons';
import DateRangeFilter from './DateRangeFilter';
import StatusFilter from './StatusFilter';
import AmountFilter from './AmountFilter';
import UserFilter from './UserFilter';

const FilterBar = ({ 
  dateFilter, 
  setDateFilter, 
  statusFilter, 
  setStatusFilter, 
  amountFilter, 
  setAmountFilter, 
  ownerFilter, 
  setOwnerFilter, 
  recipientsFilter, 
  setRecipientsFilter 
}) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const filterRef = useRef(null);

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setActiveFilter(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const hasDateFilter = dateFilter?.startDate || dateFilter?.endDate;
  const hasStatusFilter = statusFilter?.length > 0;
  const hasAmountFilter = amountFilter?.from !== null && amountFilter?.from !== undefined;
  const hasOwnerFilter = ownerFilter?.length > 0;
  const hasRecipientsFilter = recipientsFilter?.length > 0;

  const FilterButton = ({ label, isActive, hasFilter, onClick, children }) => (
    <div className="relative">
      <button
        onClick={onClick}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-13 font-graphik-semibold rounded-md transition-colors
          ${hasFilter 
            ? 'bg-brand-primary/10 text-brand-primary' 
            : 'bg-gray-100 text-secondary-dark hover:bg-gray-200'
          }
        `}
      >
        {label}
        <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-180' : ''}`} />
      </button>
      {children}
    </div>
  );

  return (
    <div className="flex items-center gap-[20px] mb-4" ref={filterRef}>
      {/* Date Filter */}
      <FilterButton 
        label="Date" 
        isActive={activeFilter === 'date'}
        hasFilter={hasDateFilter}
        onClick={() => setActiveFilter(activeFilter === 'date' ? null : 'date')}
      >
        <DateRangeFilter 
          isOpen={activeFilter === 'date'}
          onClose={() => setActiveFilter(null)}
          onApply={setDateFilter}
          initialStartDate={dateFilter?.startDate}
          initialEndDate={dateFilter?.endDate}
        />
      </FilterButton>

      {/* Status Filter */}
      <FilterButton 
        label="Status" 
        isActive={activeFilter === 'status'}
        hasFilter={hasStatusFilter}
        onClick={() => setActiveFilter(activeFilter === 'status' ? null : 'status')}
      >
        <StatusFilter 
          isOpen={activeFilter === 'status'}
          onClose={() => setActiveFilter(null)}
          onApply={setStatusFilter}
          selectedStatuses={statusFilter || []}
        />
      </FilterButton>

      {/* Amount Filter */}
      <FilterButton 
        label="Amount" 
        isActive={activeFilter === 'amount'}
        hasFilter={hasAmountFilter}
        onClick={() => setActiveFilter(activeFilter === 'amount' ? null : 'amount')}
      >
        <AmountFilter 
          isOpen={activeFilter === 'amount'}
          onClose={() => setActiveFilter(null)}
          onApply={setAmountFilter}
          initialFilter={amountFilter}
        />
      </FilterButton>

      {/* Owner Filter */}
      <FilterButton 
        label="Owner" 
        isActive={activeFilter === 'owner'}
        hasFilter={hasOwnerFilter}
        onClick={() => setActiveFilter(activeFilter === 'owner' ? null : 'owner')}
      >
        <UserFilter 
          isOpen={activeFilter === 'owner'}
          onClose={() => setActiveFilter(null)}
          onApply={setOwnerFilter}
          selectedUsers={ownerFilter || []}
          title="Owner"
        />
      </FilterButton>

      {/* Recipients Filter */}
      <FilterButton 
        label="Recipients" 
        isActive={activeFilter === 'recipients'}
        hasFilter={hasRecipientsFilter}
        onClick={() => setActiveFilter(activeFilter === 'recipients' ? null : 'recipients')}
      >
        <UserFilter 
          isOpen={activeFilter === 'recipients'}
          onClose={() => setActiveFilter(null)}
          onApply={setRecipientsFilter}
          selectedUsers={recipientsFilter || []}
          title="Recipients"
        />
      </FilterButton>

      {/* More Button */}
      <button className="flex items-center gap-1.5 px-3 py-1.5 text-13 font-graphik-semibold bg-gray-100 text-secondary-dark rounded-md hover:bg-gray-200 transition-colors">
        More
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

export default FilterBar;
