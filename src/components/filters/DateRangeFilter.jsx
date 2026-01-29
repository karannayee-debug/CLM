import React, { useState } from 'react';

const DateRangeFilter = ({ isOpen, onClose, onApply, initialStartDate, initialEndDate }) => {
  const [startDate, setStartDate] = useState(initialStartDate || null);
  const [endDate, setEndDate] = useState(initialEndDate || null);
  const [startMonth, setStartMonth] = useState(new Date().getMonth());
  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [endMonth, setEndMonth] = useState(new Date().getMonth());
  const [endYear, setEndYear] = useState(new Date().getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (day, month, year, isStart) => {
    const date = new Date(year, month, day);
    if (isStart) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const handleApply = () => {
    onApply({ startDate, endDate });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const navigateMonth = (direction, isStart) => {
    if (isStart) {
      let newMonth = startMonth + direction;
      let newYear = startYear;
      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      } else if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
      setStartMonth(newMonth);
      setStartYear(newYear);
    } else {
      let newMonth = endMonth + direction;
      let newYear = endYear;
      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      } else if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
      setEndMonth(newMonth);
      setEndYear(newYear);
    }
  };

  const renderCalendar = (month, year, selectedDate, isStart) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const days = [];

    // Empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate && 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
      const isToday = date.toDateString() === new Date().toDateString();
      const isSunday = date.getDay() === 0;

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day, month, year, isStart)}
          className={`w-8 h-8 text-13 rounded-full flex items-center justify-center transition-colors
            ${isSelected ? 'bg-brand-primary text-white' : ''}
            ${!isSelected && isToday ? 'border border-brand-primary' : ''}
            ${!isSelected && isSunday ? 'text-red-500' : ''}
            ${!isSelected && !isSunday ? 'text-secondary-dark hover:bg-gray-100' : ''}
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="flex">
        {/* Start Date Calendar */}
        <div className="p-4 border-r border-gray-200">
          <h3 className="font-graphik-semibold text-14 text-secondary-dark mb-3">Start date</h3>
          
          {/* Month/Year Navigation */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <select 
                value={startMonth}
                onChange={(e) => setStartMonth(parseInt(e.target.value))}
                className="text-13 font-graphik-regular border border-gray-200 rounded px-2 py-1"
              >
                {months.map((m, i) => (
                  <option key={m} value={i}>{m}</option>
                ))}
              </select>
              <select
                value={startYear}
                onChange={(e) => setStartYear(parseInt(e.target.value))}
                className="text-13 font-graphik-regular border border-gray-200 rounded px-2 py-1"
              >
                {years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => navigateMonth(-1, true)}
                className="w-6 h-6 flex items-center justify-center text-secondary-light hover:bg-gray-100 rounded"
              >
                &lt;
              </button>
              <button 
                onClick={() => navigateMonth(1, true)}
                className="w-6 h-6 flex items-center justify-center text-secondary-light hover:bg-gray-100 rounded"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className={`w-8 h-8 flex items-center justify-center text-12 font-graphik-semibold ${day === 'Su' ? 'text-red-500' : 'text-secondary-light'}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {renderCalendar(startMonth, startYear, startDate, true)}
          </div>
        </div>

        {/* End Date Calendar */}
        <div className="p-4 relative">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-secondary-light hover:text-secondary-dark"
          >
            ×
          </button>
          
          <h3 className="font-graphik-semibold text-14 text-secondary-dark mb-3">End date</h3>
          
          {/* Month/Year Navigation */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <select 
                value={endMonth}
                onChange={(e) => setEndMonth(parseInt(e.target.value))}
                className="text-13 font-graphik-regular border border-gray-200 rounded px-2 py-1"
              >
                {months.map((m, i) => (
                  <option key={m} value={i}>{m}</option>
                ))}
              </select>
              <select
                value={endYear}
                onChange={(e) => setEndYear(parseInt(e.target.value))}
                className="text-13 font-graphik-regular border border-gray-200 rounded px-2 py-1"
              >
                {years.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => navigateMonth(-1, false)}
                className="w-6 h-6 flex items-center justify-center text-secondary-light hover:bg-gray-100 rounded"
              >
                &lt;
              </button>
              <button 
                onClick={() => navigateMonth(1, false)}
                className="w-6 h-6 flex items-center justify-center text-secondary-light hover:bg-gray-100 rounded"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className={`w-8 h-8 flex items-center justify-center text-12 font-graphik-semibold ${day === 'Su' ? 'text-red-500' : 'text-secondary-light'}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {renderCalendar(endMonth, endYear, endDate, false)}
          </div>
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

export default DateRangeFilter;
