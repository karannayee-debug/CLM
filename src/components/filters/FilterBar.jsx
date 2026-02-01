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
  setRecipientsFilter,
  autoRenewFilter,
  setAutoRenewFilter
}) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [visibleFilters, setVisibleFilters] = useState(['date', 'status', 'owner', 'recipients', 'amount']);
  const [selectedNewFilters, setSelectedNewFilters] = useState([]);
  const [filterSearch, setFilterSearch] = useState('');
  const [showRenewalDateCustom, setShowRenewalDateCustom] = useState(false);
  const [renewalDateFilter, setRenewalDateFilter] = useState(null);
  const [pendingAutoRenew, setPendingAutoRenew] = useState(null); // temporary selection before apply
  const [durationFilter, setDurationFilter] = useState({ from: '', to: '' });
  const [pendingDuration, setPendingDuration] = useState({ from: '', to: '' });
  const filterRef = useRef(null);
  const moreButtonRef = useRef(null);

  // Helper function to format date as "Mon D, YYYY"
  const formatDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  // Helper function to calculate date ranges
  const calculateDateRange = (option) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let startDate = new Date(today);
    let endDate = new Date(today);

    switch (option) {
      case 'last-day':
        startDate.setDate(startDate.getDate() - 1);
        endDate = new Date(today);
        break;
      case 'last-7-days':
        startDate.setDate(startDate.getDate() - 7);
        endDate = new Date(today);
        break;
      case 'last-month':
        startDate.setMonth(startDate.getMonth() - 1);
        endDate = new Date(today);
        break;
      case 'last-3-months':
        startDate.setMonth(startDate.getMonth() - 3);
        endDate = new Date(today);
        break;
      case 'last-6-months':
        startDate.setMonth(startDate.getMonth() - 6);
        endDate = new Date(today);
        break;
      case 'last-year':
        startDate.setFullYear(startDate.getFullYear() - 1);
        endDate = new Date(today);
        break;
      case 'next-7-days':
        startDate = new Date(today);
        endDate.setDate(endDate.getDate() + 7);
        break;
      case 'next-month':
        startDate = new Date(today);
        endDate.setMonth(endDate.getMonth() + 1);
        break;
      case 'next-3-months':
        startDate = new Date(today);
        endDate.setMonth(endDate.getMonth() + 3);
        break;
      case 'next-6-months':
        startDate = new Date(today);
        endDate.setMonth(endDate.getMonth() + 6);
        break;
      case 'next-year':
        startDate = new Date(today);
        endDate.setFullYear(endDate.getFullYear() + 1);
        break;
      default:
        return null;
    }
    return { startDate, endDate };
  };

  const handleRenewalDateSelect = (option) => {
    const dateRange = calculateDateRange(option);
    if (dateRange) {
      setRenewalDateFilter(dateRange);
      setActiveFilter(null);
    }
  };

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
  const hasRenewalDateFilter = renewalDateFilter !== null;
  const hasAutoRenewFilter = autoRenewFilter !== null;
  const hasDurationFilter = durationFilter.from !== '' || durationFilter.to !== '';

  // Check if any filter is applied
  const hasAnyFilter = hasDateFilter || hasStatusFilter || hasAmountFilter || hasOwnerFilter || hasRecipientsFilter || hasRenewalDateFilter || hasAutoRenewFilter || hasDurationFilter;

  // Clear all filters
  const handleClearAllFilters = () => {
    // Clear parent filters safely - match initial state values
    if (typeof setDateFilter === 'function') {
      setDateFilter({ startDate: null, endDate: null });
    }
    if (typeof setStatusFilter === 'function') {
      setStatusFilter([]);
    }
    if (typeof setAmountFilter === 'function') {
      setAmountFilter(null);
    }
    if (typeof setOwnerFilter === 'function') {
      setOwnerFilter([]);
    }
    if (typeof setRecipientsFilter === 'function') {
      setRecipientsFilter([]);
    }
    if (typeof setAutoRenewFilter === 'function') {
      setAutoRenewFilter(null);
    }
    // Clear local filters
    setRenewalDateFilter(null);
    setDurationFilter({ from: '', to: '' });
  };

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
        <div className="relative">
          <button
            onClick={() => {
              setActiveFilter(activeFilter === 'renewal-date' ? null : 'renewal-date');
              setShowRenewalDateCustom(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-13 font-graphik-semibold rounded-md transition-colors
              ${renewalDateFilter 
                ? 'bg-brand-primary/10 text-brand-primary' 
                : 'bg-gray-100 text-secondary-dark hover:bg-gray-200'
              }
            `}
          >
            {renewalDateFilter 
              ? `Renewal Date: ${formatDate(renewalDateFilter.startDate)} — ${formatDate(renewalDateFilter.endDate)}`
              : 'Renewal Date'
            }
            <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${activeFilter === 'renewal-date' ? 'rotate-180' : ''}`} />
          </button>

          {activeFilter === 'renewal-date' && !showRenewalDateCustom && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[180px]">
              {/* Past Options */}
              <div className="py-2">
                <button onClick={() => handleRenewalDateSelect('last-day')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last day
                </button>
                <button onClick={() => handleRenewalDateSelect('last-7-days')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last 7 days
                </button>
                <button onClick={() => handleRenewalDateSelect('last-month')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last month
                </button>
                <button onClick={() => handleRenewalDateSelect('last-3-months')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last 3 months
                </button>
                <button onClick={() => handleRenewalDateSelect('last-6-months')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last 6 months
                </button>
                <button onClick={() => handleRenewalDateSelect('last-year')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Last year
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200"></div>

              {/* Future Options */}
              <div className="py-2">
                <button onClick={() => handleRenewalDateSelect('next-7-days')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Next 7 days
                </button>
                <button onClick={() => handleRenewalDateSelect('next-month')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Next month
                </button>
                <button onClick={() => handleRenewalDateSelect('next-3-months')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Next 3 months
                </button>
                <button onClick={() => handleRenewalDateSelect('next-6-months')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
                  Next 6 months
                </button>
                <button onClick={() => handleRenewalDateSelect('next-year')} className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 transition-colors">
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
                setRenewalDateFilter(dates);
                setActiveFilter(null);
                setShowRenewalDateCustom(false);
              }}
            />
          )}
        </div>
      )}

      {/* Auto Renew Filter */}
      {visibleFilters.includes('auto-renew') && (
        <div className="relative">
          <button
            onClick={() => {
              if (activeFilter === 'auto-renew') {
                setActiveFilter(null);
                setPendingAutoRenew(null);
              } else {
                setActiveFilter('auto-renew');
                setPendingAutoRenew(autoRenewFilter); // initialize with current value
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-13 font-graphik-semibold rounded-md transition-colors
              ${autoRenewFilter !== null
                ? 'bg-brand-primary/10 text-brand-primary' 
                : 'bg-gray-100 text-secondary-dark hover:bg-gray-200'
              }
            `}
          >
            {autoRenewFilter !== null
              ? `Auto-renewable: ${autoRenewFilter === 'yes' ? 'Yes' : 'No'}`
              : 'Auto Renew'
            }
            <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${activeFilter === 'auto-renew' ? 'rotate-180' : ''}`} />
          </button>

          {activeFilter === 'auto-renew' && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[200px]">
              {/* Options */}
              <div className="py-2">
                <label className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={pendingAutoRenew === 'yes'}
                    onChange={() => setPendingAutoRenew(pendingAutoRenew === 'yes' ? null : 'yes')}
                    className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                  />
                  <span className="text-14 font-graphik-regular text-secondary-dark">Yes</span>
                </label>
                <label className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={pendingAutoRenew === 'no'}
                    onChange={() => setPendingAutoRenew(pendingAutoRenew === 'no' ? null : 'no')}
                    className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                  />
                  <span className="text-14 font-graphik-regular text-secondary-dark">No</span>
                </label>
              </div>

              {/* Footer Buttons */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                <button
                  onClick={() => {
                    setPendingAutoRenew(null);
                    setActiveFilter(null);
                  }}
                  className="px-4 py-2 text-13 font-graphik-regular text-secondary-dark hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setAutoRenewFilter(pendingAutoRenew);
                    setActiveFilter(null);
                  }}
                  className="px-4 py-2 text-13 font-graphik-semibold text-white bg-brand-primary rounded hover:bg-opacity-90"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Duration (term) Filter */}
      {visibleFilters.includes('duration') && (
        <div className="relative">
          <button
            onClick={() => {
              if (activeFilter === 'duration') {
                setActiveFilter(null);
                setPendingDuration({ from: '', to: '' });
              } else {
                setActiveFilter('duration');
                setPendingDuration(durationFilter);
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-13 font-graphik-semibold rounded-md transition-colors
              ${hasDurationFilter
                ? 'bg-brand-primary/10 text-brand-primary' 
                : 'bg-gray-100 text-secondary-dark hover:bg-gray-200'
              }
            `}
          >
            {hasDurationFilter
              ? `Term: ${durationFilter.from || 'Any'} months — ${durationFilter.to ? `${durationFilter.to} months` : 'Any'}`
              : 'Duration (term)'
            }
            <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${activeFilter === 'duration' ? 'rotate-180' : ''}`} />
          </button>

          {activeFilter === 'duration' && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[300px]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <span className="text-14 font-graphik-semibold text-secondary-dark">Filter by</span>
                <button 
                  onClick={() => setPendingDuration({ from: '', to: '' })}
                  className="text-13 font-graphik-regular text-brand-primary hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* FROM and TO side by side */}
              <div className="flex gap-4 px-4 py-3">
                {/* FROM Section */}
                <div className="flex-1">
                  <div className="text-11 font-graphik-regular text-secondary-light uppercase tracking-wide mb-2">From</div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="Any"
                      value={pendingDuration.from}
                      onChange={(e) => setPendingDuration({ ...pendingDuration, from: e.target.value })}
                      className="w-16 px-3 py-2 text-14 font-graphik-regular border border-gray-300 rounded focus:outline-none focus:border-brand-primary"
                    />
                    <span className="text-14 font-graphik-regular text-secondary-dark">Months</span>
                  </div>
                </div>

                {/* TO Section */}
                <div className="flex-1">
                  <div className="text-11 font-graphik-regular text-secondary-light uppercase tracking-wide mb-2">To</div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="Any"
                      value={pendingDuration.to}
                      onChange={(e) => setPendingDuration({ ...pendingDuration, to: e.target.value })}
                      className="w-16 px-3 py-2 text-14 font-graphik-regular border border-gray-300 rounded focus:outline-none focus:border-brand-primary"
                    />
                    <span className="text-14 font-graphik-regular text-secondary-dark">Months</span>
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                <button
                  onClick={() => {
                    setPendingDuration({ from: '', to: '' });
                    setActiveFilter(null);
                  }}
                  className="px-4 py-2 text-13 font-graphik-regular text-secondary-dark hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setDurationFilter(pendingDuration);
                    setActiveFilter(null);
                  }}
                  className="px-4 py-2 text-13 font-graphik-semibold text-white bg-brand-primary rounded hover:bg-opacity-90"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
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

      {/* Clear All Button - only show when filters are applied */}
      {hasAnyFilter && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleClearAllFilters();
          }}
          className="flex items-center gap-1.5 px-2 py-1.5 text-13 font-graphik-regular text-secondary-light hover:text-secondary-dark transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Clear all
        </button>
      )}
    </div>
  );
};

export default FilterBar;
