import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

// Icons for the reports page
const ReportsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M2 2h2v14h14v2H2V2zm4 8h2v6H6v-6zm4-4h2v10h-2V6zm4 2h2v8h-2V8z" fill="currentColor"/>
  </svg>
);

const WorkflowIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M3 4a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm8 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V9zM3 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" fill="currentColor"/>
  </svg>
);

const DocumentsOverviewIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M3 3h14v2H3V3zm0 4h14v2H3V7zm0 4h10v2H3v-2zm0 4h10v2H3v-2z" fill="currentColor"/>
  </svg>
);

const LeaderboardIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M4 12h3v6H4v-6zm5-4h3v10H9V8zm5-6h3v16h-3V2z" fill="currentColor"/>
  </svg>
);

const EfficiencyIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-9H9v4l3.5 2.1.5-.82-3-1.78V7z" fill="currentColor"/>
  </svg>
);

const TestIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M9 2h2v2H9V2zM5 4h2v2H5V4zm8 0h2v2h-2V4zM4 8v10h12V8H4zm10 8H6v-6h8v6z" fill="currentColor"/>
  </svg>
);

const UsageIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM4 10a6 6 0 0112 0H4z" fill="currentColor"/>
  </svg>
);

const DataIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <ellipse cx="10" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M3 5v10c0 1.66 3.13 3 7 3s7-1.34 7-3V5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M3 10c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

const PlusIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M10 4v12m-6-6h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const HelpIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M7.5 7.5a2.5 2.5 0 013.5 2.5c0 1.5-1.5 1.5-1.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="15" r="0.5" fill="currentColor"/>
  </svg>
);

const ArrowUpRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M6 14l8-8m0 0H7m7 0v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ReportsContent = () => {
  const [activeView, setActiveView] = useState('workflow-overview');
  const [dateRange, setDateRange] = useState({ start: '2026-01-03', end: '2026-02-03' });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [workspaceFilter, setWorkspaceFilter] = useState('all');
  const [showWorkspaceDropdown, setShowWorkspaceDropdown] = useState(false);
  const [includeDeleted, setIncludeDeleted] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    general: true,
    dataAnalytics: true,
    contentLibrary: true,
    documentData: true
  });

  // Document Data view state
  const [docDataCreatedFilter, setDocDataCreatedFilter] = useState('created');
  const [showDocDataCreatedDropdown, setShowDocDataCreatedDropdown] = useState(false);
  const [docDataTimeFilter, setDocDataTimeFilter] = useState('any');
  const [showDocDataTimeDropdown, setShowDocDataTimeDropdown] = useState(false);
  const [docDataTypeFilter, setDocDataTypeFilter] = useState('all');
  const [showDocDataTypeDropdown, setShowDocDataTypeDropdown] = useState(false);
  const [docDataIncludeDeleted, setDocDataIncludeDeleted] = useState(false);
  const [docDataSortOrder, setDocDataSortOrder] = useState('asc');
  const [showDocDataMoreDropdown, setShowDocDataMoreDropdown] = useState(false);
  const [docDataVisibleFilters, setDocDataVisibleFilters] = useState([]);
  const [docDataAutoRenewFilter, setDocDataAutoRenewFilter] = useState(null);
  const [showDocDataAutoRenewDropdown, setShowDocDataAutoRenewDropdown] = useState(false);
  const [docDataDurationFilter, setDocDataDurationFilter] = useState({ from: '', to: '' });
  const [showDocDataDurationDropdown, setShowDocDataDurationDropdown] = useState(false);
  const [docDataRenewalDateFilter, setDocDataRenewalDateFilter] = useState(null);
  const [showDocDataRenewalDateDropdown, setShowDocDataRenewalDateDropdown] = useState(false);
  const [docDataSignedDateFilter, setDocDataSignedDateFilter] = useState(null);
  const [showDocDataSignedDateDropdown, setShowDocDataSignedDateDropdown] = useState(false);
  const [docDataSignedDateCustom, setDocDataSignedDateCustom] = useState({ from: '', to: '' });
  const [showSignedDateCustomPicker, setShowSignedDateCustomPicker] = useState(false);
  const [docDataTimeCustom, setDocDataTimeCustom] = useState({ from: '', to: '' });
  const [showTimeCustomPicker, setShowTimeCustomPicker] = useState(false);
  const [showDocDataOptionsMenu, setShowDocDataOptionsMenu] = useState(false);
  const [showCreateReportModal, setShowCreateReportModal] = useState(false);
  const [newReportName, setNewReportName] = useState('');
  const [newReportDescription, setNewReportDescription] = useState('');
  const [savedReports, setSavedReports] = useState([]);

  // Additional filters for More dropdown
  const docDataAdditionalFilters = [
    { id: 'auto-renew', label: 'Auto Renew' },
    { id: 'document-type-extra', label: 'Document Type' },
    { id: 'duration', label: 'Duration (Term)' },
    { id: 'renewal-date', label: 'Renewal Date' },
    { id: 'signed-date', label: 'Signed Date' },
  ];

  // Customize panel state
  const [showCustomizePanel, setShowCustomizePanel] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(['name']);
  const [columnSearch, setColumnSearch] = useState('');
  const [expandedColumnSections, setExpandedColumnSections] = useState({
    documentData: true,
    dataFields: true
  });

  // Available columns for customization
  const availableColumns = {
    documentData: [
      { id: 'document-type', label: 'Document type' },
      { id: 'status', label: 'Status' },
      { id: 'created-date', label: 'Created date' },
      { id: 'signed-date', label: 'Signed date' },
      { id: 'owner', label: 'Owner' },
    ],
    dataFields: [
      { id: 'auto-renew', label: 'Auto Renew' },
      { id: 'duration', label: 'Duration (Term)' },
      { id: 'renewal-date', label: 'Renewal Date' },
      { id: 'contract-value', label: 'Contract Value' },
    ]
  };

  const toggleColumn = (columnId) => {
    if (visibleColumns.includes(columnId)) {
      setVisibleColumns(visibleColumns.filter(c => c !== columnId));
    } else {
      setVisibleColumns([...visibleColumns, columnId]);
    }
  };

  const clearAllColumns = () => {
    setVisibleColumns(['name']);
  };

  // Mock document data with additional fields
  const documentDataList = [
    { id: 1, name: 'Conversion Rate Optimization Proposal', documentType: 'Proposal', status: 'Completed', createdDate: 'Jan 15, 2026', signedDate: 'Jan 20, 2026', owner: 'John Smith', autoRenew: 'Yes', duration: '12 months', renewalDate: 'Jan 15, 2027', contractValue: '$50,000' },
    { id: 2, name: 'FR M0001-452', documentType: 'Contract', status: 'Sent', createdDate: 'Jan 18, 2026', signedDate: '-', owner: 'Sarah Johnson', autoRenew: 'No', duration: '24 months', renewalDate: 'Jan 18, 2028', contractValue: '$25,000' },
    { id: 3, name: 'FR M0001-4613', documentType: 'NDA', status: 'Viewed', createdDate: 'Jan 20, 2026', signedDate: '-', owner: 'Mike Wilson', autoRenew: 'Yes', duration: '36 months', renewalDate: 'Jan 20, 2029', contractValue: '$10,000' },
    { id: 4, name: 'Non-Disclosure Agreement for Brilliant Moments Inc.', documentType: 'NDA', status: 'Completed', createdDate: 'Jan 22, 2026', signedDate: 'Jan 25, 2026', owner: 'Emily Davis', autoRenew: 'No', duration: '12 months', renewalDate: 'Jan 22, 2027', contractValue: '$5,000' },
    { id: 5, name: 'Equipment Purchase Proposal for Tresor Media', documentType: 'Proposal', status: 'Draft', createdDate: 'Jan 25, 2026', signedDate: '-', owner: 'John Smith', autoRenew: 'Yes', duration: '6 months', renewalDate: 'Jul 25, 2026', contractValue: '$75,000' },
    { id: 6, name: 'Proposal for Kraftwerk Events', documentType: 'Proposal', status: 'Completed', createdDate: 'Jan 28, 2026', signedDate: 'Feb 1, 2026', owner: 'Sarah Johnson', autoRenew: 'No', duration: '18 months', renewalDate: 'Jul 28, 2027', contractValue: '$35,000' },
  ];

  // Get column value from document
  const getColumnValue = (doc, columnId) => {
    switch (columnId) {
      case 'document-type': return doc.documentType;
      case 'status': return doc.status;
      case 'created-date': return doc.createdDate;
      case 'signed-date': return doc.signedDate;
      case 'owner': return doc.owner;
      case 'auto-renew': return doc.autoRenew;
      case 'duration': return doc.duration;
      case 'renewal-date': return doc.renewalDate;
      case 'contract-value': return doc.contractValue;
      default: return '';
    }
  };

  // Get column label
  const getColumnLabel = (columnId) => {
    const allColumns = [...availableColumns.documentData, ...availableColumns.dataFields];
    const column = allColumns.find(c => c.id === columnId);
    return column ? column.label : columnId;
  };

  // Mock data for charts
  const documentProgressData = [
    { date: '3 Jan', created: 25, sent: 20, viewed: 15, completed: 10 },
    { date: '6 Jan', created: 30, sent: 25, viewed: 18, completed: 12 },
    { date: '9 Jan', created: 28, sent: 22, viewed: 16, completed: 11 },
    { date: '12 Jan', created: 35, sent: 28, viewed: 20, completed: 14 },
    { date: '15 Jan', created: 40, sent: 32, viewed: 24, completed: 16 },
    { date: '18 Jan', created: 45, sent: 38, viewed: 28, completed: 20 },
    { date: '21 Jan', created: 55, sent: 45, viewed: 35, completed: 25 },
    { date: '24 Jan', created: 70, sent: 58, viewed: 45, completed: 32 },
    { date: '27 Jan', created: 85, sent: 70, viewed: 55, completed: 40 },
    { date: '30 Jan', created: 95, sent: 78, viewed: 62, completed: 45 },
    { date: '2 Feb', created: 120, sent: 95, viewed: 75, completed: 55 },
  ];

  const statusTransitionData = [
    { date: '3 Jan', createdToSent: 0.5, sentToViewed: 0.3, viewedToCompleted: 0.2, createdToCompleted: 0.1 },
    { date: '6 Jan', createdToSent: 0.8, sentToViewed: 0.5, viewedToCompleted: 0.3, createdToCompleted: 0.2 },
    { date: '9 Jan', createdToSent: 0.6, sentToViewed: 0.4, viewedToCompleted: 0.2, createdToCompleted: 0.1 },
    { date: '12 Jan', createdToSent: 1.0, sentToViewed: 0.7, viewedToCompleted: 0.4, createdToCompleted: 0.3 },
    { date: '15 Jan', createdToSent: 1.2, sentToViewed: 0.8, viewedToCompleted: 0.5, createdToCompleted: 0.4 },
    { date: '18 Jan', createdToSent: 1.5, sentToViewed: 1.0, viewedToCompleted: 0.6, createdToCompleted: 0.5 },
    { date: '21 Jan', createdToSent: 2.0, sentToViewed: 1.3, viewedToCompleted: 0.8, createdToCompleted: 0.6 },
    { date: '24 Jan', createdToSent: 2.5, sentToViewed: 1.8, viewedToCompleted: 1.2, createdToCompleted: 0.9 },
    { date: '27 Jan', createdToSent: 3.5, sentToViewed: 2.5, viewedToCompleted: 1.8, createdToCompleted: 1.2 },
    { date: '30 Jan', createdToSent: 3.0, sentToViewed: 2.2, viewedToCompleted: 1.5, createdToCompleted: 1.0 },
    { date: '2 Feb', createdToSent: 2.8, sentToViewed: 2.0, viewedToCompleted: 1.3, createdToCompleted: 0.8 },
  ];

  const formatDateRange = () => {
    const start = new Date(dateRange.start);
    const end = new Date(dateRange.end);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return `${start.toLocaleDateString('en-US', options)} — ${end.toLocaleDateString('en-US', options)}`;
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sidebarItems = {
    general: [
      { id: 'workflow-overview', label: 'Workflow overview', icon: WorkflowIcon },
      { id: 'documents-overview', label: 'Documents overview', icon: DocumentsOverviewIcon },
    ],
    dataAnalytics: [
      { id: 'leaderboard', label: 'Leaderboard', icon: LeaderboardIcon },
      { id: 'document-efficiency', label: 'Document efficiency', icon: EfficiencyIcon },
      { id: 'template-efficiency', label: 'Template efficiency', icon: EfficiencyIcon },
      { id: 'test', label: 'test', icon: TestIcon },
    ],
    contentLibrary: [
      { id: 'usage-analytics', label: 'Usage analytics', icon: UsageIcon },
    ],
    documentData: [
      { id: 'document-data', label: 'Document data', icon: DataIcon },
    ],
  };

  const renderWorkflowOverview = () => (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-24 font-graphik-semibold text-[#2f2f2f]">Workflow overview</h1>
        <a href="#" className="flex items-center gap-1 text-14 font-graphik-regular text-[#2f2f2f] hover:text-[#248567]">
          Help center
          <ArrowUpRightIcon className="w-4 h-4" />
        </a>
      </div>
      <p className="text-14 font-graphik-regular text-[#767676] mb-6">
        Workflow overview charts help you better understand your document funnel. To learn how each metric is calculated, please visit our{' '}
        <a href="#" className="text-[#248567] hover:underline">Help Center</a>.
      </p>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {/* Date Range Picker */}
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-[#e4e4e4] rounded-md text-14 font-graphik-regular text-[#2f2f2f] hover:border-[#248567]"
            >
              {formatDateRange()}
              <ChevronDownIcon className="w-4 h-4 text-[#767676]" />
            </button>
            {showDatePicker && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 p-4 min-w-[280px]">
                <div className="space-y-3">
                  <div>
                    <label className="text-12 font-graphik-regular text-[#767676] block mb-1">Start Date</label>
                    <input
                      type="date"
                      value={dateRange.start}
                      onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                      className="w-full px-3 py-2 border border-[#e4e4e4] rounded text-14"
                    />
                  </div>
                  <div>
                    <label className="text-12 font-graphik-regular text-[#767676] block mb-1">End Date</label>
                    <input
                      type="date"
                      value={dateRange.end}
                      onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                      className="w-full px-3 py-2 border border-[#e4e4e4] rounded text-14"
                    />
                  </div>
                  <button
                    onClick={() => setShowDatePicker(false)}
                    className="w-full px-4 py-2 bg-[#248567] text-white text-14 font-graphik-semibold rounded hover:bg-[#1D6A52]"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Workspace Filter */}
          <div className="relative">
            <button
              onClick={() => setShowWorkspaceDropdown(!showWorkspaceDropdown)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-[#e4e4e4] rounded-md text-14 font-graphik-regular text-[#2f2f2f] hover:border-[#248567]"
            >
              Filter by workspace
              <ChevronDownIcon className="w-4 h-4 text-[#767676]" />
            </button>
            {showWorkspaceDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[200px]">
                <div className="py-1">
                  {['all', 'Acme Sales', 'Marketing', 'Engineering'].map((workspace) => (
                    <button
                      key={workspace}
                      onClick={() => {
                        setWorkspaceFilter(workspace);
                        setShowWorkspaceDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-14 font-graphik-regular hover:bg-gray-50 ${workspaceFilter === workspace ? 'text-[#248567] bg-[#248567]/5' : 'text-[#2f2f2f]'}`}
                    >
                      {workspace === 'all' ? 'All workspaces' : workspace}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Include Deleted Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-14 font-graphik-regular text-[#2f2f2f]">Include deleted documents</span>
          <button
            onClick={() => setIncludeDeleted(!includeDeleted)}
            className={`relative w-11 h-6 rounded-full transition-colors ${includeDeleted ? 'bg-[#248567]' : 'bg-gray-300'}`}
          >
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${includeDeleted ? 'left-6' : 'left-1'}`} />
          </button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Document Progress Chart */}
        <div className="col-span-2 bg-white border border-[#e4e4e4] rounded-lg p-6">
          <h2 className="text-18 font-graphik-semibold text-[#2f2f2f] mb-1">Document progress</h2>
          <p className="text-13 font-graphik-regular text-[#767676] mb-4">
            Track how documents are moving through the workflow funnel.
          </p>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={documentProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e4" />
                <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#767676' }} />
                <YAxis tick={{ fontSize: 12, fill: '#767676' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="created" stroke="#9CA3AF" strokeWidth={2} dot={{ r: 3 }} name="Created" />
                <Line type="monotone" dataKey="sent" stroke="#3B82F6" strokeWidth={2} dot={{ r: 3 }} name="Sent" />
                <Line type="monotone" dataKey="viewed" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 3 }} name="Viewed" />
                <Line type="monotone" dataKey="completed" stroke="#248567" strokeWidth={2} dot={{ r: 3 }} name="Completed" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Total Document Progress */}
        <div className="bg-white border border-[#e4e4e4] rounded-lg p-6">
          <h2 className="text-18 font-graphik-semibold text-[#2f2f2f] mb-4">Total document progress</h2>
          <div className="text-right mb-4">
            <span className="text-48 font-graphik-bold text-[#248567]">18.0%</span>
            <p className="text-13 font-graphik-regular text-[#767676]">close rate</p>
          </div>
          <div className="mb-4">
            <p className="text-13 font-graphik-regular text-[#767676] mb-1">Documents</p>
            <p className="text-24 font-graphik-semibold text-[#2f2f2f]">745</p>
          </div>
          <div className="flex items-end gap-1 h-20 mb-4">
            <div className="flex-1 bg-[#9CA3AF] rounded-t" style={{ height: '20%' }}></div>
            <div className="flex-1 bg-[#3B82F6] rounded-t" style={{ height: '60%' }}></div>
            <div className="flex-1 bg-[#8B5CF6] rounded-t" style={{ height: '40%' }}></div>
            <div className="flex-1 bg-[#248567] rounded-t" style={{ height: '25%' }}></div>
          </div>
          <div className="flex items-center justify-between text-11 font-graphik-regular text-[#767676]">
            <span>9%</span>
            <span className="text-[#3B82F6] font-graphik-semibold">74</span>
            <span>27%</span>
            <span>20</span>
            <span>70%</span>
            <span>14</span>
          </div>
          <div className="flex items-center gap-4 mt-4 text-12 font-graphik-regular">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#9CA3AF] rounded-full"></span> Created</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#3B82F6] rounded-full"></span> Sent</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#8B5CF6] rounded-full"></span> Viewed</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#248567] rounded-full"></span> Completed</span>
          </div>
        </div>

        {/* Status Transition Time Chart */}
        <div className="col-span-2 bg-white border border-[#e4e4e4] rounded-lg p-6">
          <h2 className="text-18 font-graphik-semibold text-[#2f2f2f] mb-1">Status transition time</h2>
          <p className="text-13 font-graphik-regular text-[#767676] mb-4">
            Review the average (median) time your documents spend in status transition — from created to sent to completed.
          </p>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusTransitionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e4" />
                <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#767676' }} />
                <YAxis tick={{ fontSize: 12, fill: '#767676' }} label={{ value: 'Hours', angle: -90, position: 'insideLeft', fontSize: 12, fill: '#767676' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="createdToSent" fill="#9CA3AF" name="Created → Sent" />
                <Bar dataKey="sentToViewed" fill="#3B82F6" name="Sent → Viewed" />
                <Bar dataKey="viewedToCompleted" fill="#8B5CF6" name="Viewed → Completed" />
                <Bar dataKey="createdToCompleted" fill="#248567" name="Created → Completed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-12 font-graphik-regular text-[#767676] mt-2 text-center">Transition date</p>
        </div>

        {/* Total Status Transition Time */}
        <div className="bg-white border border-[#e4e4e4] rounded-lg p-6">
          <h2 className="text-18 font-graphik-semibold text-[#2f2f2f] mb-4">Total status transition time</h2>
          <div className="w-full h-2 bg-gray-100 rounded-full mb-6">
            <div className="h-full bg-gradient-to-r from-[#9CA3AF] via-[#3B82F6] to-[#248567] rounded-full" style={{ width: '70%' }}></div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-14 font-graphik-regular text-[#767676]">Created → Sent</span>
              <span className="text-14 font-graphik-semibold text-[#2f2f2f]">1min</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-14 font-graphik-regular text-[#248567]">Sent → Viewed</span>
              <span className="text-14 font-graphik-semibold text-[#2f2f2f]">0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-14 font-graphik-regular text-[#248567]">Viewed → Complete</span>
              <span className="text-14 font-graphik-semibold text-[#2f2f2f]">0</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#e4e4e4]">
              <span className="text-14 font-graphik-semibold text-[#2f2f2f]">Total time</span>
              <span className="text-14 font-graphik-semibold text-[#2f2f2f]">1min</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderDocumentDataView = (customTitle = null) => {
    // Filter documents based on signed date filter
    const filterBySignedDate = (docs) => {
      if (!docDataSignedDateFilter) return docs;
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      return docs.filter(doc => {
        // Skip documents without a signed date
        if (!doc.signedDate || doc.signedDate === '-') return false;
        
        // Parse the signed date (format: "Jan 20, 2026")
        const signedDate = new Date(doc.signedDate);
        
        // Check for custom date range (format: "Jan 15 - Jan 28")
        if (docDataSignedDateFilter.includes(' - ')) {
          const fromDate = new Date(docDataSignedDateCustom.from);
          const toDate = new Date(docDataSignedDateCustom.to);
          toDate.setHours(23, 59, 59, 999);
          return signedDate >= fromDate && signedDate <= toDate;
        }
        
        // Calculate the date range based on preset filters
        let startDate = new Date(today);
        switch (docDataSignedDateFilter) {
          case 'Last 7 days':
            startDate.setDate(today.getDate() - 7);
            break;
          case 'Last month':
            startDate.setMonth(today.getMonth() - 1);
            break;
          case 'Last 3 months':
            startDate.setMonth(today.getMonth() - 3);
            break;
          case 'Last 6 months':
            startDate.setMonth(today.getMonth() - 6);
            break;
          case 'Last year':
            startDate.setFullYear(today.getFullYear() - 1);
            break;
          default:
            return true;
        }
        
        return signedDate >= startDate && signedDate <= today;
      });
    };

    const filteredDocuments = filterBySignedDate(documentDataList);
    
    const sortedDocuments = [...filteredDocuments].sort((a, b) => {
      if (docDataSortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });

    return (
      <>
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-24 font-graphik-semibold text-[#2f2f2f]">{customTitle || 'Document data'}</h1>
          <div className="relative">
            <button 
              onClick={() => setShowDocDataOptionsMenu(!showDocDataOptionsMenu)}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <svg className="w-5 h-5 text-[#767676]" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="10" cy="4" r="1.5" />
                <circle cx="10" cy="10" r="1.5" />
                <circle cx="10" cy="16" r="1.5" />
              </svg>
            </button>
            {showDocDataOptionsMenu && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[140px]">
                <div className="py-2">
                  <button
                    onClick={() => {
                      setShowCreateReportModal(true);
                      setShowDocDataOptionsMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-[#2f2f2f] hover:bg-gray-50 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-[#767676]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 4v6m0 0v6m0-6h6m-6 0H4" strokeLinecap="round" />
                    </svg>
                    Save as new
                  </button>
                  <button
                    onClick={() => {
                      // Placeholder action
                      setShowDocDataOptionsMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-14 font-graphik-regular text-[#2f2f2f] hover:bg-gray-50 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-[#767676]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 13v3a1 1 0 001 1h10a1 1 0 001-1v-3M10 3v10m0 0l-3-3m3 3l3-3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Export CSV
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="text-14 font-graphik-regular text-[#767676] mb-6">
          This report shows the list of documents in the workspace and metadata values per each document.
        </p>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Created Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowDocDataCreatedDropdown(!showDocDataCreatedDropdown);
                  setShowDocDataTimeDropdown(false);
                  setShowDocDataTypeDropdown(false);
                }}
                className="flex items-center gap-2 px-3 py-2 bg-white border border-[#e4e4e4] rounded-md text-14 font-graphik-regular text-[#2f2f2f] hover:border-[#248567]"
              >
                {docDataCreatedFilter === 'created' ? 'Created' : docDataCreatedFilter === 'modified' ? 'Modified' : 'Sent'}
                <ChevronDownIcon className="w-4 h-4 text-[#767676]" />
              </button>
              {showDocDataCreatedDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[150px]">
                  <div className="py-1">
                    {['created', 'modified', 'sent'].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setDocDataCreatedFilter(option);
                          setShowDocDataCreatedDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-14 font-graphik-regular hover:bg-gray-50 capitalize ${docDataCreatedFilter === option ? 'text-[#248567] bg-[#248567]/5' : 'text-[#2f2f2f]'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Any Time Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowDocDataTimeDropdown(!showDocDataTimeDropdown);
                  setShowDocDataCreatedDropdown(false);
                  setShowDocDataTypeDropdown(false);
                }}
                className="flex items-center gap-2 px-3 py-2 bg-white border border-[#e4e4e4] rounded-md text-14 font-graphik-regular text-[#2f2f2f] hover:border-[#248567]"
              >
                {docDataTimeFilter === 'any' ? 'Any time' : 
                 docDataTimeFilter === 'last-day' ? 'Last Day' : 
                 docDataTimeFilter === 'last-7-days' ? 'Last 7 Days' : 
                 docDataTimeFilter === 'last-month' ? 'Last Month' : 
                 docDataTimeFilter === 'last-3-months' ? 'Last 3 Months' : 
                 docDataTimeFilter === 'last-6-months' ? 'Last 6 Months' : 
                 docDataTimeFilter === 'last-year' ? 'Last Year' : 
                 docDataTimeFilter}
                <ChevronDownIcon className="w-4 h-4 text-[#767676]" />
              </button>
              {showDocDataTimeDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[180px]">
                  <div className="py-1">
                    {[
                      { value: 'any', label: 'Any time' },
                      { value: 'last-day', label: 'Last Day' },
                      { value: 'last-7-days', label: 'Last 7 Days' },
                      { value: 'last-month', label: 'Last Month' },
                      { value: 'last-3-months', label: 'Last 3 Months' },
                      { value: 'last-6-months', label: 'Last 6 Months' },
                      { value: 'last-year', label: 'Last Year' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setDocDataTimeFilter(option.value);
                          setShowDocDataTimeDropdown(false);
                          setShowTimeCustomPicker(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-14 font-graphik-regular hover:bg-gray-50 ${docDataTimeFilter === option.value ? 'text-[#248567] bg-[#248567]/5' : 'text-[#2f2f2f]'}`}
                      >
                        {option.label}
                      </button>
                    ))}
                    {/* Custom Date Range Option */}
                    <button
                      onClick={() => setShowTimeCustomPicker(!showTimeCustomPicker)}
                      className={`w-full text-left px-4 py-2 text-14 font-graphik-regular hover:bg-gray-50 flex items-center justify-between ${showTimeCustomPicker ? 'text-[#248567] bg-[#248567]/5' : 'text-[#2f2f2f]'}`}
                    >
                      Custom
                      <ChevronDownIcon className={`w-4 h-4 transition-transform ${showTimeCustomPicker ? 'rotate-180' : ''}`} />
                    </button>
                    {showTimeCustomPicker && (
                      <div className="px-4 py-3 border-t border-[#e4e4e4]">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex-1">
                            <label className="block text-11 font-graphik-regular text-[#767676] mb-1">From</label>
                            <input
                              type="date"
                              value={docDataTimeCustom.from}
                              onChange={(e) => setDocDataTimeCustom(prev => ({ ...prev, from: e.target.value }))}
                              className="w-full px-2 py-1.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-11 font-graphik-regular text-[#767676] mb-1">To</label>
                            <input
                              type="date"
                              value={docDataTimeCustom.to}
                              onChange={(e) => setDocDataTimeCustom(prev => ({ ...prev, to: e.target.value }))}
                              className="w-full px-2 py-1.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular"
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            if (docDataTimeCustom.from && docDataTimeCustom.to) {
                              const fromDate = new Date(docDataTimeCustom.from).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                              const toDate = new Date(docDataTimeCustom.to).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                              setDocDataTimeFilter(`${fromDate} - ${toDate}`);
                            }
                            setShowDocDataTimeDropdown(false);
                            setShowTimeCustomPicker(false);
                          }}
                          className="w-full px-4 py-2 bg-[#248567] text-white text-14 font-graphik-semibold rounded hover:bg-[#1D6A52]"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Document Type Filter */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowDocDataTypeDropdown(!showDocDataTypeDropdown);
                  setShowDocDataCreatedDropdown(false);
                  setShowDocDataTimeDropdown(false);
                }}
                className="flex items-center gap-2 px-3 py-2 bg-white border border-[#e4e4e4] rounded-md text-14 font-graphik-regular text-[#2f2f2f] hover:border-[#248567]"
              >
                {docDataTypeFilter === 'all' ? 'Document type' : docDataTypeFilter}
                <ChevronDownIcon className="w-4 h-4 text-[#767676]" />
              </button>
              {showDocDataTypeDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[180px]">
                  <div className="py-1">
                    {[
                      { value: 'all', label: 'All types' },
                      { value: 'proposal', label: 'Proposal' },
                      { value: 'contract', label: 'Contract' },
                      { value: 'nda', label: 'NDA' },
                      { value: 'invoice', label: 'Invoice' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setDocDataTypeFilter(option.value);
                          setShowDocDataTypeDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-14 font-graphik-regular hover:bg-gray-50 ${docDataTypeFilter === option.value ? 'text-[#248567] bg-[#248567]/5' : 'text-[#2f2f2f]'}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Auto Renew Filter (when visible) */}
            {docDataVisibleFilters.includes('auto-renew') && (
              <div className="relative">
                <button
                  onClick={() => {
                    setShowDocDataAutoRenewDropdown(!showDocDataAutoRenewDropdown);
                    setShowDocDataCreatedDropdown(false);
                    setShowDocDataTimeDropdown(false);
                    setShowDocDataTypeDropdown(false);
                    setShowDocDataMoreDropdown(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 border rounded-md text-14 font-graphik-regular hover:border-[#248567] ${
                    docDataAutoRenewFilter ? 'bg-[#248567]/10 border-[#248567] text-[#248567]' : 'bg-white border-[#e4e4e4] text-[#2f2f2f]'
                  }`}
                >
                  {docDataAutoRenewFilter ? `Auto Renew: ${docDataAutoRenewFilter}` : 'Auto Renew'}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {showDocDataAutoRenewDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[150px]">
                    <div className="py-1">
                      {['Yes', 'No'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setDocDataAutoRenewFilter(option);
                            setShowDocDataAutoRenewDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-14 font-graphik-regular hover:bg-gray-50 ${docDataAutoRenewFilter === option ? 'text-[#248567] bg-[#248567]/5' : 'text-[#2f2f2f]'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Duration (Term) Filter (when visible) */}
            {docDataVisibleFilters.includes('duration') && (
              <div className="relative">
                <button
                  onClick={() => {
                    setShowDocDataDurationDropdown(!showDocDataDurationDropdown);
                    setShowDocDataCreatedDropdown(false);
                    setShowDocDataTimeDropdown(false);
                    setShowDocDataTypeDropdown(false);
                    setShowDocDataMoreDropdown(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 border rounded-md text-14 font-graphik-regular hover:border-[#248567] ${
                    docDataDurationFilter.from || docDataDurationFilter.to ? 'bg-[#248567]/10 border-[#248567] text-[#248567]' : 'bg-white border-[#e4e4e4] text-[#2f2f2f]'
                  }`}
                >
                  {docDataDurationFilter.from || docDataDurationFilter.to 
                    ? `Term: ${docDataDurationFilter.from || 'Any'} — ${docDataDurationFilter.to || 'Any'} months` 
                    : 'Duration (Term)'}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {showDocDataDurationDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[280px] p-4">
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <label className="text-11 font-graphik-regular text-[#767676] uppercase block mb-1">From</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={docDataDurationFilter.from}
                            onChange={(e) => setDocDataDurationFilter(prev => ({ ...prev, from: e.target.value }))}
                            placeholder="Any"
                            className="w-16 px-2 py-1.5 border border-[#e4e4e4] rounded text-14"
                          />
                          <span className="text-14 text-[#767676]">months</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="text-11 font-graphik-regular text-[#767676] uppercase block mb-1">To</label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={docDataDurationFilter.to}
                            onChange={(e) => setDocDataDurationFilter(prev => ({ ...prev, to: e.target.value }))}
                            placeholder="Any"
                            className="w-16 px-2 py-1.5 border border-[#e4e4e4] rounded text-14"
                          />
                          <span className="text-14 text-[#767676]">months</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowDocDataDurationDropdown(false)}
                      className="w-full px-4 py-2 bg-[#248567] text-white text-14 font-graphik-semibold rounded hover:bg-[#1D6A52]"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Renewal Date Filter (when visible) */}
            {docDataVisibleFilters.includes('renewal-date') && (
              <div className="relative">
                <button
                  onClick={() => {
                    setShowDocDataRenewalDateDropdown(!showDocDataRenewalDateDropdown);
                    setShowDocDataCreatedDropdown(false);
                    setShowDocDataTimeDropdown(false);
                    setShowDocDataTypeDropdown(false);
                    setShowDocDataMoreDropdown(false);
                    setShowDocDataSignedDateDropdown(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 border rounded-md text-14 font-graphik-regular hover:border-[#248567] ${
                    docDataRenewalDateFilter ? 'bg-[#248567]/10 border-[#248567] text-[#248567]' : 'bg-white border-[#e4e4e4] text-[#2f2f2f]'
                  }`}
                >
                  {docDataRenewalDateFilter || 'Renewal Date'}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {showDocDataRenewalDateDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[180px]">
                    <div className="py-1">
                      {['Next 7 days', 'Next month', 'Next 3 months', 'Next 6 months', 'Next year'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setDocDataRenewalDateFilter(option);
                            setShowDocDataRenewalDateDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-14 font-graphik-regular hover:bg-gray-50 ${docDataRenewalDateFilter === option ? 'text-[#248567] bg-[#248567]/5' : 'text-[#2f2f2f]'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Signed Date Filter (when visible) */}
            {docDataVisibleFilters.includes('signed-date') && (
              <div className="relative">
                <button
                  onClick={() => {
                    setShowDocDataSignedDateDropdown(!showDocDataSignedDateDropdown);
                    setShowDocDataCreatedDropdown(false);
                    setShowDocDataTimeDropdown(false);
                    setShowDocDataTypeDropdown(false);
                    setShowDocDataMoreDropdown(false);
                    setShowDocDataRenewalDateDropdown(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 border rounded-md text-14 font-graphik-regular hover:border-[#248567] ${
                    docDataSignedDateFilter ? 'bg-[#248567]/10 border-[#248567] text-[#248567]' : 'bg-white border-[#e4e4e4] text-[#2f2f2f]'
                  }`}
                >
                  {docDataSignedDateFilter || 'Signed Date'}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {showDocDataSignedDateDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[280px]">
                    <div className="py-1">
                      {['Last 7 days', 'Last month', 'Last 3 months', 'Last 6 months', 'Last year'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setDocDataSignedDateFilter(option);
                            setShowDocDataSignedDateDropdown(false);
                            setShowSignedDateCustomPicker(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-14 font-graphik-regular hover:bg-gray-50 ${docDataSignedDateFilter === option ? 'text-[#248567] bg-[#248567]/5' : 'text-[#2f2f2f]'}`}
                        >
                          {option}
                        </button>
                      ))}
                      {/* Custom Date Range Option */}
                      <button
                        onClick={() => setShowSignedDateCustomPicker(!showSignedDateCustomPicker)}
                        className={`w-full text-left px-4 py-2 text-14 font-graphik-regular hover:bg-gray-50 flex items-center justify-between ${showSignedDateCustomPicker ? 'text-[#248567] bg-[#248567]/5' : 'text-[#2f2f2f]'}`}
                      >
                        Custom range
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${showSignedDateCustomPicker ? 'rotate-180' : ''}`} />
                      </button>
                      {showSignedDateCustomPicker && (
                        <div className="px-4 py-3 border-t border-[#e4e4e4]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex-1">
                              <label className="block text-11 font-graphik-regular text-[#767676] mb-1">From</label>
                              <input
                                type="date"
                                value={docDataSignedDateCustom.from}
                                onChange={(e) => setDocDataSignedDateCustom(prev => ({ ...prev, from: e.target.value }))}
                                className="w-full px-2 py-1.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular"
                              />
                            </div>
                            <div className="flex-1">
                              <label className="block text-11 font-graphik-regular text-[#767676] mb-1">To</label>
                              <input
                                type="date"
                                value={docDataSignedDateCustom.to}
                                onChange={(e) => setDocDataSignedDateCustom(prev => ({ ...prev, to: e.target.value }))}
                                className="w-full px-2 py-1.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular"
                              />
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              if (docDataSignedDateCustom.from && docDataSignedDateCustom.to) {
                                const fromDate = new Date(docDataSignedDateCustom.from).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                                const toDate = new Date(docDataSignedDateCustom.to).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                                setDocDataSignedDateFilter(`${fromDate} - ${toDate}`);
                              }
                              setShowDocDataSignedDateDropdown(false);
                              setShowSignedDateCustomPicker(false);
                            }}
                            className="w-full px-4 py-2 bg-[#248567] text-white text-14 font-graphik-semibold rounded hover:bg-[#1D6A52]"
                          >
                            Apply
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* More Button with Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowDocDataMoreDropdown(!showDocDataMoreDropdown);
                  setShowDocDataCreatedDropdown(false);
                  setShowDocDataTimeDropdown(false);
                  setShowDocDataTypeDropdown(false);
                }}
                className="flex items-center gap-2 px-3 py-2 bg-white border border-[#e4e4e4] rounded-md text-14 font-graphik-regular text-[#2f2f2f] hover:border-[#248567]"
              >
                <svg className="w-4 h-4 text-[#767676]" viewBox="0 0 20 20" fill="currentColor">
                  <circle cx="4" cy="10" r="1.5" />
                  <circle cx="10" cy="10" r="1.5" />
                  <circle cx="16" cy="10" r="1.5" />
                </svg>
                More
              </button>
              {showDocDataMoreDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#e4e4e4] rounded-lg shadow-lg z-50 min-w-[200px]">
                  <div className="py-2">
                    {docDataAdditionalFilters
                      .filter(f => !docDataVisibleFilters.includes(f.id))
                      .map((filter) => (
                        <button
                          key={filter.id}
                          onClick={() => {
                            setDocDataVisibleFilters(prev => [...prev, filter.id]);
                            setShowDocDataMoreDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2.5 text-14 font-graphik-regular text-[#2f2f2f] hover:bg-gray-50"
                        >
                          {filter.label}
                        </button>
                      ))}
                    {docDataAdditionalFilters.filter(f => !docDataVisibleFilters.includes(f.id)).length === 0 && (
                      <p className="px-4 py-2 text-13 text-[#767676]">All filters are visible</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Include Deleted Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-14 font-graphik-regular text-[#2f2f2f]">Include deleted documents</span>
              <button
                onClick={() => setDocDataIncludeDeleted(!docDataIncludeDeleted)}
                className={`relative w-11 h-6 rounded-full transition-colors ${docDataIncludeDeleted ? 'bg-[#248567]' : 'bg-gray-300'}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${docDataIncludeDeleted ? 'left-6' : 'left-1'}`} />
              </button>
            </div>

            {/* Customize Button */}
            <button 
              onClick={() => setShowCustomizePanel(!showCustomizePanel)}
              className={`flex items-center gap-2 px-3 py-2 text-14 font-graphik-regular rounded-md ${showCustomizePanel ? 'bg-gray-200 text-[#2f2f2f]' : 'text-[#2f2f2f] hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5 text-[#767676]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="7" height="14" rx="1" />
                <rect x="11" y="3" width="7" height="14" rx="1" />
              </svg>
              Customize
            </button>
          </div>
        </div>

        {/* Content with optional Customize Panel */}
        <div className="flex gap-6">
          {/* Table with horizontal scroll */}
          <div className={`bg-white border border-[#e4e4e4] rounded-lg overflow-hidden ${showCustomizePanel ? 'flex-1 min-w-0' : 'w-full'}`}>
            <div className="overflow-x-auto">
              {/* Table Header */}
              <div className="flex border-b border-[#e4e4e4] min-w-max">
                <button 
                  onClick={() => setDocDataSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                  className="flex items-center gap-2 px-6 py-4 text-14 font-graphik-semibold text-[#2f2f2f] hover:bg-gray-50 text-left w-[300px] flex-shrink-0"
                >
                  Document name
                  <svg className={`w-4 h-4 text-[#767676] transition-transform ${docDataSortOrder === 'desc' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 4v12m0-12l-4 4m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {visibleColumns.filter(c => c !== 'name').map((columnId) => (
                  <div 
                    key={columnId}
                    className="px-6 py-4 text-14 font-graphik-semibold text-[#2f2f2f] w-[150px] flex-shrink-0 border-l border-[#e4e4e4]"
                  >
                    {getColumnLabel(columnId)}
                  </div>
                ))}
              </div>

              {/* Table Body */}
              <div>
                {sortedDocuments.map((doc, index) => (
                  <div 
                    key={doc.id}
                    className={`flex border-b border-[#e4e4e4] last:border-b-0 hover:bg-gray-50 min-w-max ${index % 2 === 1 ? 'bg-[#fafafa]' : 'bg-white'}`}
                  >
                    <div className="px-6 py-4 w-[300px] flex-shrink-0">
                      <span className="text-14 font-graphik-regular text-[#2f2f2f]">
                        {doc.name}
                      </span>
                    </div>
                    {visibleColumns.filter(c => c !== 'name').map((columnId) => (
                      <div 
                        key={columnId}
                        className="px-6 py-4 w-[150px] flex-shrink-0 border-l border-[#e4e4e4]"
                      >
                        <span className="text-14 font-graphik-regular text-[#2f2f2f]">
                          {getColumnValue(doc, columnId)}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customize Panel */}
          {showCustomizePanel && (
            <div className="w-[280px] flex-shrink-0">
              {/* Panel Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-16 font-graphik-semibold text-[#2f2f2f]">Columns</h3>
                <button 
                  onClick={clearAllColumns}
                  className="text-14 font-graphik-regular text-[#248567] hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* Document Data Section */}
              <div className="mb-4">
                <button
                  onClick={() => setExpandedColumnSections(prev => ({ ...prev, documentData: !prev.documentData }))}
                  className="w-full flex items-center justify-between py-2 text-14 font-graphik-semibold text-[#2f2f2f]"
                >
                  Document data
                  {expandedColumnSections.documentData ? (
                    <ChevronUpIcon className="w-4 h-4 text-[#767676]" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 text-[#767676]" />
                  )}
                </button>
                {expandedColumnSections.documentData && (
                  <div className="mt-2 space-y-2">
                    {availableColumns.documentData.map((column) => (
                      <label key={column.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={visibleColumns.includes(column.id)}
                          onChange={() => toggleColumn(column.id)}
                          className="w-4 h-4 rounded border-gray-300 text-[#248567] focus:ring-[#248567]"
                        />
                        <span className="text-14 font-graphik-regular text-[#2f2f2f]">{column.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Data Fields Section */}
              <div className="border-t border-[#e4e4e4] pt-4">
                <button
                  onClick={() => setExpandedColumnSections(prev => ({ ...prev, dataFields: !prev.dataFields }))}
                  className="w-full flex items-center justify-between py-2 text-14 font-graphik-semibold text-[#2f2f2f]"
                >
                  Data fields
                  {expandedColumnSections.dataFields ? (
                    <ChevronUpIcon className="w-4 h-4 text-[#767676]" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 text-[#767676]" />
                  )}
                </button>
                {expandedColumnSections.dataFields && (
                  <div className="mt-2">
                    {/* Search */}
                    <div className="relative mb-3">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#767676]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search"
                        value={columnSearch}
                        onChange={(e) => setColumnSearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-14 font-graphik-regular border border-[#e4e4e4] rounded-md focus:outline-none focus:border-[#248567]"
                      />
                    </div>
                    <div className="space-y-2">
                      {availableColumns.dataFields
                        .filter(c => c.label.toLowerCase().includes(columnSearch.toLowerCase()))
                        .map((column) => (
                          <label key={column.id} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={visibleColumns.includes(column.id)}
                              onChange={() => toggleColumn(column.id)}
                              className="w-4 h-4 rounded border-gray-300 text-[#248567] focus:ring-[#248567]"
                            />
                            <span className="text-14 font-graphik-regular text-[#2f2f2f]">{column.label}</span>
                          </label>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  const renderPlaceholderView = (title) => (
    <div className="flex items-center justify-center h-[400px] bg-white border border-[#e4e4e4] rounded-lg">
      <div className="text-center">
        <ReportsIcon className="w-16 h-16 text-[#e4e4e4] mx-auto mb-4" />
        <h2 className="text-18 font-graphik-semibold text-[#2f2f2f] mb-2">{title}</h2>
        <p className="text-14 font-graphik-regular text-[#767676]">This view is coming soon.</p>
      </div>
    </div>
  );

  const renderMainContent = () => {
    // Check if it's a saved report
    if (activeView.startsWith('saved-report-')) {
      const report = savedReports.find(r => r.id === activeView);
      if (report) {
        return renderDocumentDataView(report.name);
      }
    }
    
    switch (activeView) {
      case 'workflow-overview':
        return renderWorkflowOverview();
      case 'documents-overview':
        return renderPlaceholderView('Documents Overview');
      case 'leaderboard':
        return renderPlaceholderView('Leaderboard');
      case 'document-efficiency':
        return renderPlaceholderView('Document Efficiency');
      case 'template-efficiency':
        return renderPlaceholderView('Template Efficiency');
      case 'test':
        return renderPlaceholderView('Test Report');
      case 'usage-analytics':
        return renderPlaceholderView('Usage Analytics');
      case 'document-data':
        return renderDocumentDataView();
      default:
        return renderWorkflowOverview();
    }
  };

  return (
    <div className="flex h-full">
      {/* Secondary Sidebar */}
      <div className="w-[240px] bg-white border-r border-[#e4e4e4] overflow-y-auto flex-shrink-0">
        {/* GENERAL Section */}
        <div className="py-4">
          <button
            onClick={() => toggleSection('general')}
            className="w-full flex items-center justify-between px-4 py-2 text-11 font-graphik-semibold text-[#767676] uppercase tracking-wider"
          >
            General
            {expandedSections.general ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
          {expandedSections.general && (
            <div className="mt-1">
              {sidebarItems.general.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-14 font-graphik-regular transition-colors ${
                      activeView === item.id
                        ? 'bg-[#248567]/10 text-[#248567] border-l-2 border-[#248567]'
                        : 'text-[#2f2f2f] hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${activeView === item.id ? 'text-[#248567]' : 'text-[#767676]'}`} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* DATA ANALYTICS Section */}
        <div className="py-4 border-t border-[#e4e4e4]">
          <button
            onClick={() => toggleSection('dataAnalytics')}
            className="w-full flex items-center justify-between px-4 py-2 text-11 font-graphik-semibold text-[#767676] uppercase tracking-wider"
          >
            Data Analytics
            {expandedSections.dataAnalytics ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
          {expandedSections.dataAnalytics && (
            <div className="mt-1">
              {sidebarItems.dataAnalytics.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-14 font-graphik-regular transition-colors ${
                      activeView === item.id
                        ? 'bg-[#248567]/10 text-[#248567] border-l-2 border-[#248567]'
                        : 'text-[#2f2f2f] hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${activeView === item.id ? 'text-[#248567]' : 'text-[#767676]'}`} />
                    {item.label}
                  </button>
                );
              })}
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-14 font-graphik-regular text-[#767676] hover:bg-gray-50">
                <PlusIcon className="w-5 h-5" />
                Create new report
              </button>
            </div>
          )}
        </div>

        {/* CONTENT LIBRARY Section */}
        <div className="py-4 border-t border-[#e4e4e4]">
          <button
            onClick={() => toggleSection('contentLibrary')}
            className="w-full flex items-center justify-between px-4 py-2 text-11 font-graphik-semibold text-[#767676] uppercase tracking-wider"
          >
            Content Library
            {expandedSections.contentLibrary ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
          {expandedSections.contentLibrary && (
            <div className="mt-1">
              {sidebarItems.contentLibrary.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-14 font-graphik-regular transition-colors ${
                      activeView === item.id
                        ? 'bg-[#248567]/10 text-[#248567] border-l-2 border-[#248567]'
                        : 'text-[#2f2f2f] hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${activeView === item.id ? 'text-[#248567]' : 'text-[#767676]'}`} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* DOCUMENT DATA Section */}
        <div className="py-4 border-t border-[#e4e4e4]">
          <button
            onClick={() => toggleSection('documentData')}
            className="w-full flex items-center justify-between px-4 py-2 text-11 font-graphik-semibold text-[#767676] uppercase tracking-wider"
          >
            Document Data
            {expandedSections.documentData ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
          {expandedSections.documentData && (
            <div className="mt-1">
              {sidebarItems.documentData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-14 font-graphik-regular transition-colors ${
                      activeView === item.id
                        ? 'bg-[#248567]/10 text-[#248567] border-l-2 border-[#248567]'
                        : 'text-[#2f2f2f] hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${activeView === item.id ? 'text-[#248567]' : 'text-[#767676]'}`} />
                    {item.label}
                  </button>
                );
              })}
              {/* Saved Reports */}
              {savedReports.map((report) => (
                <button
                  key={report.id}
                  onClick={() => setActiveView(report.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-14 font-graphik-regular transition-colors ${
                    activeView === report.id
                      ? 'bg-[#248567]/10 text-[#248567] border-l-2 border-[#248567]'
                      : 'text-[#2f2f2f] hover:bg-gray-50'
                  }`}
                >
                  <DataIcon className={`w-5 h-5 ${activeView === report.id ? 'text-[#248567]' : 'text-[#767676]'}`} />
                  {report.name}
                </button>
              ))}
              <button 
                onClick={() => setShowCreateReportModal(true)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-14 font-graphik-regular text-[#767676] hover:bg-gray-50"
              >
                <PlusIcon className="w-5 h-5" />
                Create new report
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Create Report Modal */}
      {showCreateReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-[500px]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e4e4e4]">
              <h2 className="text-18 font-graphik-semibold text-[#2f2f2f]">Create report</h2>
              <button 
                onClick={() => {
                  setShowCreateReportModal(false);
                  setNewReportName('');
                  setNewReportDescription('');
                }}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <svg className="w-5 h-5 text-[#767676]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l8 8M14 6l-8 8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5">
              {/* Name Field */}
              <div className="mb-5">
                <label className="block text-11 font-graphik-semibold text-[#2f2f2f] uppercase tracking-wider mb-2">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newReportName}
                  onChange={(e) => setNewReportName(e.target.value.slice(0, 50))}
                  placeholder="Enter report name"
                  className="w-full px-3 py-2.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular text-[#2f2f2f] focus:outline-none focus:border-[#248567]"
                />
                <div className="text-right text-12 font-graphik-regular text-[#767676] mt-1">
                  {newReportName.length} / 50
                </div>
              </div>

              {/* Description Field */}
              <div>
                <label className="block text-11 font-graphik-semibold text-[#767676] uppercase tracking-wider mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={newReportDescription}
                  onChange={(e) => setNewReportDescription(e.target.value.slice(0, 100))}
                  placeholder="Enter description"
                  className="w-full px-3 py-2.5 border border-[#e4e4e4] rounded text-14 font-graphik-regular text-[#2f2f2f] focus:outline-none focus:border-[#248567]"
                />
                <div className="text-right text-12 font-graphik-regular text-[#767676] mt-1">
                  {newReportDescription.length} / 100
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#e4e4e4]">
              <button
                onClick={() => {
                  setShowCreateReportModal(false);
                  setNewReportName('');
                  setNewReportDescription('');
                }}
                className="px-4 py-2 text-14 font-graphik-semibold text-[#2f2f2f] bg-[#f0f0f0] rounded hover:bg-[#e4e4e4]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (newReportName.trim()) {
                    const newReport = {
                      id: `saved-report-${Date.now()}`,
                      name: newReportName.trim(),
                      description: newReportDescription.trim(),
                    };
                    setSavedReports([...savedReports, newReport]);
                    setShowCreateReportModal(false);
                    setNewReportName('');
                    setNewReportDescription('');
                    setActiveView(newReport.id);
                  }
                }}
                disabled={!newReportName.trim()}
                className={`px-4 py-2 text-14 font-graphik-semibold text-white rounded ${
                  newReportName.trim() 
                    ? 'bg-[#248567] hover:bg-[#1D6A52]' 
                    : 'bg-[#248567]/50 cursor-not-allowed'
                }`}
              >
                Save report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-[#f9f9f9]">
        {/* Page Header */}
        <div className="bg-white border-b border-[#e4e4e4] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ReportsIcon className="w-6 h-6 text-[#248567]" />
            <h1 className="text-18 font-graphik-semibold text-[#2f2f2f]">Reports</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <HelpIcon className="w-5 h-5 text-[#767676]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default ReportsContent;
