import React, { useState } from 'react';
import { XIcon, ChevronDownIcon } from './Icons';

// Folder icon
const FolderIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

// Folder outline icon (smaller)
const FolderOutlineIcon = ({ className }) => (
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

// Sparkle icon for AI info
const SparkleInfoIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none">
    <path d="M8 1l1.5 4.5L14 7l-4.5 1.5L8 13l-1.5-4.5L2 7l4.5-1.5L8 1z" fill="currentColor"/>
  </svg>
);

// Gmail icon
const GmailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
  </svg>
);

// Google Drive icon
const GoogleDriveIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M4.433 22l4.006-6.928H24l-4.006 6.928z" fill="#3777E3"/>
    <path d="M15.567 2L7.994 15.072 4.433 22l4.006-6.928L15.567 2z" fill="#FFCF63"/>
    <path d="M24 15.072H8.439L15.567 2h7.566z" fill="#11A861"/>
  </svg>
);

// More horizontal icon
const MoreHorizontalIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="5" cy="12" r="2" fill="currentColor"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <circle cx="19" cy="12" r="2" fill="currentColor"/>
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

// Spinner icon for processing (circular loading)
const SpinnerIcon = () => (
  <svg className="w-6 h-6 animate-spin" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#E5E7EB" strokeWidth="2"/>
    <path d="M12 2a10 10 0 0110 10" stroke="#248567" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Pending icon (empty circle)
const PendingIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#D1D5DB" strokeWidth="2"/>
  </svg>
);

