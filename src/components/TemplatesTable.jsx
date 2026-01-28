import React from 'react';
import { DocumentPortraitIcon, ChevronDownIcon } from './Icons';
import Avatar from './Avatar';

const TemplatesTable = () => {
  const templates = [
    {
      id: 1,
      name: 'Building Quote',
      participants: 'Sender, Client',
      avatar: '/CLM/images/user-profile.png',
      created: 'Nov 6, 2025'
    },
    {
      id: 2,
      name: 'Business Proposal For Water Treatment Template',
      participants: 'Sender, Client',
      avatar: '/CLM/images/2.png',
      avatarInitials: 'VR',
      avatarBg: '#FDECEA',
      avatarColor: '#D93025',
      created: 'Nov 11, 2025'
    },
    {
      id: 3,
      name: 'Employee NDA Template',
      participants: 'Employee, Sender',
      avatar: '/CLM/images/user-profile.png',
      created: 'Nov 6, 2025'
    },
    {
      id: 4,
      name: 'Employment Contract',
      participants: 'Employee, Sender',
      avatar: '/CLM/images/user-profile.png',
      created: 'Oct 30, 2025'
    },
    {
      id: 5,
      name: 'Mutual NDA Template',
      participants: 'Sender, Customer Signer',
      avatar: '/CLM/images/user-profile.png',
      created: 'Nov 6, 2025'
    },
    {
      id: 6,
      name: 'NDA Template',
      participants: 'Client, Sender',
      avatar: '/CLM/images/user-profile.png',
      created: 'Nov 6, 2025'
    },
    {
      id: 7,
      name: 'NDA Template copy',
      participants: 'Sender',
      avatar: '/CLM/images/3.png',
      created: 'Dec 11, 2025'
    },
    {
      id: 8,
      name: 'NDA Template copy 2',
      participants: 'Sender',
      avatarInitials: 'KN',
      avatarBg: '#E8F5E9',
      avatarColor: '#1D6A52',
      created: 'Jan 27, 2026'
    }
  ];

  return (
    <div className="bg-white">
      {/* Table Header */}
      <div className="flex items-center h-10 border-b border-gray-100 text-13 font-graphik-regular text-[#767676]">
        <div className="w-8 flex items-center justify-center">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
        </div>
        <div className="flex-1 min-w-0 px-0 flex items-center gap-1">
          Name
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M8 4L8 12M8 4L5 7M8 4L11 7" stroke="#767676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="w-40 flex items-center ml-6">
          Created
        </div>
      </div>

      {/* Table Body */}
      <div>
        {templates.map((template) => (
          <div key={template.id} className="flex items-center h-17 border-b border-gray-50 hover:bg-gray-25 transition-colors">
            {/* Checkbox */}
            <div className="w-8 flex items-center justify-center">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
            </div>
            
            {/* Document Icon + Name Column */}
            <div className="flex-1 min-w-0 flex items-center">
              <div className="w-12 flex justify-center">
                <DocumentPortraitIcon className="w-6 h-6 text-secondary-light" />
              </div>
              <div className="flex-1 pr-3 min-w-0">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-graphik-semibold text-14 text-secondary-dark truncate">
                    {template.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-13 font-graphik-regular text-secondary-dark truncate">
                    {template.participants}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 text-secondary-light flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Created Column */}
            <div className="w-40 flex items-center gap-2 ml-6">
              {template.avatarInitials ? (
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-9 font-graphik-semibold"
                  style={{ backgroundColor: template.avatarBg, color: template.avatarColor }}
                >
                  {template.avatarInitials}
                </div>
              ) : (
                <Avatar src={template.avatar} alt="User avatar" size="sm" />
              )}
              <span className="text-13 font-graphik-regular text-secondary-dark">
                {template.created}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesTable;
