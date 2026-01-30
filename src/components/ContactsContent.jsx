import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

// Contact avatar with initials
const ContactAvatar = ({ name, color }) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div 
      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-12 font-graphik-semibold"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
};

const ContactsContent = () => {
  const [selectedContacts, setSelectedContacts] = useState(new Set());
  const [sortDirection, setSortDirection] = useState('asc');

  // Contact data with pandadoc.com emails
  const contacts = [
    { id: 1, name: 'Aleh Lipski', email: 'aleh.lipski@pandadoc.com', color: '#E57373' },
    { id: 2, name: 'Alex Dzk', email: 'alex.dzk@pandadoc.com', color: '#81C784' },
    { id: 3, name: 'Alex Fishburn', email: 'alex.fishburn@pandadoc.com', color: '#81C784' },
    { id: 4, name: 'Alex Martinez', email: 'alex.martinez@pandadoc.com', color: '#E57373' },
    { id: 5, name: 'Alex Martinez', email: 'alex.martinez2@pandadoc.com', color: '#81C784' },
    { id: 6, name: 'Alex Martinez', email: 'alex.martinez3@pandadoc.com', color: '#E57373' },
    { id: 7, name: 'Alex Morrison', email: 'alex.morrison@pandadoc.com', color: '#E57373' },
    { id: 8, name: 'Alex Smith', email: 'alex.smith@pandadoc.com', color: '#81C784' },
    { id: 9, name: 'Alex Thompson', email: 'alex.thompson@pandadoc.com', color: '#81C784' },
    { id: 10, name: 'Alexander Brovchenko', email: 'alexander.brovchenko@pandadoc.com', color: '#81C784' },
    { id: 11, name: 'Amanda Chen', email: 'amanda.chen@pandadoc.com', color: '#64B5F6' },
    { id: 12, name: 'Brian Johnson', email: 'brian.johnson@pandadoc.com', color: '#FFB74D' },
    { id: 13, name: 'Carlos Rodriguez', email: 'carlos.rodriguez@pandadoc.com', color: '#BA68C8' },
    { id: 14, name: 'David Kim', email: 'david.kim@pandadoc.com', color: '#4DB6AC' },
    { id: 15, name: 'Emily Watson', email: 'emily.watson@pandadoc.com', color: '#F06292' },
  ];

  const toggleContactSelection = (contactId) => {
    const newSelected = new Set(selectedContacts);
    if (newSelected.has(contactId)) {
      newSelected.delete(contactId);
    } else {
      newSelected.add(contactId);
    }
    setSelectedContacts(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedContacts.size === contacts.length) {
      setSelectedContacts(new Set());
    } else {
      setSelectedContacts(new Set(contacts.map(c => c.id)));
    }
  };

  const toggleSort = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const sortedContacts = [...contacts].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return (
    <div className="flex h-full">
      {/* Left Sidebar */}
      <div className="w-52 bg-white border-r border-gray-200 p-4">
        {/* New Contact Button */}
        <div className="flex mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-primary text-white font-graphik-semibold text-14 rounded-l-md hover:bg-brand-primary-dark transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Contact
          </button>
          <button className="px-3 py-2.5 bg-brand-primary text-white rounded-r-md border-l border-white/20 hover:bg-brand-primary-dark transition-colors">
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav>
          <a 
            href="#" 
            className="flex items-center gap-3 px-3 py-2 text-14 font-graphik-regular text-secondary-dark hover:bg-gray-50 rounded-md transition-colors"
          >
            <svg className="w-5 h-5 text-secondary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All contacts
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-6">
        {/* Section Title */}
        <h2 className="text-18 font-graphik-bold text-secondary-dark mb-4">All</h2>

        {/* Contacts Table */}
        <div className="w-full">
          {/* Table Header */}
          <div className="flex items-center h-12 border-b border-gray-200">
            <div className="w-12 flex justify-center">
              <input
                type="checkbox"
                checked={selectedContacts.size === contacts.length}
                onChange={toggleSelectAll}
                className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
              />
            </div>
            <div className="flex-1 flex items-center gap-1">
              <button 
                onClick={toggleSort}
                className="flex items-center gap-1 text-13 font-graphik-regular text-secondary-light hover:text-secondary-dark transition-colors"
              >
                Name
                {sortDirection === 'asc' ? (
                  <ChevronUpIcon className="w-4 h-4" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="w-80 text-13 font-graphik-regular text-secondary-light">
              Email
            </div>
          </div>

          {/* Table Body */}
          <div>
            {sortedContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center h-16 border-b border-gray-50 hover:bg-gray-25 transition-colors cursor-pointer group"
              >
                <div className="w-12 flex justify-center">
                  <input
                    type="checkbox"
                    checked={selectedContacts.has(contact.id)}
                    onChange={() => toggleContactSelection(contact.id)}
                    className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                  />
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <ContactAvatar name={contact.name} color={contact.color} />
                  <span className="text-14 font-graphik-regular text-secondary-dark">
                    {contact.name}
                  </span>
                </div>
                <div className="w-80 text-14 font-graphik-regular text-secondary-light">
                  {contact.email}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsContent;