// Info icon for toast
const InfoIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/>
    <path d="M10 9v4M10 7h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BulkImportPage = ({ onClose, onImportComplete, onOpenDocument }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Completed');
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isFilePickerOpen, setIsFilePickerOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentStep, setCurrentStep] = useState(1); // 1 = Select Documents, 2 = Import
  const [fileStatuses, setFileStatuses] = useState([]); // Track status of each file: 'pending', 'processing', 'imported'
  const [showToast, setShowToast] = useState(false);
  const [isWidgetExpanded, setIsWidgetExpanded] = useState(true);

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

  // Step 2: Show small widget in bottom right corner
  if (currentStep === 2) {
    return (
      <>
        {/* Small Import Widget - Bottom Right */}
        <div className="fixed bottom-0 right-6 z-50 w-[360px] bg-white border border-[#e4e4e4] border-b-0 rounded-t-lg shadow-[0px_-2px_4px_0px_rgba(47,47,47,0.04),0px_-4px_16px_0px_rgba(47,47,47,0.12)]">
          {/* Header */}
          <div 
            className="flex items-center gap-2 px-5 pt-4 pb-3 cursor-pointer"
            onClick={() => setIsWidgetExpanded(!isWidgetExpanded)}
          >
            <p className="flex-1 text-14 font-graphik-semibold text-[#2f2f2f]">
              Imported {importedCount} of {selectedFiles.length} files
            </p>
            <svg 
              className={`w-6 h-6 text-[#767676] transition-transform ${isWidgetExpanded ? '' : 'rotate-180'}`} 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* File List - Collapsible */}
          {isWidgetExpanded && (
            <>
              <div className="max-h-[172px] overflow-y-auto">
                {selectedFiles.map((file, index) => {
                  const isImported = fileStatuses[index] === 'imported';
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center gap-4 px-4 py-3 border-b border-[#efefef] bg-white shadow-[0px_0px_1px_0px_rgba(47,47,47,0.08),0px_0.5px_2px_0px_rgba(47,47,47,0.12)] ${
                        isImported ? 'cursor-pointer hover:bg-[#248567]/5 group' : ''
                      }`}
                      onClick={() => {
                        if (isImported && onOpenDocument) {
                          const doc = {
                            id: `bulk-${Date.now()}-${index}`,
                            name: file,
                            company: 'Bulk Import',
                            status: 'Completed',
                            date: new Date().toISOString(),
                            duration: 12,
                            autoRenew: false,
                          };
                          onOpenDocument(doc);
                        }
                      }}
                    >
                      {/* Status icon */}
                      <div className="flex-shrink-0">
                        {isImported ? (
                          <CheckmarkIcon />
                        ) : fileStatuses[index] === 'processing' ? (
                          <SpinnerIcon />
                        ) : (
                          <PendingIcon />
                        )}
                      </div>
                      
                      {/* File name */}
                      <p className={`text-14 font-graphik-regular truncate ${
                        isImported ? 'text-[#2f2f2f] group-hover:text-[#248567]' : 'text-[#2f2f2f]'
                      }`}>
                        {file}.pdf
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Footer with Cancel button */}
              <div className="px-4 py-4 border-t border-[#efefef] bg-white">
                <button
                  onClick={allImported ? () => {
                    if (onImportComplete) {
                      onImportComplete(selectedFiles);
                    } else {
                      onClose();
                    }
                  } : handleCancelImport}
                  className="w-full py-2.5 bg-[#efefef] text-14 font-graphik-semibold text-[#2f2f2f] rounded hover:bg-[#e4e4e4] transition-colors"
                >
                  {allImported ? 'View Files' : 'Cancel import'}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Toast notification */}
        {showToast && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#2F2F2F] text-white px-4 py-3 rounded-lg flex items-center gap-3 shadow-lg">
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
      </>
    );
  }

  // Step 1: Show large modal for selecting documents
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white w-[1200px] max-w-[95vw] h-[760px] max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="h-[56px] px-8 flex items-center justify-between border-b border-[#e4e4e4]">
          <span className="text-16 font-graphik-semibold text-[#181818]">
            Select documents
          </span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XIcon className="w-6 h-6 text-[#767676]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-[100px] py-8 overflow-auto">
          <div className="flex flex-col gap-6 max-w-[1000px] mx-auto w-full">
            {/* Title row with folder dropdown */}
            <div className="flex items-center justify-between">
              <h1 className="text-18 font-graphik-bold text-[#2f2f2f]">
                Upload files
              </h1>
              <button className="flex items-center gap-1.5 text-14 font-graphik-regular text-[#474747] hover:text-[#2f2f2f] transition-colors">
                <FolderOutlineIcon className="w-5 h-5" />
                <span>All documents</span>
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Document Status Section */}
            <div className="flex flex-col gap-3">
              <span className="text-12 font-graphik-semibold text-[#2f2f2f] uppercase tracking-[1.2px]">
                Document status
              </span>
              
              <div className="flex gap-3">
                {/* Completed Card */}
                <button
                  onClick={() => setSelectedStatus('Completed')}
                  className={`flex-1 p-4 rounded border-2 text-left transition-all ${
                    selectedStatus === 'Completed' 
                      ? 'border-[#248567] bg-white' 
                      : 'border-[#e4e4e4] bg-white hover:border-[#adadad]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedStatus === 'Completed' ? 'border-[#248567]' : 'border-[#adadad]'
                    }`}>
                      {selectedStatus === 'Completed' && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#248567]" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-14 font-graphik-semibold text-[#2f2f2f]">Completed</span>
                      <span className="text-13 font-graphik-regular text-[#767676]">
                        Best for legacy documents that need to be added to repository
                      </span>
                    </div>
                  </div>
                </button>

                {/* Draft Card */}
                <button
                  onClick={() => setSelectedStatus('Draft')}
                  className={`flex-1 p-4 rounded border-2 text-left transition-all ${
                    selectedStatus === 'Draft' 
                      ? 'border-[#248567] bg-white' 
                      : 'border-[#e4e4e4] bg-white hover:border-[#adadad]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      selectedStatus === 'Draft' ? 'border-[#248567]' : 'border-[#adadad]'
                    }`}>
                      {selectedStatus === 'Draft' && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#248567]" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-14 font-graphik-semibold text-[#2f2f2f]">Draft</span>
                      <span className="text-13 font-graphik-regular text-[#767676]">
                        Best for documents that need to be sent or get signed
                      </span>
                    </div>
                  </div>
                </button>

                {/* Info Alert - Purple */}
                <div className="w-[280px] bg-[#F3E8FF] rounded p-4 flex gap-3">
                  <SparkleInfoIcon className="w-4 h-4 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                  <span className="text-13 font-graphik-regular text-[#2f2f2f]">
                    We will automatically extract key terms, such as renewal dates and contract value for all completed documents
                  </span>
                </div>
              </div>
            </div>

            {/* Upload Zone */}
            <div
              className={`flex-1 min-h-[320px] border border-dashed rounded-lg flex flex-col items-center justify-center gap-6 transition-colors ${
                isDragOver ? 'border-[#248567] bg-[#248567]/5' : 'border-[#adadad] bg-white'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {/* Text */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-14 font-graphik-semibold text-[#2f2f2f]">
                  Drag and drop files
                </p>
                <p className="text-13 font-graphik-regular text-[#767676]">
                  PDF, Word, PowerPoint, JPG, PNG
                </p>
              </div>

              {/* Document illustration with upload icon - clickable */}
              <button 
                onClick={() => setIsFilePickerOpen(true)}
                className="relative w-16 h-20 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="absolute inset-0 bg-[#f8f8f8] border border-[#e4e4e4] rounded-lg shadow-sm flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#e4e4e4] flex items-center justify-center">
                    <UploadIcon className="w-5 h-5 text-[#248567]" />
                  </div>
                </div>
              </button>

              {/* Import buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsFilePickerOpen(true)}
                  className="flex items-center gap-2 px-4 py-2.5 border border-[#e4e4e4] rounded-lg hover:border-[#adadad] hover:bg-gray-50 transition-colors bg-white"
                >
                  <img src="/CLM/gmail-icon.png" alt="Gmail" className="w-5 h-5 object-contain" />
                  <span className="text-13 font-graphik-regular text-[#2f2f2f]">Import from Mail</span>
                </button>
                <button 
                  onClick={() => setIsFilePickerOpen(true)}
                  className="flex items-center gap-2 px-4 py-2.5 border border-[#e4e4e4] rounded-lg hover:border-[#adadad] hover:bg-gray-50 transition-colors bg-white"
                >
                  <img src="/CLM/gdrive-icon.png" alt="Google Drive" className="w-5 h-5 object-contain" />
                  <span className="text-13 font-graphik-regular text-[#2f2f2f]">Import from Storage</span>
                </button>
                <button 
                  onClick={() => setIsFilePickerOpen(true)}
                  className="flex items-center gap-2 px-4 py-2.5 border border-[#e4e4e4] rounded-lg hover:border-[#adadad] hover:bg-gray-50 transition-colors bg-white"
                >
                  <MoreHorizontalIcon className="w-5 h-5 text-[#767676]" />
                  <span className="text-13 font-graphik-regular text-[#2f2f2f]">More import options</span>
                </button>
              </div>
            </div>
          </div>
        </div>
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
