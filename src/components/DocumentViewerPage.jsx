import React, { useState } from 'react';
import { XIcon, ChevronDownIcon } from './Icons';

// Document icon
const DocumentIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="#248567"/>
    <path d="M14 2v6h6" fill="#1D6A52"/>
  </svg>
);

// Folder icon
const FolderSmallIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none">
    <path d="M2 4.5A1.5 1.5 0 013.5 3h3l1.5 1.5h4.5A1.5 1.5 0 0114 6v6a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 12V4.5z" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

// Cloud icon
const CloudIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none">
    <path d="M4 11a3 3 0 01-.5-5.95A4.5 4.5 0 0112.5 6a3 3 0 01.5 5.95" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Audit trail icon
const AuditIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M6 4h8M6 8h8M6 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 2h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Edit/Pencil icon
const EditIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M14.5 2.5l3 3L6 17H3v-3L14.5 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Convert to template icon
const TemplateIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 7h14M7 7v10" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Download icon
const DownloadIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M10 3v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 14v2a1 1 0 001 1h12a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Review data icon
const ReviewIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <rect x="3" y="5" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 8h8M6 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Users icon for manage recipients
const UsersIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 16v-1a4 4 0 014-4h2a4 4 0 014 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="14" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M15 11a3 3 0 013 3v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Menu/hamburger icon
const MenuIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Help icon
const HelpIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7.5 7.5a2.5 2.5 0 013.5 2.5c0 1.5-1.5 1.5-1.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="15" r="0.5" fill="currentColor"/>
  </svg>
);

// Three dots menu icon
const MoreVerticalIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="4" r="1.5" fill="currentColor"/>
    <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="10" cy="16" r="1.5" fill="currentColor"/>
  </svg>
);

