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

// Sidebar Icons for File Picker
const ClockIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
    <path d="M8 14A6 6 0 108 2a6 6 0 000 12z" stroke="#6B7280" strokeWidth="1.2"/>
    <path d="M8 5v3l2 2" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const AppIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
    <path d="M4 2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" fill="#6B7280"/>
    <text x="8" y="11" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">A</text>
  </svg>
);

const DesktopIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="3" width="12" height="8" rx="1" stroke="#6B7280" strokeWidth="1.2"/>
    <path d="M5 13h6M8 11v2" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const DocIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
    <path d="M4 2h5l3 3v9a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#6B7280" strokeWidth="1.2"/>
    <path d="M9 2v3h3" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
    <path d="M8 2v8m0 0l-3-3m3 3l3-3" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 11v2a1 1 0 001 1h8a1 1 0 001-1v-2" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// File Picker Modal Component
const FilePickerModal = ({ isOpen, onClose, onFilesSelected }) => {
  const [selectedFiles, setSelectedFiles] = useState([0, 1, 2, 3]); // Pre-select first 4 files
  
  const files = [
    'Software as a Service Agreement',
    'Website Development Proposal',
    'Sales Quote',
    'Non-Disclosure Agreement',
    'Sponsorship Proposal',
    'Agency Agreement',
    'Marketing Proposal',
    'Website Quote',
    'Event Management Proposal',
    'Business Contract',
    'One-Page Sales Proposal',
    'Website Development Proposal',
    'Sales Quote',
    'Non-Disclosure Agreement'
  ];

  const favourites = [
    { name: 'Recents', Icon: ClockIcon },
    { name: 'Applicati...', Icon: AppIcon },
    { name: 'Desktop', Icon: DesktopIcon },
    { name: 'Documents', Icon: DocIcon },
    { name: 'Downloads', Icon: DownloadIcon }
  ];

  const tags = [
    { name: 'Red', color: '#FF3B30' },
    { name: 'Orange', color: '#FF9500' },
    { name: 'Yellow', color: '#FFCC00' },
    { name: 'Green', color: '#34C759' },
    { name: 'Blue', color: '#007AFF' },
    { name: 'Purple', color: '#AF52DE' },
    { name: 'Grey', color: '#8E8E93' }
  ];

  const toggleFileSelection = (index) => {
    setSelectedFiles(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleOpen = () => {
    const selected = selectedFiles.map(i => files[i]);
    onFilesSelected(selected);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      
      {/* Modal - macOS Sonoma style */}
      <div className="relative w-[715px] rounded-xl shadow-2xl overflow-hidden" style={{ backgroundColor: '#F6F6F6' }}>
        {/* Toolbar */}
        <div className="h-[52px] flex items-center px-4 border-b border-[#D5D5D5]" style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #EFEFEF 100%)' }}>
          {/* Navigation arrows */}
          <div className="flex items-center gap-0.5 mr-3">
            <button className="w-6 h-6 flex items-center justify-center text-[#9A9A9A] hover:text-[#6E6E6E] rounded">
              <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                <path d="M7.5 2.5L4 6l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-6 h-6 flex items-center justify-center text-[#9A9A9A] hover:text-[#6E6E6E] rounded">
              <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* View options */}
          <div className="flex items-center rounded-md border border-[#D1D1D1] overflow-hidden bg-white/80 mr-3">
            <button className="w-7 h-6 flex items-center justify-center text-[#6E6E6E] border-r border-[#D1D1D1] hover:bg-black/5">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="3" width="12" height="1.5" rx="0.5"/>
                <rect x="2" y="6" width="12" height="1.5" rx="0.5"/>
                <rect x="2" y="9" width="12" height="1.5" rx="0.5"/>
                <rect x="2" y="12" width="12" height="1.5" rx="0.5"/>
              </svg>
            </button>
            <button className="w-7 h-6 flex items-center justify-center text-[#6E6E6E] border-r border-[#D1D1D1] hover:bg-black/5">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="5" height="5" rx="1"/>
                <rect x="9" y="2" width="5" height="5" rx="1"/>
                <rect x="2" y="9" width="5" height="5" rx="1"/>
                <rect x="9" y="9" width="5" height="5" rx="1"/>
              </svg>
            </button>
            <button className="w-7 h-6 flex items-center justify-center text-[#6E6E6E] hover:bg-black/5">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="4" height="12" rx="1"/>
                <rect x="8" y="2" width="6" height="3" rx="0.5"/>
                <rect x="8" y="7" width="6" height="3" rx="0.5"/>
                <rect x="8" y="12" width="6" height="2" rx="0.5"/>
              </svg>
            </button>
            <button className="w-5 h-6 flex items-center justify-center text-[#9A9A9A]">
              <svg className="w-3 h-3" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Folder path */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 rounded-md border border-[#D1D1D1]">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="#4A9EFF">
                <path d="M2 5a2 2 0 012-2h3l2 2h3a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
              </svg>
              <span className="text-13 text-[#1D1D1F] font-medium">CLM</span>
            </div>
          </div>

          {/* Sync & Search */}
          <div className="flex items-center gap-2 ml-3">
            <button className="w-6 h-6 flex items-center justify-center text-[#9A9A9A] hover:text-[#6E6E6E] rounded">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="flex items-center bg-white/90 border border-[#D1D1D1] rounded-md px-2 py-1 w-[100px]">
              <svg className="w-3.5 h-3.5 text-[#9A9A9A] mr-1" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span className="text-12 text-[#9A9A9A]">Search</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[348px]">
          {/* Sidebar */}
          <div className="w-[130px] py-3 overflow-y-auto" style={{ backgroundColor: '#F6F6F6' }}>
            {/* Favourites */}
            <div className="px-4 mb-2">
              <span className="text-11 font-semibold text-[#86868B] tracking-wide">Favourites</span>
            </div>
            {favourites.map((item, i) => {
              const IconComponent = item.Icon;
              return (
                <button
                  key={i}
                  className="w-full px-4 py-[5px] flex items-center gap-2 text-left hover:bg-[#007AFF]/10 rounded-sm transition-colors"
                >
                  <IconComponent />
                  <span className="text-13 text-[#1D1D1F]">{item.name}</span>
                </button>
              );
            })}

            {/* Tags */}
            <div className="px-4 mt-5 mb-2">
              <span className="text-11 font-semibold text-[#86868B] tracking-wide">Tags</span>
            </div>
            {tags.map((tag, i) => (
              <button
                key={i}
                className="w-full px-4 py-[5px] flex items-center gap-2 text-left hover:bg-[#007AFF]/10 rounded-sm transition-colors"
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tag.color }} />
                <span className="text-13 text-[#1D1D1F]">{tag.name}</span>
              </button>
            ))}
            <button className="w-full px-4 py-[5px] flex items-center gap-2 text-left hover:bg-[#007AFF]/10 rounded-sm transition-colors">
              <div className="w-3 h-3 rounded-full border-[1.5px] border-[#86868B]" />
              <span className="text-13 text-[#1D1D1F]">All Tags...</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-px bg-[#D5D5D5]" />

          {/* File list */}
          <div className="flex-1 bg-white overflow-y-auto">
            {files.map((file, index) => (
              <button
                key={index}
                onClick={() => toggleFileSelection(index)}
                className={`w-full h-[23px] px-3 flex items-center text-left transition-colors ${
                  selectedFiles.includes(index)
                    ? 'bg-[#0066FF] text-white'
                    : 'text-[#1D1D1F] hover:bg-[#F5F5F5]'
                }`}
              >
                <span className="text-13" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>{file}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="h-[48px] flex items-center justify-end px-4 gap-2 border-t border-[#D5D5D5]" style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #EFEFEF 100%)' }}>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-[#D1D1D1] rounded-md text-13 font-medium text-[#1D1D1F] hover:bg-[#F5F5F5] transition-colors shadow-sm"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            Cancel
          </button>
          <button
            onClick={handleOpen}
            className="px-5 py-1.5 rounded-md text-13 font-medium text-white transition-colors shadow-sm"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
              background: 'linear-gradient(180deg, #4DA3FF 0%, #0066FF 100%)'
            }}
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

// Checkmark icon for completed imports
const CheckmarkIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#248567"/>
    <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Spinner icon for processing
const SpinnerIcon = () => (
  <svg className="w-5 h-5 animate-spin" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="#E5E7EB" strokeWidth="2"/>
    <path d="M10 2a8 8 0 018 8" stroke="#248567" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Info icon for toast
const InfoIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/>
    <path d="M10 9v4M10 7h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BulkImportPage = ({ onClose, onImportComplete }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Completed');
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isFilePickerOpen, setIsFilePickerOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentStep, setCurrentStep] = useState(1); // 1 = Select Documents, 2 = Import
  const [fileStatuses, setFileStatuses] = useState([]); // Track status of each file: 'pending', 'processing', 'imported'
  const [showToast, setShowToast] = useState(false);

  const statusOptions = ['Draft', 'Sent', 'Completed', 'Awaiting approval', 'Rejected'];

  const importedCount = fileStatuses.filter(s => s === 'imported').length;
  const allImported = selectedFiles.length > 0 && importedCount === selectedFiles.length;

  const handleFilesSelected = (files) => {
    setSelectedFiles(files);
    // Initialize all files as pending
    setFileStatuses(files.map(() => 'pending'));
    // Move to import step
    setCurrentStep(2);
    // Start processing files
    processFiles(files);
  };

  const processFiles = async (files) => {
    for (let i = 0; i < files.length; i++) {
      // Set current file to processing
      setFileStatuses(prev => {
        const newStatuses = [...prev];
        newStatuses[i] = 'processing';
        return newStatuses;
      });
      
      // Wait 1 second to simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set current file to imported
      setFileStatuses(prev => {
        const newStatuses = [...prev];
        newStatuses[i] = 'imported';
        return newStatuses;
      });
    }
    
    // Show toast when all files are imported
    setShowToast(true);
  };

  const handleCancelImport = () => {
    setCurrentStep(1);
    setSelectedFiles([]);
    setFileStatuses([]);
    setShowToast(false);
  };

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
            {/* Step 1 */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 flex items-center justify-center">
                {currentStep === 2 ? (
                  <svg className="w-4 h-4 text-[#248567]" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <div className="w-[7px] h-[7px] rounded-full bg-[#248567]" />
                )}
              </div>
              <span className="text-13 font-graphik-semibold text-[#248567]">
                Select Documents
              </span>
            </div>

            {/* Arrow */}
            <ChevronRightIcon className="w-3 h-6 text-gray-400" />

            {/* Step 2 */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 flex items-center justify-center">
                {currentStep === 2 ? (
                  <div className="w-[7px] h-[7px] rounded-full bg-[#007AFF]" />
                ) : (
                  <div className="w-[7px] h-[7px] rounded-full bg-[#767676]" />
                )}
              </div>
              <span className={`text-13 font-graphik-semibold ${currentStep === 2 ? 'text-[#007AFF]' : 'text-[#767676]'}`}>
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
          {currentStep === 1 ? (
            /* Step 1: Select Documents */
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
                <button 
                  onClick={() => setIsFilePickerOpen(true)}
                  className="flex items-center gap-1 px-2 h-8 bg-white rounded shadow-sm hover:shadow transition-shadow"
                >
                  <UploadIcon className="w-5 h-5 text-[#248567]" />
                  <span className="text-14 font-graphik-semibold text-[#248567]">
                    Select file
                  </span>
                </button>
              </div>
            </div>
          ) : (
            /* Step 2: Import Progress */
            <div className="w-[800px] max-w-full">
              {/* Title */}
              <h1 className="text-24 font-graphik-bold text-black mb-5">
                Imported {importedCount} of {selectedFiles.length} files
              </h1>

              {/* Folder indicator */}
              <div className="flex items-center gap-2 mb-2">
                <FolderIcon className="w-5 h-5 text-[#767676]" />
                <span className="text-14 font-graphik-regular text-secondary-dark">All</span>
              </div>

              {/* Info message */}
              <p className="text-14 font-graphik-regular text-[#767676] mb-6">
                Keep this window open so your bulk import can continue uninterrupted.
              </p>

              {/* Files list */}
              <div className="bg-white shadow-sm rounded overflow-hidden mb-6">
                {selectedFiles.map((file, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0"
                  >
                    {/* Status icon */}
                    <div className="flex-shrink-0">
                      {fileStatuses[index] === 'imported' ? (
                        <CheckmarkIcon />
                      ) : fileStatuses[index] === 'processing' ? (
                        <SpinnerIcon />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                      )}
                    </div>
                    
                    {/* File info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-14 font-graphik-semibold text-secondary-dark truncate">
                        {file}.docx
                      </p>
                      <p className="text-13 font-graphik-regular text-[#767676]">
                        {fileStatuses[index] === 'imported' ? 'Imported' : 
                         fileStatuses[index] === 'processing' ? 'Processing..' : 
                         'Pending'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action button */}
              <div className="flex justify-end">
                {allImported ? (
                  <button
                    onClick={() => {
                      if (onImportComplete) {
                        onImportComplete(selectedFiles);
                      } else {
                        onClose();
                      }
                    }}
                    className="px-6 py-2.5 bg-[#248567] text-white text-14 font-graphik-semibold rounded hover:bg-[#1D6A52] transition-colors"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleCancelImport}
                    className="px-6 py-2.5 border border-gray-300 text-14 font-graphik-semibold text-secondary-dark rounded hover:bg-gray-50 transition-colors"
                  >
                    Cancel import
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Toast notification */}
        {showToast && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#2F2F2F] text-white px-4 py-3 rounded-lg flex items-center gap-3 shadow-lg">
            <InfoIcon />
            <span className="text-14 font-graphik-regular">
              {selectedFiles.length} files have been imported.
            </span>
            <button 
              onClick={() => setShowToast(false)}
              className="ml-2 hover:bg-white/10 rounded p-1 transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* File Picker Modal */}
      <FilePickerModal
        isOpen={isFilePickerOpen}
        onClose={() => setIsFilePickerOpen(false)}
        onFilesSelected={handleFilesSelected}
      />
    </div>
  );
};

export default BulkImportPage;
