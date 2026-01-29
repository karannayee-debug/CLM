import React, { useState } from 'react';
import Avatar from '../Avatar';

const users = [
  { id: 'kn', name: 'Karan Nayee', email: 'karan.nayee@pandadoc.com', initials: 'KN', color: '#F59E0B' },
  { id: 'ak', name: 'Anastasia Koshko', email: 'anastasia.koshko@pandadoc.com', avatar: '/CLM/images/1.png' },
  { id: 'as', name: 'Anastasiia Shtunder', email: 'anastasiia.shtunder@pandadoc.com', avatar: '/CLM/images/2.png' },
  { id: 'ai', name: 'Artem Ignatiev', email: 'artem.ignatiev@pandadoc.com', initials: 'AI', color: '#6B7280' },
  { id: 'gh', name: 'Galyna Hromova', email: 'galyna.hromova@pandadoc.com', initials: 'GH', color: '#22C55E' },
  { id: 'kt', name: 'karan two', email: 'karan.nayee+2@pandadoc.com', initials: 'KT', color: '#6B7280' },
];

const UserFilter = ({ isOpen, onClose, onApply, selectedUsers = [], title = 'Filter' }) => {
  const [selected, setSelected] = useState(new Set(selectedUsers));
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleUser = (userId) => {
    setSelected(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const toggleSelectAll = () => {
    if (selected.size === filteredUsers.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(filteredUsers.map(u => u.id)));
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
    <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 w-72">
      <div className="p-3">
        {/* Search */}
        <div className="relative mb-3">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-13 font-graphik-regular border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>

        {/* Select All */}
        <label className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded px-2 -mx-2">
          <input
            type="checkbox"
            checked={selected.size === filteredUsers.length && filteredUsers.length > 0}
            onChange={toggleSelectAll}
            className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
          />
          <span className="text-13 font-graphik-regular text-secondary-dark">Select all</span>
        </label>

        <div className="border-t border-gray-100 my-2"></div>

        {/* User List */}
        <div className="max-h-64 overflow-y-auto">
          {filteredUsers.map(user => (
            <label 
              key={user.id} 
              className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded px-2 -mx-2"
            >
              <input
                type="checkbox"
                checked={selected.has(user.id)}
                onChange={() => toggleUser(user.id)}
                className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
              />
              <div className="flex items-center gap-2 flex-1 min-w-0">
                {user.avatar ? (
                  <Avatar src={user.avatar} alt={user.name} size="sm" />
                ) : (
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-11 font-graphik-semibold flex-shrink-0"
                    style={{ backgroundColor: user.color }}
                  >
                    {user.initials}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-13 font-graphik-regular text-secondary-dark truncate">{user.name}</div>
                  <div className="text-11 font-graphik-regular text-secondary-light truncate">{user.email}</div>
                </div>
              </div>
            </label>
          ))}
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

export default UserFilter;
