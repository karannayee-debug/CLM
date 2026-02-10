import React, { useState } from 'react';
import { XIcon, ChevronDownIcon } from './Icons';
import sparkleIcon from '../sparkle (1).svg';

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

// AI Sparkle icon (from asset)
const AIStar = ({ className = "" }) => (
  <img src={sparkleIcon} alt="" className={`w-6 h-6 inline-block flex-shrink-0 ${className}`} />
);

// Review data icon (database/data stack icon)
const ReviewIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21C9.48333 21 7.35417 20.6125 5.6125 19.8375C3.87083 19.0625 3 18.1167 3 17V7C3 5.9 3.87917 4.95833 5.6375 4.175C7.39583 3.39167 9.51667 3 12 3C14.4833 3 16.6042 3.39167 18.3625 4.175C20.1208 4.95833 21 5.9 21 7V17C21 18.1167 20.1292 19.0625 18.3875 19.8375C16.6458 20.6125 14.5167 21 12 21ZM12 9.025C13.4833 9.025 14.975 8.8125 16.475 8.3875C17.975 7.9625 18.8167 7.50833 19 7.025C18.8167 6.54167 17.9792 6.08333 16.4875 5.65C14.9958 5.21667 13.5 5 12 5C10.4833 5 8.99583 5.2125 7.5375 5.6375C6.07917 6.0625 5.23333 6.525 5 7.025C5.23333 7.525 6.07917 7.98333 7.5375 8.4C8.99583 8.81667 10.4833 9.025 12 9.025ZM12 14C12.7 14 13.375 13.9667 14.025 13.9C14.675 13.8333 15.2958 13.7375 15.8875 13.6125C16.4792 13.4875 17.0375 13.3333 17.5625 13.15C18.0875 12.9667 18.5667 12.7583 19 12.525V9.525C18.5667 9.75833 18.0875 9.96667 17.5625 10.15C17.0375 10.3333 16.4792 10.4875 15.8875 10.6125C15.2958 10.7375 14.675 10.8333 14.025 10.9C13.375 10.9667 12.7 11 12 11C11.3 11 10.6167 10.9667 9.95 10.9C9.28333 10.8333 8.65417 10.7375 8.0625 10.6125C7.47083 10.4875 6.91667 10.3333 6.4 10.15C5.88333 9.96667 5.41667 9.75833 5 9.525V12.525C5.41667 12.7583 5.88333 12.9667 6.4 13.15C6.91667 13.3333 7.47083 13.4875 8.0625 13.6125C8.65417 13.7375 9.28333 13.8333 9.95 13.9C10.6167 13.9667 11.3 14 12 14ZM12 19C12.7667 19 13.5458 18.9417 14.3375 18.825C15.1292 18.7083 15.8583 18.5542 16.525 18.3625C17.1917 18.1708 17.75 17.9542 18.2 17.7125C18.65 17.4708 18.9167 17.225 19 16.975V14.525C18.5667 14.7583 18.0875 14.9667 17.5625 15.15C17.0375 15.3333 16.4792 15.4875 15.8875 15.6125C15.2958 15.7375 14.675 15.8333 14.025 15.9C13.375 15.9667 12.7 16 12 16C11.3 16 10.6167 15.9667 9.95 15.9C9.28333 15.8333 8.65417 15.7375 8.0625 15.6125C7.47083 15.4875 6.91667 15.3333 6.4 15.15C5.88333 14.9667 5.41667 14.7583 5 14.525V17C5.08333 17.25 5.34583 17.4917 5.7875 17.725C6.22917 17.9583 6.78333 18.1708 7.45 18.3625C8.11667 18.5542 8.85 18.7083 9.65 18.825C10.45 18.9417 11.2333 19 12 19Z"/>
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
  
  // Additional fields for Review data panel
  const [documentType, setDocumentType] = useState('Contract');
  const [currency, setCurrency] = useState('USD');
  const [paymentTerm, setPaymentTerm] = useState('Net 30');
  const [venue, setVenue] = useState('');
  
  // Section expansion state
  const [customSectionExpanded, setCustomSectionExpanded] = useState(true);
  const [systemSectionExpanded, setSystemSectionExpanded] = useState(true);

  // Track which fields have been manually edited (hide sparkle icon once edited)
  const [manuallyEditedFields, setManuallyEditedFields] = useState(() => new Set());

  const markFieldManuallyEdited = (fieldKey) => {
    setManuallyEditedFields((prev) => new Set(prev).add(fieldKey));
  };

  const showSparkle = (fieldKey, hasValue) => hasValue && !manuallyEditedFields.has(fieldKey);

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
      description: 'Review AI-extracted data to make filtering and reporting more accurate. '
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
              <a href="#" className="text-[#248567] hover:underline ml-0">Learn more</a>
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
              {/* System Section */}
              <div className="border-t border-[#e4e4e4] pt-4">
                <button 
                  onClick={() => setSystemSectionExpanded(!systemSectionExpanded)}
                  className="w-full flex items-center justify-between py-2"
                >
                  <span className="text-11 font-graphik-semibold text-[#767676] uppercase tracking-wider">System</span>
                  <ChevronUpIcon className={`w-4 h-4 text-[#767676] transition-transform ${systemSectionExpanded ? '' : 'rotate-180'}`} />
                </button>

                {systemSectionExpanded && (
                  <div className="mt-3 space-y-4">
                    {/* Document Type */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Document Type
                      </label>
                      <div className="relative flex items-center border border-[#e4e4e4] rounded bg-white">
                        {showSparkle('documentType', !!documentType) && <AIStar className="ml-3" />}
                        <select 
                          value={documentType}
                          onChange={(e) => { markFieldManuallyEdited('documentType'); setDocumentType(e.target.value); }}
                          className={`flex-1 ${documentType ? 'pl-2' : 'pl-3'} pr-8 py-2.5 text-14 font-graphik-regular text-[#2f2f2f] appearance-none bg-transparent border-0 outline-none`}
                        >
                          <option value="Contract">Contract</option>
                          <option value="NDA">NDA</option>
                          <option value="Proposal">Proposal</option>
                          <option value="Agreement">Agreement</option>
                          <option value="Invoice">Invoice</option>
                        </select>
                        <ChevronDownIcon className="w-5 h-5 text-[#767676] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Duration (Term) */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Duration (Term)
                      </label>
                      <div className="relative flex items-center border border-[#e4e4e4] rounded bg-white">
                        {showSparkle('duration', !!duration) && <AIStar className="ml-3" />}
                        <input 
                          type="text" 
                          value={duration}
                          onChange={(e) => { markFieldManuallyEdited('duration'); setDuration(e.target.value); }}
                          className={`flex-1 ${duration ? 'pl-2' : 'pl-3'} pr-3 py-2.5 text-14 font-graphik-regular text-[#2f2f2f] border-0 outline-none bg-transparent`}
                        />
                        <span className="text-14 font-graphik-regular text-[#767676] pr-3">months</span>
                      </div>
                    </div>

                    {/* Currency */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Currency
                      </label>
                      <div className="relative flex items-center border border-[#e4e4e4] rounded bg-white">
                        {showSparkle('currency', !!currency) && <AIStar className="ml-3" />}
                        <select 
                          value={currency}
                          onChange={(e) => { markFieldManuallyEdited('currency'); setCurrency(e.target.value); }}
                          className={`flex-1 ${currency ? 'pl-2' : 'pl-3'} pr-8 py-2.5 text-14 font-graphik-regular text-[#2f2f2f] appearance-none bg-transparent border-0 outline-none`}
                        >
                          <option value="USD">USD - US Dollar</option>
                          <option value="EUR">EUR - Euro</option>
                          <option value="GBP">GBP - British Pound</option>
                          <option value="CAD">CAD - Canadian Dollar</option>
                          <option value="AUD">AUD - Australian Dollar</option>
                        </select>
                        <ChevronDownIcon className="w-5 h-5 text-[#767676] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Payment Term */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Payment Term
                      </label>
                      <div className="relative flex items-center border border-[#e4e4e4] rounded bg-white">
                        {showSparkle('paymentTerm', !!paymentTerm) && <AIStar className="ml-3" />}
                        <select 
                          value={paymentTerm}
                          onChange={(e) => { markFieldManuallyEdited('paymentTerm'); setPaymentTerm(e.target.value); }}
                          className={`flex-1 ${paymentTerm ? 'pl-2' : 'pl-3'} pr-8 py-2.5 text-14 font-graphik-regular text-[#2f2f2f] appearance-none bg-transparent border-0 outline-none`}
                        >
                          <option value="Net 15">Net 15</option>
                          <option value="Net 30">Net 30</option>
                          <option value="Net 45">Net 45</option>
                          <option value="Net 60">Net 60</option>
                          <option value="Net 90">Net 90</option>
                          <option value="Due on Receipt">Due on Receipt</option>
                        </select>
                        <ChevronDownIcon className="w-5 h-5 text-[#767676] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Venue */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Venue
                      </label>
                      <div className="relative flex items-center border border-[#e4e4e4] rounded bg-white">
                        {showSparkle('venue', !!venue) && <AIStar className="ml-3" />}
                        <input 
                          type="text" 
                          value={venue}
                          onChange={(e) => { markFieldManuallyEdited('venue'); setVenue(e.target.value); }}
                          placeholder="Enter venue/jurisdiction"
                          className={`flex-1 ${venue ? 'pl-2' : 'pl-3'} pr-3 py-2.5 text-14 font-graphik-regular text-[#2f2f2f] border-0 outline-none bg-transparent`}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Custom Section */}
              <div className="border-t border-[#e4e4e4] pt-4 mt-4">
                <button 
                  onClick={() => setCustomSectionExpanded(!customSectionExpanded)}
                  className="w-full flex items-center justify-between py-2"
                >
                  <span className="text-11 font-graphik-semibold text-[#767676] uppercase tracking-wider">Custom</span>
                  <ChevronUpIcon className={`w-4 h-4 text-[#767676] transition-transform ${customSectionExpanded ? '' : 'rotate-180'}`} />
                </button>

                {customSectionExpanded && (
                  <div className="mt-3 space-y-4">
                    {/* Contract Value */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Contract Value
                      </label>
                      <div className="relative flex items-center border border-[#e4e4e4] rounded bg-white">
                        <span className="text-14 font-graphik-regular text-[#767676] pl-3">$</span>
                        <input 
                          type="text" 
                          value={contractValue}
                          onChange={(e) => { markFieldManuallyEdited('contractValue'); setContractValue(e.target.value); }}
                          className="flex-1 px-1 py-2.5 text-14 font-graphik-regular text-[#2f2f2f] border-0 outline-none bg-transparent"
                        />
                      </div>
                    </div>

                    {/* Auto Renew */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Auto Renew
                      </label>
                      <div className="relative flex items-center border border-[#e4e4e4] rounded bg-white">
                        <select 
                          value={autoRenew ? 'yes' : 'no'}
                          onChange={(e) => { markFieldManuallyEdited('autoRenew'); setAutoRenew(e.target.value === 'yes'); }}
                          className="flex-1 pl-3 pr-8 py-2.5 text-14 font-graphik-regular text-[#2f2f2f] appearance-none bg-transparent border-0 outline-none"
                        >
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <ChevronDownIcon className="w-5 h-5 text-[#767676] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Renewal Date */}
                    <div>
                      <label className="text-[10px] font-graphik-regular text-[#767676] uppercase tracking-wider block mb-1.5">
                        Renewal Date
                      </label>
                      <div className="relative flex items-center border border-[#e4e4e4] rounded bg-white">
                        <input 
                          type="date" 
                          value={renewalDate}
                          onChange={(e) => { markFieldManuallyEdited('renewalDate'); setRenewalDate(e.target.value); }}
                          className="flex-1 pl-3 pr-3 py-2.5 text-14 font-graphik-regular text-[#2f2f2f] border-0 outline-none bg-transparent"
                        />
                      </div>
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
