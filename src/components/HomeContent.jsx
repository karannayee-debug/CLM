import React, { useState } from 'react';
import { DocumentPortraitIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SparkleIcon } from './Icons';
import StatusLabel from './StatusLabel';
import Avatar from './Avatar';

const HomeContent = ({ onNavigateToDocuments }) => {
  const [selectedCategory, setSelectedCategory] = useState('Your drafts');

  // Categories with document counts
  const categories = [
    { id: 'your-drafts', label: 'Your drafts', count: 3 },
    { id: 'action-required', label: 'Action required', count: 0 },
    { id: 'waiting-for-others', label: 'Waiting for others', count: 0 },
    { id: 'finalized', label: 'Finalized', count: 3 },
    { id: 'to-approve', label: 'To approve', count: 0 },
    { id: 'approved', label: 'Approved', count: 0 },
    { id: 'rejected', label: 'Rejected', count: 0 },
  ];

  // Recent documents (using existing document data)
  const recentDocuments = [
    {
      id: 1,
      name: 'Proposal for Kraftwerk Events',
      participants: 'Will Holland, Mariel Stacey',
      status: 'Draft',
      date: 'Jan 26, 2026',
      avatar: '/CLM/images/4.png',
    },
    {
      id: 2,
      name: 'Equipment Purchase Proposal for Tresor Media',
      participants: 'No recipients',
      status: 'Draft',
      date: 'Jan 23, 2026',
      avatar: '/CLM/images/2.png',
    },
    {
      id: 3,
      name: 'Non-Disclosure Agreement for Brilliant Moments Inc.',
      participants: 'No recipients',
      status: 'Draft',
      date: 'Jan 23, 2026',
      avatar: '/CLM/images/1.png',
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="p-15 max-w-none">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-24 font-graphik-bold text-secondary-dark">
              Welcome back, Karan
            </h1>
            <a href="#" className="flex items-center gap-1 text-14 font-graphik-regular text-secondary-dark hover:text-brand-primary transition-colors">
              Team dashboard
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Category Cards */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            {/* Left Arrow */}
            <button className="w-8 h-8 flex items-center justify-center text-secondary-light hover:text-secondary-dark transition-colors">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            {/* Category Pills */}
            <div className="flex-1 flex items-center gap-0 overflow-hidden">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.label)}
                  className={`flex-shrink-0 px-5 py-4 border-b-2 transition-colors ${
                    selectedCategory === category.label
                      ? 'border-brand-primary bg-gray-50'
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className={`text-14 font-graphik-semibold ${
                    selectedCategory === category.label ? 'text-secondary-dark' : 'text-secondary-dark'
                  }`}>
                    {category.label}
                  </div>
                  <div className="text-13 font-graphik-regular text-secondary-light">
                    {category.count} docs
                  </div>
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="w-8 h-8 flex items-center justify-center text-secondary-light hover:text-secondary-dark transition-colors">
              <ChevronRightIcon className="w-5 h-5" />
            </button>

            {/* View Toggle & Ask AI */}
            <div className="flex items-center gap-4 ml-4">
              <button className="flex items-center gap-1 text-secondary-light hover:text-secondary-dark transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
                </svg>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-14 font-graphik-semibold text-brand-secondary hover:bg-purple-50 transition-colors rounded">
                <SparkleIcon className="w-5 h-5 text-brand-secondary" />
                Ask AI
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 mb-6"></div>

        {/* Recent Documents Section */}
        <div>
          <h2 className="text-13 font-graphik-semibold text-secondary-light mb-4">Last week</h2>
          
          {/* Document List */}
          <div>
            {recentDocuments.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center h-16 border-b border-gray-50 hover:bg-gray-25 transition-colors cursor-pointer"
              >
                {/* Document Icon + Name */}
                <div className="flex-1 min-w-0 flex items-center">
                  <div className="w-12 flex justify-center">
                    <DocumentPortraitIcon className="w-6 h-6 text-secondary-light" />
                  </div>
                  <div className="flex-1 pr-3 min-w-0">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-graphik-semibold text-14 text-secondary-dark truncate">
                        {doc.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-13 font-graphik-regular text-secondary-light truncate">
                        {doc.participants}
                      </span>
                      {doc.participants !== 'No recipients' && (
                        <ChevronDownIcon className="w-4 h-4 text-secondary-light flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="w-32 flex items-center">
                  <StatusLabel type={doc.status} />
                </div>

                {/* Avatar + Date */}
                <div className="w-40 flex items-center gap-2 justify-end pr-4">
                  <Avatar src={doc.avatar} alt="User avatar" size="sm" />
                  <span className="text-13 font-graphik-regular text-secondary-dark">
                    {doc.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
