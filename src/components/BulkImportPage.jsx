import React, { useState } from 'react';
import { XIcon, ChevronDownIcon } from './Icons';

// Folder icon
const FolderIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

// Upload icon
const UploadIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

// Chevron right for stepper
const ChevronRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const BulkImportPage = ({ onClose }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Completed');
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const statusOptions = ['Draft', 'Sent', 'Completed', 'Awaiting approval', 'Rejected'];

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
    const files = e.dataTransfer.files;
    console.log('Dropped files:', files);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-[#f4f4f4] w-[1400px] max-w-[95vw] h-[760px] max-h-[95vh] flex flex-col">
        {/* Header with stepper */}
        <div className="bg-white h-[60px] flex items-center justify-center relative border-b border-gray-200">
          {/* Stepper */}
          <div className="flex items-center gap-5">
            {/* Step 1 - Active */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#248567]" />
              </div>
              <span className="text-13 font-graphik-semibold text-[#248567]">
                Select Documents
              </span>
            </div>

            {/* Arrow */}
            <ChevronRightIcon className="w-3 h-6 text-gray-400" />

            {/* Step 2 - Inactive */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-[7px] h-[7px] rounded-full bg-[#767676]" />
              </div>
              <span className="text-13 font-graphik-semibold text-[#767676]">
                Import
              </span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XIcon className="w-5 h-5 text-[#767676]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center pt-12 px-8 overflow-auto">
          <div className="w-[800px] max-w-full">
            {/* Title */}
            <h1 className="text-24 font-graphik-bold text-black mb-5">
              Select documents
            </h1>

            {/* Cards row */}
            <div className="flex gap-5 mb-4">
              {/* Destination Folder Card */}
              <div className="flex-1 bg-white shadow-sm p-4 pt-2">
                <div className="py-2.5 mb-2">
                  <span className="text-12 font-graphik-regular text-[#767676] uppercase tracking-wider">
                    DESTINATION FOLDER
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderIcon className="w-5 h-5 text-[#767676]" />
                    <span className="text-14 font-graphik-regular text-secondary-dark">All</span>
                  </div>
                  <button className="px-4 py-1.5 bg-gray-100 text-14 font-graphik-semibold text-secondary-dark rounded hover:bg-gray-200 transition-colors">
                    Change
                  </button>
                </div>
              </div>

              {/* Document Status Card */}
              <div className="flex-1 bg-white shadow-sm p-4 pt-2">
                <div className="py-2.5 mb-2">
                  <span className="text-12 font-graphik-regular text-[#767676] uppercase tracking-wider">
                    DOCUMENT STATUS
                  </span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                    className="w-full h-8 px-2 border border-gray-200 rounded flex items-center justify-between bg-white hover:border-gray-300 transition-colors"
                  >
                    <span className="text-14 font-graphik-regular text-[#767676]">
                      {selectedStatus}
                    </span>
                    <ChevronDownIcon className="w-5 h-5 text-[#767676]" />
                  </button>
                  
                  {isStatusDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
                      {statusOptions.map((status) => (
                        <button
                          key={status}
                          onClick={() => {
                            setSelectedStatus(status);
                            setIsStatusDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-14 font-graphik-regular hover:bg-gray-50 transition-colors ${
                            selectedStatus === status ? 'text-[#248567] bg-gray-50' : 'text-secondary-dark'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Upload Zone */}
            <div
              className={`h-[189px] border-2 border-dashed rounded flex flex-col items-center justify-center transition-colors ${
                isDragOver ? 'border-[#248567] bg-[#248567]/5' : 'border-gray-300 bg-white'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <p className="text-14 font-graphik-semibold text-[#2f2f2f] mb-2">
                Drag and drop your file here
              </p>
              <p className="text-13 font-graphik-regular text-[#2f2f2f] mb-4">
                Supported files: PDF, Word, PowerPoint, JPG, PNG
              </p>
              <button className="flex items-center gap-1 px-2 h-8 bg-white rounded shadow-sm hover:shadow transition-shadow">
                <UploadIcon className="w-5 h-5 text-[#248567]" />
                <span className="text-14 font-graphik-semibold text-[#248567]">
                  Select file
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkImportPage;
