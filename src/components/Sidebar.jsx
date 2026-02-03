import React, { useState } from 'react';
import {
  WorkspaceIcon,
  HomeIcon,
  DocumentIcon,
  TemplateIcon,
  ContactsIcon,
  ExtensionsIcon,
  DiscoverIcon,
  InviteIcon,
  SettingsIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from './Icons';

// Additional icons for expanded menu
const PaymentsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.5c-3.58 0-6.5-2.92-6.5-6.5S6.42 3.5 10 3.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5zm.5-10.5h-1v4l3.5 2.1.5-.82-3-1.78V6z" fill="currentColor"/>
  </svg>
);

const SmartFormsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M4 4h12v2H4V4zm0 4h12v2H4V8zm0 4h8v2H4v-2z" fill="currentColor"/>
  </svg>
);

const RoomsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6z" fill="currentColor"/>
  </svg>
);

const CatalogIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M4 2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v12h12V4H4zm2 2h8v2H6V6zm0 4h8v2H6v-2zm0 4h5v2H6v-2z" fill="currentColor"/>
  </svg>
);

const FormsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M3 2h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm1 2v12h12V4H4zm2 2h3v3H6V6zm5 0h3v1h-3V6zm0 2h3v1h-3V8zm-5 3h8v1H6v-1zm0 2h8v1H6v-1z" fill="currentColor"/>
  </svg>
);

const AutomationsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M11 1L4 12h5v7l7-11h-5V1z" fill="currentColor"/>
  </svg>
);

const WorkflowsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M3 4a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm8 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V9zM3 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm4-9h4v2H7V5zm6 5v4h-2v-4h2z" fill="currentColor"/>
  </svg>
);

const ReportsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M2 2h2v14h14v2H2V2zm4 8h2v6H6v-6zm4-4h2v10h-2V6zm4 2h2v8h-2V8z" fill="currentColor"/>
  </svg>
);

const DevCenterIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M7 5l-5 5 5 5 1.4-1.4L4.8 10l3.6-3.6L7 5zm6 0l5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6L13 5z" fill="currentColor"/>
  </svg>
);

const MoreDownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LessUpIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M15 12l-5-5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Sidebar = ({ activePage, onPageChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mainNavItems = [
    { icon: HomeIcon, label: 'Home', active: activePage === 'Home', page: 'Home' },
    { icon: DocumentIcon, label: 'Documents', active: activePage === 'Documents', page: 'Documents' },
    { icon: TemplateIcon, label: 'Templates', active: activePage === 'Templates', page: 'Templates', hasChevron: true },
    { icon: ContactsIcon, label: 'Contacts', active: activePage === 'Contacts', page: 'Contacts' },
  ];

  const expandedNavItems = [
    { icon: PaymentsIcon, label: 'Payments', disabled: true },
    { icon: SmartFormsIcon, label: 'Smart Forms', beta: true, disabled: true },
    { icon: RoomsIcon, label: 'Rooms', disabled: true },
    { icon: CatalogIcon, label: 'Catalog', disabled: true },
    { icon: FormsIcon, label: 'Forms', disabled: true },
    { icon: AutomationsIcon, label: 'Automations', disabled: true },
    { icon: WorkflowsIcon, label: 'Workflows', beta: true, disabled: true },
    { icon: ReportsIcon, label: 'Reports' },
    { icon: DevCenterIcon, label: 'Dev Center', disabled: true },
  ];

  const handleNavClick = (item) => {
    if (!item.disabled && item.page && onPageChange) {
      onPageChange(item.page);
    }
  };

  const bottomNavItems = [
    { icon: DiscoverIcon, label: 'Discover' },
    { icon: InviteIcon, label: 'Invite users' },
    { icon: SettingsIcon, label: 'Settings' },
  ];

  return (
    <div className="w-full bg-surface-primary h-full flex flex-col">
      {/* Workspace Header */}
      <div className="p-4 pb-10">
        <div className="flex items-center gap-1">
          <WorkspaceIcon />
          <div className="flex-1 flex items-center justify-between p-2 hover:bg-white hover:bg-opacity-50 rounded-sm transition-colors cursor-pointer">
            <div className="flex flex-col">
              <div className="font-graphik-bold text-14 text-secondary-dark leading-8">
                Acme Sales
              </div>
              <div className="font-graphik-semibold text-9 text-secondary-light uppercase leading-normal">
                Sales • 3 members
              </div>
            </div>
            <ChevronDownIcon className="w-3 h-3 text-secondary-light" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-4 overflow-y-auto">
        <nav className="space-y-0">
          {mainNavItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className={`nav-item ${item.active ? 'active' : ''} ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                style={item.active ? {
                  backgroundColor: 'white',
                  boxShadow: '0px 0px 1px 0px rgba(47,47,47,0.04), 0px 1px 4px 0px rgba(47,47,47,0.12)'
                } : {}}
                disabled={item.disabled}
                onClick={() => handleNavClick(item)}
              >
                <IconComponent className={`w-5 h-5 mr-3 ${item.disabled ? 'text-[#9CA3AF]' : item.active ? 'text-[#1D6A52]' : 'text-[#474747]'}`} />
                <span className={`flex-1 text-left ${item.disabled ? 'text-[#9CA3AF]' : 'text-secondary-dark'}`}>
                  {item.label}
                </span>
                {item.hasChevron && (
                  <ChevronDownIcon className="w-4 h-4 text-[#767676]" />
                )}
              </button>
            );
          })}

          {/* More/Less Toggle */}
          {!isExpanded ? (
            <button
              className="nav-item"
              onClick={() => setIsExpanded(true)}
            >
              <MoreDownIcon className="w-5 h-5 mr-3 text-[#474747]" />
              <span className="text-secondary-dark">More</span>
            </button>
          ) : (
            <>
              {/* Divider */}
              <div className="my-3 border-t border-gray-200"></div>

              {/* Expanded Items */}
              {expandedNavItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    className={`nav-item ${item.disabled ? 'cursor-not-allowed' : ''}`}
                    disabled={item.disabled}
                  >
                    <IconComponent className={`w-5 h-5 mr-3 ${item.disabled ? 'text-[#9CA3AF]' : 'text-[#474747]'}`} />
                    <span className={`flex-1 text-left ${item.disabled ? 'text-[#9CA3AF]' : 'text-secondary-dark'}`}>{item.label}</span>
                    {item.beta && (
                      <span className={`text-[10px] font-graphik-semibold px-1.5 py-0.5 rounded ${item.disabled ? 'text-[#9CA3AF] bg-[#f5f5f5]' : 'text-[#767676] bg-[#f0f0f0]'}`}>BETA</span>
                    )}
                  </button>
                );
              })}

              {/* Less Button */}
              <button
                className="nav-item"
                onClick={() => setIsExpanded(false)}
              >
                <LessUpIcon className="w-5 h-5 mr-3 text-[#474747]" />
                <span className="text-secondary-dark">Less</span>
              </button>

              {/* Divider before Extensions */}
              <div className="my-3 border-t border-gray-200"></div>
            </>
          )}
        </nav>

        {/* Extensions Section */}
        <div className={isExpanded ? '' : 'mt-6'}>
          <button className="nav-item">
            <ExtensionsIcon className="w-5 h-5 mr-3 text-[#474747]" />
            <span>Extensions</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="px-4 pb-4">
        <nav className="space-y-0">
          {bottomNavItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className="nav-item"
              >
                <IconComponent className="w-5 h-5 mr-3 text-[#474747]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