// Collapse/expand icon
const CollapseIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M13 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 13l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Data/Database icon for Review data
const DataIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 5v10c0 1.66 3.13 3 7 3s7-1.34 7-3V5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 10c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Chevron up icon
const ChevronUpIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocumentViewerPage = ({ document, onClose }) => {
  const [activePanel, setActivePanel] = useState(null); // 'audit', 'edit', 'convert', 'download', 'review'
  const [documentInfoExpanded, setDocumentInfoExpanded] = useState(true);
  
  // Editable metadata fields
  const [contractValue, setContractValue] = useState('50,000');
  const [duration, setDuration] = useState(document.duration ? String(document.duration) : '12');
  const [autoRenew, setAutoRenew] = useState(document.autoRenew || false);
  const [renewalDate, setRenewalDate] = useState('');

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formatted = date.toLocaleDateString('en-US', options);
    // Add ordinal suffix
    const day = date.getDate();
    const suffix = day === 1 || day === 21 || day === 31 ? 'st' : 
                   day === 2 || day === 22 ? 'nd' : 
                   day === 3 || day === 23 ? 'rd' : 'th';
    return formatted.replace(/(\d+),/, `$1${suffix},`);
  };

  // Calculate renewal date (1 year from completed date or created date)
  const getRenewalDate = () => {
    const baseDate = document.completedDate || document.date || new Date();
    const date = new Date(baseDate);
    date.setFullYear(date.getFullYear() + 1);
    return formatDate(date);
  };

  // Panel configurations
  const panelConfig = {
    audit: {
      icon: AuditIcon,
      title: 'Audit Trail',
      description: 'View the complete history of actions taken on this document.'
    },
    edit: {
      icon: EditIcon,
      title: 'Edit Document',
      description: 'Make changes to the document content and settings.'
    },
    convert: {
      icon: TemplateIcon,
      title: 'Convert to Template',
      description: 'Save this document as a reusable template for future use.'
    },
    download: {
      icon: DownloadIcon,
      title: 'Download PDF',
      description: 'Download a PDF copy of this document to your device.'
    },
    review: {
      icon: DataIcon,
      title: 'Data',
      description: 'Fill out fields to collect document information used to create reports and filter search results.'
    }
  };

  // Render inline panel content
  const renderPanelContent = () => {
    if (!activePanel) return null;

    const config = panelConfig[activePanel];
    const IconComponent = config.icon;

    return (
      <div className="h-full flex flex-col">
        {/* Panel Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e4e4e4]">
          <div className="flex items-center gap-2">
            <IconComponent className="w-5 h-5 text-[#2f2f2f]" />
            <span className="text-14 font-graphik-semibold text-[#2f2f2f]">{config.title}</span>
          </div>
          <button onClick={() => setActivePanel(null)} className="p-1 hover:bg-gray-100 rounded">
            <XIcon className="w-5 h-5 text-[#767676]" />
          </button>
        </div>

        {/* Panel Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Description */}
          <p className="text-13 font-graphik-regular text-[#767676] mb-1">
            {config.description}
            {activePanel === 'review' && (
              <button className="text-[#248567] hover:underline ml-1">Learn more</button>
            )}
          </p>

          {/* Panel-specific content */}
          {activePanel === 'audit' && (
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                <div className="w-8 h-8 rounded-full bg-[#248567] flex items-center justify-center text-white text-12 font-graphik-semibold flex-shrink-0">KN</div>
                <div>
                  <p className="text-13 font-graphik-semibold text-[#2f2f2f]">Karan Nayee signed the document</p>
                  <p className="text-12 font-graphik-regular text-[#767676]">{formatDate(new Date())}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                <div className="w-8 h-8 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-12 font-graphik-semibold flex-shrink-0">PK</div>
                <div>
                  <p className="text-13 font-graphik-semibold text-[#2f2f2f]">Pavel Khrytisinich created the document</p>
                  <p className="text-12 font-graphik-regular text-[#767676]">{formatDate(document.date || new Date())}</p>
                </div>
              </div>
            </div>
          )}

          {activePanel === 'edit' && (
            <div className="mt-6 text-center">
              <EditIcon className="w-10 h-10 text-[#767676] mx-auto mb-3" />
              <p className="text-13 font-graphik-regular text-[#767676]">Document editing is not available in this prototype.</p>
            </div>
          )}

          {activePanel === 'convert' && (
            <div className="mt-6 text-center">
              <TemplateIcon className="w-10 h-10 text-[#767676] mx-auto mb-3" />
              <p className="text-13 font-graphik-regular text-[#767676] mb-4">This will create a new template based on this document.</p>
              <button className="px-4 py-2 bg-[#248567] text-white text-13 font-graphik-semibold rounded hover:bg-[#1D6A52] transition-colors">
                Convert to Template
              </button>
            </div>
          )}

          {activePanel === 'download' && (
            <div className="mt-6 text-center">
              <DownloadIcon className="w-10 h-10 text-[#767676] mx-auto mb-3" />
              <p className="text-13 font-graphik-regular text-[#767676] mb-4">Download "{document.name}" as PDF</p>
              <button className="px-4 py-2 bg-[#248567] text-white text-13 font-graphik-semibold rounded hover:bg-[#1D6A52] transition-colors">
                Download PDF
              </button>
            </div>
          )}

          {activePanel === 'review' && (
            <div className="mt-4">
              {/* Document Info Section */}
              <div className="border-t border-[#e4e4e4] pt-4">
                <button 
                  onClick={() => setDocumentInfoExpanded(!documentInfoExpanded)}
                  className="w-full flex items-center justify-between py-2"
                >
                  <span className="text-12 font-graphik-semibold text-[#2f2f2f] uppercase tracking-wider">Document Info</span>
                  <ChevronUpIcon className={`w-5 h-5 text-[#767676] transition-transform ${documentInfoExpanded ? '' : 'rotate-180'}`} />
                </button>

                {documentInfoExpanded && (
                  <div className="mt-3 space-y-4">
                    {/* Contract Value - editable */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Contract Value
                      </label>
                      <div className="relative">
                        <span className="text-14 font-graphik-regular text-[#767676] absolute left-3 top-1/2 -translate-y-1/2">$</span>
                        <input 
                          type="text" 
                          value={contractValue}
                          onChange={(e) => setContractValue(e.target.value)}
                          className="w-full pl-7 pr-3 py-2.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular text-[#2f2f2f]"
                        />
                      </div>
                    </div>

                    {/* Duration - editable */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Duration
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="w-full px-3 py-2.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular text-[#2f2f2f] pr-16"
                        />
                        <span className="text-14 font-graphik-regular text-[#767676] absolute right-3 top-1/2 -translate-y-1/2">months</span>
                      </div>
                    </div>

                    {/* Auto Renew - dropdown */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Auto Renew
                      </label>
                      <div className="relative">
                        <select 
                          value={autoRenew ? 'yes' : 'no'}
                          onChange={(e) => setAutoRenew(e.target.value === 'yes')}
                          className="w-full px-3 py-2.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular text-[#2f2f2f] appearance-none bg-white"
                        >
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <ChevronDownIcon className="w-5 h-5 text-[#767676] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Renewal Date - editable */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Renewal Date
                      </label>
                      <input 
                        type="date" 
                        value={renewalDate}
                        onChange={(e) => setRenewalDate(e.target.value)}
                        className="w-full px-3 py-2.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular text-[#2f2f2f]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-40 bg-[#f4f4f4] flex flex-col">
      {/* Top Header Bar */}
      <div className="bg-white border-b border-[#e4e4e4] px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-3">
            <DocumentIcon className="w-6 h-6" />
            <span className="text-14 font-graphik-semibold text-[#2f2f2f]">{document.name}</span>
            <span className="flex items-center gap-1 px-2 py-0.5 bg-[#E8F5E9] text-[#248567] text-12 font-graphik-semibold rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#248567]"></span>
              {document.status || 'Completed'}
            </span>
            <FolderSmallIcon className="w-4 h-4 text-[#767676]" />
            <CloudIcon className="w-4 h-4 text-[#767676]" />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 text-13 font-graphik-regular text-[#2f2f2f] hover:bg-gray-100 rounded">
              Invite
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            <button className="px-3 py-1.5 bg-[#f4f4f4] text-13 font-graphik-semibold text-[#2f2f2f] rounded hover:bg-[#e4e4e4]">
              Edit document
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <HelpIcon className="w-5 h-5 text-[#767676]" />
            </button>
            <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded">
              <XIcon className="w-5 h-5 text-[#767676]" />
            </button>
          </div>
        </div>
        
        {/* Menu items - below document name, left aligned */}
        <div className="flex items-center gap-4 mt-1 ml-9">
          <button className="text-13 font-graphik-regular text-[#2f2f2f] hover:text-[#248567]">File</button>
          <button className="text-13 font-graphik-regular text-[#2f2f2f] hover:text-[#248567]">View</button>
        </div>
      </div>

      {/* Completion banner */}
      <div className="h-10 bg-white border-b border-[#e4e4e4] flex items-center justify-center gap-4">
        <span className="text-13 font-graphik-regular text-[#2f2f2f]">
          It's a wrap! This document has been completed by all participants.
        </span>
        <button className="px-3 py-1 bg-[#248567] text-white text-12 font-graphik-semibold rounded hover:bg-[#1D6A52]">
          Download
        </button>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Document preview area */}
        <div className="flex-1 flex items-center justify-center p-8 mt-4 overflow-auto">
          <div className="bg-white w-full max-w-[800px] min-h-[1000px] shadow-lg p-16">
            {/* PandaDoc logo */}
            <div className="mt-16 mb-48">
              <img src="/CLM/pandadoc-logo.png" alt="PandaDoc" className="h-20 object-contain" />
            </div>

            {/* Document title */}
            <h1 className="text-48 font-graphik-bold text-[#2f2f2f] leading-tight mb-64">
              Non Disclosure<br />Agreement Template
            </h1>

            {/* Prepared for */}
            <p className="text-16 font-graphik-semibold text-[#2f2f2f]">Prepared for:</p>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-[320px] bg-white border-l border-[#e4e4e4] overflow-y-auto">
          {activePanel ? (
            // Show panel content
            renderPanelContent()
          ) : (
            // Show default sidebar content
            <div className="p-4">
              {/* Status badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#248567] text-white text-13 font-graphik-semibold rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  Completed
                </span>
              </div>

              {/* Status message */}
              <p className="text-13 font-graphik-regular text-[#767676] mb-6">
                It's a wrap! This document has been completed by all participants.
              </p>

              {/* Action links */}
              <div className="space-y-1 mb-6">
                <button 
                  onClick={() => setActivePanel('audit')}
                  className="w-full flex items-center gap-3 px-2 py-2 text-left hover:bg-gray-50 rounded transition-colors"
                >
                  <AuditIcon className="w-5 h-5 text-[#767676]" />
                  <span className="text-14 font-graphik-regular text-[#2f2f2f]">Audit trail</span>
                </button>
                <button 
                  onClick={() => setActivePanel('edit')}
                  className="w-full flex items-center gap-3 px-2 py-2 text-left hover:bg-gray-50 rounded transition-colors"
                >
                  <EditIcon className="w-5 h-5 text-[#767676]" />
                  <span className="text-14 font-graphik-regular text-[#2f2f2f]">Edit document</span>
                </button>
                <button 
                  onClick={() => setActivePanel('convert')}
                  className="w-full flex items-center gap-3 px-2 py-2 text-left hover:bg-gray-50 rounded transition-colors"
                >
                  <TemplateIcon className="w-5 h-5 text-[#767676]" />
                  <span className="text-14 font-graphik-regular text-[#2f2f2f]">Convert to template</span>
                </button>
                <button 
                  onClick={() => setActivePanel('download')}
                  className="w-full flex items-center gap-3 px-2 py-2 text-left hover:bg-gray-50 rounded transition-colors"
                >
                  <DownloadIcon className="w-5 h-5 text-[#767676]" />
                  <span className="text-14 font-graphik-regular text-[#2f2f2f]">Download PDF</span>
                </button>
                <button 
                  onClick={() => setActivePanel('review')}
                  className="w-full flex items-center gap-3 px-2 py-2 text-left hover:bg-gray-50 rounded transition-colors"
                >
                  <ReviewIcon className="w-5 h-5 text-[#767676]" />
                  <span className="text-14 font-graphik-regular text-[#2f2f2f]">Review data</span>
                </button>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-y-4 mb-6 pt-4 border-t border-[#e4e4e4]">
                <div>
                  <p className="text-12 font-graphik-regular text-[#767676] mb-1">Owner</p>
                  <p className="text-13 font-graphik-regular text-[#2f2f2f]">{document.owner || 'Pavel Khrytisinich'}</p>
                </div>
                <div>
                  <p className="text-12 font-graphik-regular text-[#767676] mb-1">Created</p>
                  <p className="text-13 font-graphik-regular text-[#2f2f2f]">{formatDate(document.date)}</p>
                </div>
                <div>
                  <p className="text-12 font-graphik-regular text-[#767676] mb-1">Folder</p>
                  <p className="text-13 font-graphik-regular text-[#2f2f2f]">All documents</p>
                </div>
                <div>
                  <p className="text-12 font-graphik-regular text-[#767676] mb-1">Sent</p>
                  <p className="text-13 font-graphik-regular text-[#2f2f2f]">{formatDate(document.sentDate || document.date)}</p>
                </div>
                <div>
                  <p className="text-12 font-graphik-regular text-[#767676] mb-1">Completed</p>
                  <p className="text-13 font-graphik-regular text-[#2f2f2f]">{formatDate(document.completedDate || document.date)}</p>
                </div>
                <div>
                  <p className="text-12 font-graphik-regular text-[#767676] mb-1">Renewal date</p>
                  <p className="text-13 font-graphik-regular text-[#2f2f2f]">{getRenewalDate()}</p>
                </div>
              </div>

              {/* Recipients */}
              <div className="pt-4 border-t border-[#e4e4e4]">
                <p className="text-12 font-graphik-semibold text-[#767676] uppercase tracking-wider mb-3">Recipients</p>
                
                {/* Recipient 1 */}
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#248567] flex items-center justify-center text-white text-12 font-graphik-semibold">
                      KN
                    </div>
                    <div>
                      <p className="text-13 font-graphik-regular text-[#2f2f2f]">
                        Karan Nayee <span className="text-[#248567]">Signed</span>
                      </p>
                      <p className="text-12 font-graphik-regular text-[#767676]">karan.nayee@pandadoc.com</p>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVerticalIcon className="w-4 h-4 text-[#767676]" />
                  </button>
                </div>

                {/* Recipient 2 */}
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-12 font-graphik-semibold">
                      <span className="text-10">👤</span>
                    </div>
                    <div>
                      <p className="text-13 font-graphik-regular text-[#2f2f2f]">
                        test <span className="text-[#767676]">CC</span>
                      </p>
                      <p className="text-12 font-graphik-regular text-[#767676]">1 recipient</p>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVerticalIcon className="w-4 h-4 text-[#767676]" />
                  </button>
                </div>

                {/* Manage recipients */}
                <button className="flex items-center gap-2 mt-3 text-13 font-graphik-regular text-[#767676] hover:text-[#2f2f2f]">
                  <UsersIcon className="w-5 h-5" />
                  Manage recipients
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentViewerPage;
