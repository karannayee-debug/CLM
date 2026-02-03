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
        return renderPlaceholderView('Document Data');
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
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-14 font-graphik-regular text-[#767676] hover:bg-gray-50">
                <PlusIcon className="w-5 h-5" />
                Create new report
              </button>
            </div>
          )}
        </div>
      </div>

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
