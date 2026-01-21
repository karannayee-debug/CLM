import React, { useState } from 'react';
import { XIcon, SearchIcon, FilterIcon, ChevronDownIcon } from './Icons';

// Upload icon component
const UploadIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

// Grid view icon
const GridViewIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

// List view icon
const ListViewIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="4" width="18" height="4" rx="1" />
    <rect x="3" y="10" width="18" height="4" rx="1" />
    <rect x="3" y="16" width="18" height="4" rx="1" />
  </svg>
);

const GetStartedPage = ({ onClose, onOpenGmailImport }) => {
  const [activeTab, setActiveTab] = useState('Suggested');
  const [isDragOver, setIsDragOver] = useState(false);

  const tabs = ['Suggested', 'My templates', 'Shared with me', 'Template gallery'];

  const templates = [
    { id: 1, name: 'Software Development Proposal', image: '/CLM/images/Template 1.png' },
    { id: 2, name: 'Agency Agreement Template', image: '/CLM/images/Template 2.png' },
    { id: 3, name: 'Executive Summary Template', image: '/CLM/images/Template 3.png' },
    { id: 4, name: 'Construction Proposal Template', image: '/CLM/images/Template 4.png' },
    { id: 5, name: 'Mobile App Development Proposal', image: '/CLM/images/Template 5.png' },
    { id: 6, name: 'Event Sponsorship Proposal', image: '/CLM/images/Template 6.png' },
    { id: 7, name: 'Product Launch Template', image: '/CLM/images/Template 7.png' },
    { id: 8, name: 'Executive Summary Template', image: '/CLM/images/Template 8.png' },
    { id: 9, name: 'Sold Notice', image: '/CLM/images/Template 9.png' },
    { id: 10, name: 'Marketing Proposal', image: '/CLM/images/Template 10.png' },
  ];

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file drop
    const files = e.dataTransfer.files;
    console.log('Dropped files:', files);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex-shrink-0">
        {/* Progress bar */}
        <div className="h-1 bg-gray-200 relative">
          <div className="absolute left-0 top-0 h-full w-[10%] bg-[#248567]" />
        </div>
        
        {/* Header content */}
        <div className="flex items-center justify-between px-7 py-3 border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-14 font-graphik-semibold text-secondary-dark">
              New proposal
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XIcon className="w-5 h-5 text-secondary-light" />
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-[1000px] mx-auto px-6 py-8">
          {/* Upload section */}
          <div className="mb-8">
            <h2 className="text-18 font-graphik-bold text-secondary-dark mb-5">
              Upload your document
            </h2>
            
            {/* Upload zone */}
            <div
              className={`border border-dashed rounded ${
                isDragOver ? 'border-brand-primary bg-brand-primary/5' : 'border-gray-400'
              } cursor-pointer transition-colors`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center py-12 gap-6">
                {/* Text */}
                <div className="text-center">
                  <p className="text-14 font-graphik-semibold text-secondary-dark mb-3">
                    Drag and drop files
                  </p>
                  <p className="text-13 font-graphik-regular text-secondary-dark">
                    PDF, Word, PowerPoint, JPG, PNG
                  </p>
                </div>

                {/* Document stack illustration */}
                <div className="relative w-16 h-24">
                  {/* Back document */}
                  <div className="absolute left-1 top-0 w-16 h-[86px] bg-white border border-gray-200 rounded shadow-sm">
                    <div className="space-y-2 p-2">
                      <div className="h-0.5 w-10 bg-gray-200 rounded" />
                      <div className="h-0.5 w-7 bg-gray-200 rounded" />
                      <div className="h-0.5 w-9 bg-gray-200 rounded" />
                    </div>
                  </div>
                  {/* Middle document */}
                  <div className="absolute left-0.5 top-1 w-16 h-[86px] bg-white border border-gray-200 rounded shadow-sm">
                    <div className="space-y-2 p-2">
                      <div className="h-0.5 w-10 bg-gray-200 rounded" />
                      <div className="h-0.5 w-7 bg-gray-200 rounded" />
                      <div className="h-0.5 w-9 bg-gray-200 rounded" />
                    </div>
                  </div>
                  {/* Front document with upload icon */}
                  <div className="absolute left-0 top-2 w-16 h-[86px] bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#E5F1ED] flex items-center justify-center">
                      <UploadIcon className="w-5 h-5 text-[#248567]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Import Options */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <button
                onClick={() => {
                  onClose();
                  onOpenGmailImport();
                }}
                className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_969_72596)">
                      <path d="M3.36364 18.9996H6.54545V11.2724L2 7.86328V17.636C2 18.3906 2.61136 18.9996 3.36364 18.9996Z" fill="#4285F4"/>
                      <path d="M17.4546 18.9996H20.6364C21.391 18.9996 22 18.3883 22 17.636V7.86328L17.4546 11.2724" fill="#34A853"/>
                      <path d="M17.4546 5.3636V11.2727L22 7.8636V6.04542C22 4.35905 20.075 3.39769 18.7273 4.40905" fill="#FBBC04"/>
                      <path d="M6.54541 11.2724V5.36328L12 9.45419L17.4545 5.36328V11.2724L12 15.3633" fill="#EA4335"/>
                      <path d="M2 6.04542V7.8636L6.54545 11.2727V5.3636L5.27273 4.40905C3.92273 3.39769 2 4.35905 2 6.04542Z" fill="#C5221F"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_969_72596">
                        <rect width="20" height="15" fill="white" transform="translate(2 4)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-14 font-graphik-semibold text-secondary-dark">
                  Import from Gmail
                </span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-sm transition-all">
                <div className="w-8 h-8 mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_969_72609)">
                      <path d="M4.36082 17.7121L5.15464 19.0762C5.31959 19.3634 5.5567 19.589 5.83505 19.7531L8.6701 14.8711H3C3 15.189 3.08247 15.507 3.24742 15.7942L4.36082 17.7121Z" fill="#0066DA"/>
                      <path d="M12 9.12814L9.16495 4.24609C8.8866 4.4102 8.64948 4.63584 8.48454 4.92302L3.24742 13.9487C3.08551 14.2296 3.00022 14.5478 3 14.8717H8.6701L12 9.12814Z" fill="#00AC47"/>
                      <path d="M18.1651 19.7531C18.4434 19.589 18.6805 19.3634 18.8455 19.0762L19.1754 18.5121L20.7527 15.7942C20.9176 15.507 21.0001 15.189 21.0001 14.8711H15.3296L16.5362 17.2301L18.1651 19.7531Z" fill="#EA4335"/>
                      <path d="M12.0001 9.1282L14.8351 4.24615C14.5568 4.08205 14.2372 4 13.9073 4H10.0929C9.76298 4 9.44339 4.09231 9.16504 4.24615L12.0001 9.1282Z" fill="#00832D"/>
                      <path d="M15.3298 14.8711H8.67001L5.83496 19.7531C6.11331 19.9172 6.4329 19.9993 6.7628 19.9993H17.237C17.5669 19.9993 17.8865 19.907 18.1649 19.7531L15.3298 14.8711Z" fill="#2684FC"/>
                      <path d="M18.134 9.43584L15.5155 4.92302C15.3505 4.63584 15.1134 4.4102 14.8351 4.24609L12 9.12814L15.3299 14.8717H20.9897C20.9897 14.5538 20.9072 14.2358 20.7423 13.9487L18.134 9.43584Z" fill="#FFBA00"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_969_72609">
                        <rect width="18" height="16" fill="white" transform="translate(3 4)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-14 font-graphik-semibold text-secondary-dark">
                  Import from Drive
                </span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-sm transition-all">
                <div className="w-8 h-8 mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_969_72603)">
                      <path d="M6.28346 14.5983C6.28346 15.7479 5.35432 16.677 4.20472 16.677C3.05511 16.677 2.12598 15.7479 2.12598 14.5983C2.12598 13.4487 3.05511 12.5195 4.20472 12.5195H6.28346V14.5983ZM7.32283 14.5983C7.32283 13.4487 8.25196 12.5195 9.40157 12.5195C10.5512 12.5195 11.4803 13.4487 11.4803 14.5983V19.7951C11.4803 20.9447 10.5512 21.8739 9.40157 21.8739C8.25196 21.8739 7.32283 20.9447 7.32283 19.7951V14.5983Z" fill="#E01E5A"/>
                      <path d="M9.40169 6.25123C8.25208 6.25123 7.32295 5.3221 7.32295 4.17249C7.32295 3.02288 8.25208 2.09375 9.40169 2.09375C10.5513 2.09375 11.4804 3.02288 11.4804 4.17249V6.25123H9.40169ZM9.40169 7.30635C10.5513 7.30635 11.4804 8.23548 11.4804 9.38509C11.4804 10.5347 10.5513 11.4638 9.40169 11.4638H4.18909C3.03949 11.4638 2.11035 10.5347 2.11035 9.38509C2.11035 8.23548 3.03949 7.30635 4.18909 7.30635H9.40169Z" fill="#36C5F0"/>
                      <path d="M17.7325 9.38509C17.7325 8.23548 18.6616 7.30635 19.8112 7.30635C20.9608 7.30635 21.89 8.23548 21.89 9.38509C21.89 10.5347 20.9608 11.4638 19.8112 11.4638H17.7325V9.38509ZM16.6931 9.38509C16.6931 10.5347 15.764 11.4638 14.6144 11.4638C13.4648 11.4638 12.5356 10.5347 12.5356 9.38509V4.17249C12.5356 3.02288 13.4648 2.09375 14.6144 2.09375C15.764 2.09375 16.6931 3.02288 16.6931 4.17249V9.38509Z" fill="#2EB67D"/>
                      <path d="M14.6144 17.7164C15.764 17.7164 16.6931 18.6455 16.6931 19.7951C16.6931 20.9447 15.764 21.8739 14.6144 21.8739C13.4648 21.8739 12.5356 20.9447 12.5356 19.7951V17.7164H14.6144ZM14.6144 16.677C13.4648 16.677 12.5356 15.7479 12.5356 14.5983C12.5356 13.4487 13.4648 12.5195 14.6144 12.5195H19.827C20.9766 12.5195 21.9057 13.4487 21.9057 14.5983C21.9057 15.7479 20.9766 16.677 19.827 16.677H14.6144Z" fill="#ECB22E"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_969_72603">
                        <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-14 font-graphik-semibold text-secondary-dark">
                  Import from Slack
                </span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-sm transition-all">
                <div className="w-8 h-8 mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                <span className="text-14 font-graphik-semibold text-secondary-dark">
                  Other import options
                </span>
              </button>
            </div>
          </div>

          {/* Template section */}
          <div>
            <h2 className="text-18 font-graphik-bold text-secondary-dark mb-0">
              Select a template
            </h2>
            
            {/* Tabs and controls */}
            <div className="flex items-center justify-between border-b border-gray-200 mb-6">
              <div className="flex items-center gap-6">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 text-14 transition-colors relative ${
                      activeTab === tab
                        ? 'font-graphik-semibold text-secondary-dark'
                        : 'font-graphik-regular text-secondary-dark hover:text-secondary-dark/80'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <SearchIcon className="w-5 h-5 text-secondary-light" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors flex items-center gap-1">
                  <ListViewIcon className="w-5 h-5 text-secondary-light" />
                  <ChevronDownIcon className="w-4 h-4 text-secondary-light" />
                </button>
              </div>
            </div>

            {/* Template grid */}
            <div className="grid grid-cols-5 gap-7">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[204/261] border border-gray-200 rounded shadow-sm overflow-hidden mb-3 hover:shadow-md transition-shadow">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-12 font-graphik-semibold text-secondary-dark text-center leading-tight">
                    {template.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Load more button */}
            <div className="flex justify-center mt-8">
              <button className="px-6 py-2 text-14 font-graphik-semibold text-secondary-light hover:bg-gray-50 transition-colors rounded border border-gray-300">
                Load more templates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;

