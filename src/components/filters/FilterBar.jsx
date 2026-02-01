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
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [visibleFilters, setVisibleFilters] = useState(['date', 'status', 'owner', 'recipients', 'amount']);
  const [selectedNewFilters, setSelectedNewFilters] = useState([]);
  const [filterSearch, setFilterSearch] = useState('');
  const [showRenewalDateCustom, setShowRenewalDateCustom] = useState(false);
  const filterRef = useRef(null);
  const moreButtonRef = useRef(null);

  // Additional filters that can be added via "More +"
  const additionalFilters = [
    { id: 'auto-renew', label: 'Auto Renew' },
    { id: 'document-type', label: 'Document Type' },
    { id: 'duration', label: 'Duration (term)' },
    { id: 'renewal-date', label: 'Renewal Date' },
  ];

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setActiveFilter(null);
        setShowMoreDropdown(false);
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

  const toggleNewFilter = (filterId) => {
    if (selectedNewFilters.includes(filterId)) {
      setSelectedNewFilters(selectedNewFilters.filter(f => f !== filterId));
    } else {
      setSelectedNewFilters([...selectedNewFilters, filterId]);
    }
  };

  const handleAddFilters = () => {
    setVisibleFilters([...visibleFilters, ...selectedNewFilters]);
    setSelectedNewFilters([]);
    setFilterSearch('');
    setShowMoreDropdown(false);
  };

  const handleCancelMore = () => {
    setSelectedNewFilters([]);
    setFilterSearch('');
    setShowMoreDropdown(false);
  };

  const removeFilter = (filterId) => {
    setVisibleFilters(visibleFilters.filter(f => f !== filterId));
  };

  // Get filters that aren't yet visible
  const availableFilters = additionalFilters.filter(f => !visibleFilters.includes(f.id));
  
  // Filter by search
  const filteredAvailableFilters = availableFilters.filter(f => 
    f.label.toLowerCase().includes(filterSearch.toLowerCase())
  );

  const FilterButton = ({ label, isActive, hasFilter, onClick, onRemove, removable = false, children }) => (
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
    <div className="flex items-center gap-[20px] mb-4 flex-wrap" ref={filterRef}>
      {/* Date Filter */}
      {visibleFilters.includes('date') && (
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
      )}

      {/* Status Filter */}
      {visibleFilters.includes('status') && (
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
      )}

      {/* Owner Filter */}
      {visibleFilters.includes('owner') && (
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
      )}

      {/* Recipients Filter */}
      {visibleFilters.includes('recipients') && (
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
      )}

      {/* Amount Filter */}
      {visibleFilters.includes('amount') && (
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
      )}

      {/* Renewal Date Filter */}
      {visibleFilters.includes('renewal-date') && (
        <FilterButton 
          label="Renewal Date" 
          isActive={activeFilter === 'renewal-date'}
          hasFilter={false}
          onClick={() => {
            setActiveFilter(activeFilter === 'renewal-date' ? null : 'renewal-date');
            setShowRenewalDateCustom(false);
          }}
        >
          {activeFilter === 'renewal-date' && !showRenewalDateCustom && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[180px]">
              {/* Past Options */}
              <div className="py-2">
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last day
                </button>
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last 7 days
                </button>
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last month
                </button>
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last 3 months
                </button>
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last 6 months
                </button>
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last year
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200"></div>

              {/* Future Options */}
              <div className="py-2">
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Next 7 days
                </button>
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Next month
                </button>
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Next 3 months
                </button>
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Next 6 months
                </button>
                <button className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Next year
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200"></div>

              {/* Custom Option */}
              <div className="py-2">
                <button 
                  onClick={() => setShowRenewalDateCustom(true)}
                  className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors"
                >
                  Custom
                </button>
              </div>
            </div>
          )}
          {activeFilter === 'renewal-date' && showRenewalDateCustom && (
            <DateRangeFilter 
              isOpen={true}
              onClose={() => {
                setActiveFilter(null);
                setShowRenewalDateCustom(false);
              }}
              onApply={(dates) => {
                // Handle renewal date custom filter
                setActiveFilter(null);
                setShowRenewalDateCustom(false);
              }}
            />
          )}
        </FilterButton>
      )}

      {/* Auto Renew Filter */}
      {visibleFilters.includes('auto-renew') && (
        <FilterButton 
          label="Auto Renew" 
          isActive={activeFilter === 'auto-renew'}
          hasFilter={false}
          onClick={() => setActiveFilter(activeFilter === 'auto-renew' ? null : 'auto-renew')}
        >
          {activeFilter === 'auto-renew' && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[200px]">
              {/* Options */}
              <div className="py-2">
                <label className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                  />
                  <span className="text-14 font-graphik-regular text-secondary-dark">Yes</span>
                </label>
                <label className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                  />
                  <span className="text-14 font-graphik-regular text-secondary-dark">No</span>
                </label>
              </div>

              {/* Footer Buttons */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                <button
                  onClick={() => setActiveFilter(null)}
                  className="px-4 py-2 text-13 font-graphik-regular text-secondary-dark hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setActiveFilter(null)}
                  className="px-4 py-2 text-13 font-graphik-semibold text-white bg-brand-primary rounded hover:bg-opacity-90"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </FilterButton>
      )}

      {/* Duration (term) Filter (placeholder) */}
      {visibleFilters.includes('duration') && (
        <FilterButton 
          label="Duration (term)" 
          isActive={activeFilter === 'duration'}
          hasFilter={false}
          onClick={() => setActiveFilter(activeFilter === 'duration' ? null : 'duration')}
        >
          {activeFilter === 'duration' && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 min-w-[200px]">
              <p className="text-13 text-secondary-light">No durations available</p>
            </div>
          )}
        </FilterButton>
      )}

      {/* Document Type Filter (placeholder) */}
      {visibleFilters.includes('document-type') && (
        <FilterButton 
          label="Document Type" 
          isActive={activeFilter === 'document-type'}
          hasFilter={false}
          onClick={() => setActiveFilter(activeFilter === 'document-type' ? null : 'document-type')}
        >
          {activeFilter === 'document-type' && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 min-w-[200px]">
              <p className="text-13 text-secondary-light">No document types available</p>
            </div>
          )}
        </FilterButton>
      )}

      {/* More Button */}
      <div className="relative" ref={moreButtonRef}>
        <button 
          onClick={() => setShowMoreDropdown(!showMoreDropdown)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-13 font-graphik-semibold bg-gray-100 text-secondary-dark rounded-md hover:bg-gray-200 transition-colors"
        >
          More
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>

        {/* More Dropdown - Multi-select with search */}
        {showMoreDropdown && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 w-[260px]">
            {/* Search Input */}
            <div className="p-3 border-b border-gray-100">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  value={filterSearch}
                  onChange={(e) => setFilterSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-14 font-graphik-regular border border-gray-200 rounded-md focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            {/* Custom Section */}
            <div className="py-2">
              <div className="px-4 py-2">
                <span className="text-11 font-graphik-semibold text-secondary-light uppercase tracking-wide">Custom</span>
              </div>

              {/* Filter Options */}
              <div className="max-h-[240px] overflow-y-auto">
                {filteredAvailableFilters.length > 0 ? (
                  filteredAvailableFilters.map((filter) => (
                    <label
                      key={filter.id}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedNewFilters.includes(filter.id)}
                        onChange={() => toggleNewFilter(filter.id)}
                        className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                      />
                      <span className="text-14 font-graphik-regular text-secondary-dark">
                        {filter.label}
                      </span>
                    </label>
                  ))
                ) : (
                  <p className="px-4 py-2 text-13 text-secondary-light">
                    {availableFilters.length === 0 ? 'All filters are visible' : 'No matching filters'}
                  </p>
                )}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between p-3 border-t border-gray-100">
              <button
                onClick={handleCancelMore}
                className="px-4 py-2 text-14 font-graphik-semibold text-secondary-dark hover:bg-gray-50 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddFilters}
                className="px-4 py-2 text-14 font-graphik-semibold rounded-md transition-colors bg-brand-primary text-white hover:bg-brand-primary-dark"
              >
                Add filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
