import React, { useState, useEffect, useRef } from 'react';
import { DocumentPortraitIcon, ChevronDownIcon, ChevronRightIcon } from './Icons';
import StatusLabel from './StatusLabel';
import Avatar from './Avatar';
import { organizeByYear, organizeByCompany, organizeByStatus } from '../data/mockGmailDocuments';
import { DateRangeFilter, StatusFilter, AmountFilter, UserFilter } from './filters';

const DocumentsTable = ({ currentFolder, onFolderClick, importedDocuments = [], importedOrganizationSettings = null, currentTab = 'All documents', searchQuery = '' }) => {
  const [expandedFolders, setExpandedFolders] = useState({});
  const [selectedItems, setSelectedItems] = useState(new Set());
  
  // Filter states
  const [activeFilter, setActiveFilter] = useState(null);
  const [dateFilter, setDateFilter] = useState({ startDate: null, endDate: null });
  const [statusFilter, setStatusFilter] = useState([]);
  const [amountFilter, setAmountFilter] = useState(null);
  const [ownerFilter, setOwnerFilter] = useState([]);
  const [recipientsFilter, setRecipientsFilter] = useState([]);
  
  const filterRef = useRef(null);

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setActiveFilter(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFolder = (folderId) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderId]: !prev[folderId]
    }));
  };

  const toggleItemSelection = (itemId, e) => {
    e.stopPropagation();
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const isItemSelected = (itemId) => selectedItems.has(itemId);

  const handleFolderRowClick = (folder, e) => {
    e.stopPropagation();
    if (onFolderClick) {
      onFolderClick(folder);
    }
  };

  // Build imported folder structure based on organization settings
  const buildImportedFolderStructure = () => {
    if (!importedDocuments.length || !importedOrganizationSettings) {
      return [];
    }

    const { byYear, byCompany, byStatus } = importedOrganizationSettings;
    const folders = [];

    // No organization - single flat structure
    if (!byYear && !byCompany && !byStatus) {
      folders.push({
        id: 'all-imported',
        name: 'All Imported Documents',
        documents: importedDocuments,
        itemCount: importedDocuments.length,
        level: 0,
        parentPath: []
      });
      return folders;
    }

    // Organize by Year only
    if (byYear && !byCompany && !byStatus) {
      const byYearData = organizeByYear(importedDocuments);
      Object.keys(byYearData).sort().forEach(year => {
        folders.push({
          id: `year-${year}`,
          name: year,
          documents: byYearData[year],
          itemCount: byYearData[year].length,
          level: 0,
          parentPath: []
        });
      });
      return folders;
    }

    // Organize by Company only
    if (byCompany && !byYear && !byStatus) {
      const byCompanyData = organizeByCompany(importedDocuments);
      Object.keys(byCompanyData).sort().forEach(company => {
        folders.push({
          id: `company-${company}`,
          name: company,
          documents: byCompanyData[company],
          itemCount: byCompanyData[company].length,
          level: 0,
          parentPath: []
        });
      });
      return folders;
    }

    // Organize by Status only
    if (byStatus && !byYear && !byCompany) {
      const byStatusData = organizeByStatus(importedDocuments);
      Object.keys(byStatusData).sort().forEach(status => {
        folders.push({
          id: `status-${status}`,
          name: status,
          documents: byStatusData[status],
          itemCount: byStatusData[status].length,
          level: 0,
          parentPath: []
        });
      });
      return folders;
    }

    // Year + Company
    if (byYear && byCompany && !byStatus) {
      const byYearData = organizeByYear(importedDocuments);
      Object.keys(byYearData).sort().forEach(year => {
        const yearDocs = byYearData[year];
        const yearFolder = {
          id: `year-${year}`,
          name: year,
          documents: [],
          itemCount: yearDocs.length,
          level: 0,
          children: [],
          parentPath: []
        };
        
        const byCompanyData = organizeByCompany(yearDocs);
        Object.keys(byCompanyData).sort().forEach(company => {
          yearFolder.children.push({
            id: `year-${year}-company-${company}`,
            name: company,
            documents: byCompanyData[company],
            itemCount: byCompanyData[company].length,
            level: 1,
            parentId: `year-${year}`,
            parentPath: [year]
          });
        });
        
        folders.push(yearFolder);
      });
      return folders;
    }

    // Year + Status
    if (byYear && byStatus && !byCompany) {
      const byYearData = organizeByYear(importedDocuments);
      Object.keys(byYearData).sort().forEach(year => {
        const yearDocs = byYearData[year];
        const yearFolder = {
          id: `year-${year}`,
          name: year,
          documents: [],
          itemCount: yearDocs.length,
          level: 0,
          children: [],
          parentPath: []
        };
        
        const byStatusData = organizeByStatus(yearDocs);
        Object.keys(byStatusData).sort().forEach(status => {
          yearFolder.children.push({
            id: `year-${year}-status-${status}`,
            name: status,
            documents: byStatusData[status],
            itemCount: byStatusData[status].length,
            level: 1,
            parentId: `year-${year}`,
            parentPath: [year]
          });
        });
        
        folders.push(yearFolder);
      });
      return folders;
    }

    // Company + Status
    if (byCompany && byStatus && !byYear) {
      const byCompanyData = organizeByCompany(importedDocuments);
      Object.keys(byCompanyData).sort().forEach(company => {
        const companyDocs = byCompanyData[company];
        const companyFolder = {
          id: `company-${company}`,
          name: company,
          documents: [],
          itemCount: companyDocs.length,
          level: 0,
          children: [],
          parentPath: []
        };
        
        const byStatusData = organizeByStatus(companyDocs);
        Object.keys(byStatusData).sort().forEach(status => {
          companyFolder.children.push({
            id: `company-${company}-status-${status}`,
            name: status,
            documents: byStatusData[status],
            itemCount: byStatusData[status].length,
            level: 1,
            parentId: `company-${company}`,
            parentPath: [company]
          });
        });
        
        folders.push(companyFolder);
      });
      return folders;
    }

    // Year + Company + Status (3 levels)
    if (byYear && byCompany && byStatus) {
      const byYearData = organizeByYear(importedDocuments);
      Object.keys(byYearData).sort().forEach(year => {
        const yearDocs = byYearData[year];
        const yearFolder = {
          id: `year-${year}`,
          name: year,
          documents: [],
          itemCount: yearDocs.length,
          level: 0,
          children: [],
          parentPath: []
        };
        
        const byCompanyData = organizeByCompany(yearDocs);
        Object.keys(byCompanyData).sort().forEach(company => {
          const companyDocs = byCompanyData[company];
          const companyFolder = {
            id: `year-${year}-company-${company}`,
            name: company,
            documents: [],
            itemCount: companyDocs.length,
            level: 1,
            parentId: `year-${year}`,
            children: [],
            parentPath: [year]
          };
          
          const byStatusData = organizeByStatus(companyDocs);
          Object.keys(byStatusData).sort().forEach(status => {
            companyFolder.children.push({
              id: `year-${year}-company-${company}-status-${status}`,
              name: status,
              documents: byStatusData[status],
              itemCount: byStatusData[status].length,
              level: 2,
              parentId: `year-${year}-company-${company}`,
              parentPath: [year, company]
            });
          });
          
          yearFolder.children.push(companyFolder);
        });
        
        folders.push(yearFolder);
      });
      return folders;
    }

    return folders;
  };

  // Organize documents into folders
  const folders = [
    {
      id: 'proposal-templates',
      name: 'Proposal templates',
      itemCount: 3,
      avatar: '/CLM/images/user-profile.png',
      created: 'Jan 10, 2025',
      documents: []
    },
    {
      id: 'ndas',
      name: "NDA's",
      itemCount: 3,
      avatar: '/CLM/images/user-profile.png',
      created: 'Jan 10, 2025',
      documents: []
    }
  ];

  const allDocuments = [
    // Documents in 'proposal-templates' folder
    {
      id: 1,
      name: 'Proposal for Kraftwerk Events',
      participants: 'Will Holland, Mariel Stacey',
      status: 'Draft',
      amount: '$4,250.00',
      created: 'May 21, 2024',
      avatar: '/CLM/images/4.png',
      folder: 'proposal-templates'
    },
    {
      id: 2,
      name: 'Equipment Purchase Proposal for Tresor Media',
      participants: 'Emily Gold, Nathan Howard',
      status: 'Sent',
      amount: '$9,780.00',
      created: 'Nov 2, 2024',
      avatar: '/CLM/images/2.png',
      folder: 'proposal-templates'
    },
    {
      id: 4,
      name: 'Equipment Purchase Proposal for Captured Moments',
      participants: 'Andreya Triana, Will Holland',
      status: 'Awaiting approval',
      amount: '$6,560.00',
      created: 'Jan 10, 2025',
      avatar: '/CLM/images/3.png',
      folder: 'proposal-templates'
    },
    // Documents in 'ndas' folder
    {
      id: 3,
      name: 'Non-Disclosure Agreement for Brilliant Moments Inc.',
      participants: 'Mariel Stacey',
      status: 'Completed',
      amount: '',
      created: 'Jan 10, 2025',
      avatar: '/CLM/images/1.png',
      folder: 'ndas'
    },
    {
      id: 5,
      name: 'Non-Disclosure Agreement for Brilliant Moments Inc.',
      participants: 'Andreya Triana, Will Holland',
      status: 'Rejected',
      amount: '',
      created: 'Jan 10, 2025',
      avatar: '/CLM/images/4.png',
      folder: 'ndas'
    },
    {
      id: 6,
      name: 'Equipment Purchase Proposal for Tresor Media',
      participants: 'Emily Gold, Nathan Howard',
      status: 'Sent',
      amount: '$9,780.00',
      created: 'Nov 2, 2024',
      avatar: '/CLM/images/2.png',
      folder: 'ndas'
    },
    // Standalone documents (not in any folder)
    {
      id: 7,
      name: 'Proposal for Kraftwerk Events',
      participants: 'Will Holland, Mariel Stacey',
      status: 'Draft',
      amount: '$4,250.00',
      created: 'May 21, 2024',
      avatar: '/CLM/images/4.png'
    },
    {
      id: 8,
      name: 'Equipment Purchase Proposal for Tresor Media',
      participants: 'Emily Gold, Nathan Howard',
      status: 'Sent',
      amount: '$9,780.00',
      created: 'Nov 2, 2024',
      avatar: '/CLM/images/2.png'
    },
    {
      id: 9,
      name: 'Non-Disclosure Agreement for Brilliant Moments Inc.',
      participants: 'Mariel Stacey',
      status: 'Completed',
      amount: '',
      created: 'Jan 10, 2025',
      avatar: '/CLM/images/1.png'
    },
    {
      id: 10,
      name: 'Equipment Purchase Proposal for Captured Moments',
      participants: 'Andreya Triana, Will Holland',
      status: 'Awaiting approval',
      amount: '$6,560.00',
      created: 'Jan 10, 2025',
      avatar: '/CLM/images/3.png'
    },
    {
      id: 11,
      name: 'Non-Disclosure Agreement for Brilliant Moments Inc.',
      participants: 'Andreya Triana, Will Holland',
      status: 'Rejected',
      amount: '',
      created: 'Jan 10, 2025',
      avatar: '/CLM/images/4.png'
    }
  ];

  // Populate folders with their documents
  const populatedFolders = folders.map(folder => ({
    ...folder,
    documents: allDocuments.filter(doc => doc.folder === folder.id)
  }));

  // Get documents that don't belong to any folder
  const documents = allDocuments.filter(doc => !doc.folder);

  // Get imported folder structure
  const importedFolders = currentTab === 'Imported' ? buildImportedFolderStructure() : [];

  // Comprehensive filter function
  const filterDocument = (doc) => {
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      if (!doc.name.toLowerCase().includes(query)) return false;
    }

    // Date filter
    if (dateFilter.startDate || dateFilter.endDate) {
      const docDate = doc.created ? new Date(doc.created) : (doc.date ? new Date(doc.date) : null);
      if (docDate) {
        if (dateFilter.startDate && docDate < dateFilter.startDate) return false;
        if (dateFilter.endDate && docDate > dateFilter.endDate) return false;
      }
    }

    // Status filter
    if (statusFilter.length > 0) {
      const docStatus = doc.status?.toLowerCase().replace(/\s+/g, '-') || '';
      if (!statusFilter.includes(docStatus)) return false;
    }

    // Amount filter
    if (amountFilter && amountFilter.from !== null) {
      const docAmount = doc.amount ? parseFloat(doc.amount.replace(/[$,]/g, '')) : 0;
      if (amountFilter.type === 'between') {
        if (docAmount < amountFilter.from || (amountFilter.to !== null && docAmount > amountFilter.to)) return false;
      } else if (amountFilter.type === 'greater') {
        if (docAmount <= amountFilter.from) return false;
      } else if (amountFilter.type === 'less') {
        if (docAmount >= amountFilter.from) return false;
      }
    }

    // Owner filter - check against participants/avatar name
    // For demo purposes, we match owner based on the avatar filename or participants
    if (ownerFilter.length > 0) {
      // This is a simplified check - in real app, would check against actual owner data
      // For now, we'll let all documents pass if owner filter is set
    }

    // Recipients filter - similar to owner
    if (recipientsFilter.length > 0) {
      // Simplified check for demo
    }

    return true;
  };

  // Alias for backward compatibility
  const filterBySearch = filterDocument;

  // Filter documents and folders based on search query
  const filteredDocuments = documents.filter(filterBySearch);
  
  const filteredFolders = populatedFolders.map(folder => ({
    ...folder,
    documents: folder.documents.filter(filterBySearch)
  })).filter(folder => {
    // Show folder if its name matches OR if it has matching documents
    const folderNameMatches = !searchQuery.trim() || folder.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
    const hasMatchingDocs = folder.documents.length > 0;
    return folderNameMatches || hasMatchingDocs;
  });

  // Filter imported folders based on search
  const filterImportedFolder = (folder) => {
    if (!searchQuery.trim()) return folder;
    const query = searchQuery.toLowerCase().trim();
    const folderNameMatches = folder.name.toLowerCase().includes(query);
    const filteredDocs = (folder.documents || []).filter(doc => doc.name.toLowerCase().includes(query));
    const filteredChildren = (folder.children || []).map(filterImportedFolder).filter(child => 
      child.name.toLowerCase().includes(query) || 
      (child.documents && child.documents.length > 0) ||
      (child.children && child.children.length > 0)
    );
    
    return {
      ...folder,
      documents: filteredDocs,
      children: filteredChildren
    };
  };

  const filteredImportedFolders = importedFolders
    .map(filterImportedFolder)
    .filter(folder => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;
      return folder.name.toLowerCase().includes(query) || 
             (folder.documents && folder.documents.length > 0) ||
             (folder.children && folder.children.length > 0);
    });

  // Render a single document row
  const renderDocumentRow = (doc, indentLevel = 0) => {
    const indentPadding = indentLevel * 24; // 24px per level
    const selected = isItemSelected(doc.id);
    
    return (
      <div key={doc.id} className="group flex items-center h-17 border-b border-gray-50 hover:bg-gray-25 transition-colors">
        {/* Document Icon (becomes checkbox on hover or when selected) + Name Column */}
        <div className="flex-1 min-w-0 flex items-center">
          <div className="w-12 flex justify-center" style={{ marginLeft: `${indentPadding}px` }}>
            <input 
              type="checkbox" 
              checked={selected}
              onChange={(e) => toggleItemSelection(doc.id, e)}
              className={`w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary ${selected ? 'block' : 'hidden group-hover:block'}`} 
            />
            <DocumentPortraitIcon className={`w-6 h-6 text-secondary-light ${selected ? 'hidden' : 'block group-hover:hidden'}`} />
          </div>
          <div className="flex-1 pr-3 min-w-0">
            <div className="flex items-center gap-2.5">
              <h3 className="font-graphik-semibold text-14 text-secondary-dark truncate">
                {doc.name}
              </h3>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-13 font-graphik-regular text-secondary-dark truncate">
                {doc.participants || doc.company}
              </span>
              <ChevronDownIcon className="w-4 h-4 text-secondary-light flex-shrink-0" />
            </div>
          </div>
        </div>

        <div className="w-28 flex items-center">
          <StatusLabel type={doc.status} />
        </div>

        <div className="w-24 flex items-center justify-end">
          <span className="text-13 font-graphik-regular text-secondary-dark">
            {doc.amount || '\u00A0'}
          </span>
        </div>

        <div className="w-24 flex items-center ml-4">
          <Avatar src={doc.avatar || '/CLM/images/user-profile.png'} alt="Owner" size="sm" />
        </div>

        <div className="w-28 flex items-center ml-2">
          <div className="flex -space-x-2">
            <Avatar src={doc.avatar || '/CLM/images/1.png'} alt="Recipient" size="sm" />
            {doc.participants && doc.participants.includes(',') && (
              <Avatar src="/CLM/images/2.png" alt="Recipient" size="sm" />
            )}
          </div>
        </div>

        <div className="w-32 flex items-center ml-4">
          <span className="text-13 font-graphik-regular text-secondary-dark">
            {doc.created || new Date(doc.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>
    );
  };

  // Render imported folder row (clickable to navigate)
  const renderImportedFolder = (folder) => {
    const selected = isItemSelected(folder.id);
    
    return (
      <div 
        key={folder.id}
        className="group flex items-center h-17 border-b border-gray-50 hover:bg-gray-25 transition-colors cursor-pointer"
        onClick={(e) => handleFolderRowClick(folder, e)}
      >
        {/* Folder Icon (becomes checkbox on hover or when selected) + Name Column */}
        <div className="flex-1 min-w-0 flex items-center">
          <div className="w-12 flex justify-center">
            <input 
              type="checkbox" 
              checked={selected}
              onChange={(e) => toggleItemSelection(folder.id, e)}
              className={`w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary ${selected ? 'block' : 'hidden group-hover:block'}`}
              onClick={(e) => e.stopPropagation()}
            />
            <svg className={`w-6 h-6 ${selected ? 'hidden' : 'block group-hover:hidden'}`} viewBox="0 0 24 24" fill="none">
              <path d="M2 20V4H10L12 6H22V20H2Z" fill="#767676"/>
            </svg>
          </div>
          <div className="flex-1 pr-3 min-w-0">
            <div className="flex items-center gap-2.5">
              <h3 className="font-graphik-semibold text-14 text-secondary-dark truncate">
                {folder.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Status Column - Show item count */}
        <div className="w-28 flex items-center">
          <span className="text-13 font-graphik-regular text-secondary-light">
            {folder.itemCount} items
          </span>
        </div>

        {/* Amount Column - Empty for folders */}
        <div className="w-24 flex items-center justify-end">
          <span className="text-13 font-graphik-regular text-secondary-dark">
            {'\u00A0'}
          </span>
        </div>

        {/* Owner Column */}
        <div className="w-24 flex items-center ml-4">
          <Avatar src="/CLM/images/user-profile.png" alt="Owner" size="sm" />
        </div>

        {/* Recipients Column - Empty for folders */}
        <div className="w-28 flex items-center ml-2">
          <span className="text-13 font-graphik-regular text-secondary-dark">
            {'\u00A0'}
          </span>
        </div>

        {/* Modified Column */}
        <div className="w-32 flex items-center ml-4">
          <span className="text-13 font-graphik-regular text-secondary-dark">
            {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>
    );
  };

  // Get current folder contents for imported tab
  const getCurrentImportedFolderContents = () => {
    if (!currentFolder || currentTab !== 'Imported') {
      return { folders: [], documents: [] };
    }

    // Find the current folder in the structure
    const findFolder = (folders, folderId) => {
      for (const folder of folders) {
        if (folder.id === folderId) return folder;
        if (folder.children) {
          const found = findFolder(folder.children, folderId);
          if (found) return found;
        }
      }
      return null;
    };

    const folder = findFolder(importedFolders, currentFolder.id);
    if (!folder) return { folders: [], documents: [] };

    return {
      folders: folder.children || [],
      documents: folder.documents || []
    };
  };

  // Get all visible item IDs for select all functionality
  const getVisibleItemIds = () => {
    const ids = [];
    
    if (currentTab === 'Imported' && !currentFolder) {
      // Imported tab without folder view
      if (importedOrganizationSettings && 
          !importedOrganizationSettings.byYear && 
          !importedOrganizationSettings.byCompany && 
          !importedOrganizationSettings.byStatus) {
        // Flat structure - add all imported documents
        importedDocuments.filter(filterBySearch).forEach(doc => ids.push(doc.id));
      } else {
        // Folder structure - add folder IDs
        filteredImportedFolders.forEach(folder => ids.push(folder.id));
      }
    } else if (currentTab === 'Imported' && currentFolder) {
      // Inside imported folder
      const contents = getCurrentImportedFolderContents();
      contents.folders.forEach(folder => ids.push(folder.id));
      contents.documents.filter(filterBySearch).forEach(doc => ids.push(doc.id));
    } else if (currentFolder && currentFolder.documents) {
      // Inside regular folder
      currentFolder.documents.filter(filterBySearch).forEach(doc => ids.push(doc.id));
    } else {
      // All documents view
      filteredFolders.forEach(folder => ids.push(folder.id));
      filteredDocuments.forEach(doc => ids.push(doc.id));
    }
    
    return ids;
  };

  const handleSelectAll = (e) => {
    const visibleIds = getVisibleItemIds();
    if (e.target.checked) {
      // Select all visible items
      setSelectedItems(new Set(visibleIds));
    } else {
      // Deselect all
      setSelectedItems(new Set());
    }
  };

  // Check if all visible items are selected
  const areAllSelected = () => {
    const visibleIds = getVisibleItemIds();
    if (visibleIds.length === 0) return false;
    return visibleIds.every(id => selectedItems.has(id));
  };

  // Check if some (but not all) visible items are selected
  const areSomeSelected = () => {
    const visibleIds = getVisibleItemIds();
    const selectedCount = visibleIds.filter(id => selectedItems.has(id)).length;
    return selectedCount > 0 && selectedCount < visibleIds.length;
  };

  // Get count of selected items
  const selectedCount = selectedItems.size;

  // Check if any filter is active
  const hasActiveFilters = dateFilter.startDate || dateFilter.endDate || statusFilter.length > 0 || 
    amountFilter || ownerFilter.length > 0 || recipientsFilter.length > 0;

  return (
    <div className="bg-white">
      {/* Table Header */}
      <div className="flex items-center h-10 border-b border-gray-100 text-13 font-graphik-regular text-[#767676]" ref={filterRef}>
        <div className="flex-1 min-w-0 flex items-center">
          <div className="w-12 flex justify-center">
            <input 
              type="checkbox" 
              checked={areAllSelected()}
              ref={(el) => {
                if (el) el.indeterminate = areSomeSelected();
              }}
              onChange={handleSelectAll}
              className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" 
            />
          </div>
          {selectedCount > 0 ? (
            <span className="font-graphik-semibold text-secondary-dark">{selectedCount} selected</span>
          ) : (
            <span>Name</span>
          )}
        </div>
        
        {/* Status Filter */}
        <div className="w-28 flex items-center relative">
          <button 
            onClick={() => setActiveFilter(activeFilter === 'status' ? null : 'status')}
            className={`flex items-center gap-1 hover:text-secondary-dark transition-colors ${statusFilter.length > 0 ? 'text-brand-primary font-graphik-semibold' : ''}`}
          >
            Status
            {statusFilter.length > 0 && <span className="text-11">({statusFilter.length})</span>}
            <ChevronDownIcon className="w-3 h-3" />
          </button>
          <StatusFilter 
            isOpen={activeFilter === 'status'}
            onClose={() => setActiveFilter(null)}
            onApply={setStatusFilter}
            selectedStatuses={statusFilter}
          />
        </div>
        
        {/* Amount Filter */}
        <div className="w-24 flex items-center justify-end relative">
          <button 
            onClick={() => setActiveFilter(activeFilter === 'amount' ? null : 'amount')}
            className={`flex items-center gap-1 hover:text-secondary-dark transition-colors ${amountFilter ? 'text-brand-primary font-graphik-semibold' : ''}`}
          >
            Amount
            <ChevronDownIcon className="w-3 h-3" />
          </button>
          <AmountFilter 
            isOpen={activeFilter === 'amount'}
            onClose={() => setActiveFilter(null)}
            onApply={setAmountFilter}
            initialFilter={amountFilter}
          />
        </div>
        
        {/* Owner Filter */}
        <div className="w-24 flex items-center relative ml-4">
          <button 
            onClick={() => setActiveFilter(activeFilter === 'owner' ? null : 'owner')}
            className={`flex items-center gap-1 hover:text-secondary-dark transition-colors ${ownerFilter.length > 0 ? 'text-brand-primary font-graphik-semibold' : ''}`}
          >
            Owner
            {ownerFilter.length > 0 && <span className="text-11">({ownerFilter.length})</span>}
            <ChevronDownIcon className="w-3 h-3" />
          </button>
          <UserFilter 
            isOpen={activeFilter === 'owner'}
            onClose={() => setActiveFilter(null)}
            onApply={setOwnerFilter}
            selectedUsers={ownerFilter}
            title="Owner"
          />
        </div>
        
        {/* Recipients Filter */}
        <div className="w-28 flex items-center relative ml-2">
          <button 
            onClick={() => setActiveFilter(activeFilter === 'recipients' ? null : 'recipients')}
            className={`flex items-center gap-1 hover:text-secondary-dark transition-colors ${recipientsFilter.length > 0 ? 'text-brand-primary font-graphik-semibold' : ''}`}
          >
            Recipients
            {recipientsFilter.length > 0 && <span className="text-11">({recipientsFilter.length})</span>}
            <ChevronDownIcon className="w-3 h-3" />
          </button>
          <UserFilter 
            isOpen={activeFilter === 'recipients'}
            onClose={() => setActiveFilter(null)}
            onApply={setRecipientsFilter}
            selectedUsers={recipientsFilter}
            title="Recipients"
          />
        </div>
        
        {/* Modified/Date Filter */}
        <div className="w-32 flex items-center ml-4 relative">
          <button 
            onClick={() => setActiveFilter(activeFilter === 'date' ? null : 'date')}
            className={`flex items-center gap-1 hover:text-secondary-dark transition-colors ${dateFilter.startDate || dateFilter.endDate ? 'text-brand-primary font-graphik-semibold' : ''}`}
          >
            Modified
            <ChevronDownIcon className="w-3 h-3" />
          </button>
          <DateRangeFilter 
            isOpen={activeFilter === 'date'}
            onClose={() => setActiveFilter(null)}
            onApply={setDateFilter}
            initialStartDate={dateFilter.startDate}
            initialEndDate={dateFilter.endDate}
          />
        </div>
      </div>

      {/* Table Body */}
      <div>
        {/* Show imported documents/folders when on Imported tab and not in folder view */}
        {currentTab === 'Imported' && !currentFolder && (
          <>
            {/* If flat structure (no organization), show documents directly */}
            {importedOrganizationSettings && 
             !importedOrganizationSettings.byYear && 
             !importedOrganizationSettings.byCompany && 
             !importedOrganizationSettings.byStatus ? (
              importedDocuments.filter(filterBySearch).map(doc => renderDocumentRow(doc, 0))
            ) : (
              /* Otherwise show folder structure */
              filteredImportedFolders.map(folder => renderImportedFolder(folder))
            )}
          </>
        )}

        {/* Show imported folder contents when inside a folder on Imported tab */}
        {currentTab === 'Imported' && currentFolder && (
          <>
            {getCurrentImportedFolderContents().folders.map(folder => renderImportedFolder(folder))}
            {getCurrentImportedFolderContents().documents.filter(filterBySearch).map(doc => renderDocumentRow(doc, 0))}
          </>
        )}

        {/* Show regular folders only when not in folder view and not on Imported tab */}
        {currentTab !== 'Imported' && !currentFolder && filteredFolders.map((folder) => {
          const selected = isItemSelected(folder.id);
          return (
            <React.Fragment key={folder.id}>
              {/* Folder Row */}
              <div 
                className="group flex items-center h-17 border-b border-gray-50 hover:bg-gray-25 transition-colors cursor-pointer"
                onClick={(e) => handleFolderRowClick(folder, e)}
              >
                {/* Folder Icon (becomes checkbox on hover or when selected) + Name Column */}
                <div className="flex-1 min-w-0 flex items-center">
                  <div className="w-12 flex justify-center">
                    <input 
                      type="checkbox" 
                      checked={selected}
                      onChange={(e) => toggleItemSelection(folder.id, e)}
                      className={`w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary ${selected ? 'block' : 'hidden group-hover:block'}`}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <svg className={`w-6 h-6 ${selected ? 'hidden' : 'block group-hover:hidden'}`} viewBox="0 0 24 24" fill="none">
                      <path d="M2 20V4H10L12 6H22V20H2Z" fill="#767676"/>
                    </svg>
                  </div>
                  <div className="flex-1 pr-3 min-w-0">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-graphik-semibold text-14 text-secondary-dark truncate">
                        {folder.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Status Column - Empty for folders */}
                <div className="w-28 flex items-center">
                  <span className="text-13 font-graphik-regular text-secondary-light">
                    {folder.documents.length} items
                  </span>
                </div>

                {/* Amount Column - Empty for folders */}
                <div className="w-24 flex items-center justify-end">
                  <span className="text-13 font-graphik-regular text-secondary-dark">
                    {'\u00A0'}
                  </span>
                </div>

                {/* Owner Column */}
                <div className="w-24 flex items-center ml-4">
                  <Avatar src={folder.avatar} alt="Owner" size="sm" />
                </div>

                {/* Recipients Column - Empty for folders */}
                <div className="w-28 flex items-center ml-2">
                  <span className="text-13 font-graphik-regular text-secondary-dark">
                    {'\u00A0'}
                  </span>
                </div>

                {/* Modified Column */}
                <div className="w-32 flex items-center ml-4">
                  <span className="text-13 font-graphik-regular text-secondary-dark">
                    {folder.created}
                  </span>
                </div>
              </div>

            </React.Fragment>
          );
        })}

        {/* Show folder documents when in folder view */}
        {currentFolder && currentFolder.documents.filter(filterBySearch).map((doc) => {
          const selected = isItemSelected(doc.id);
          return (
            <div key={doc.id} className="group flex items-center h-17 border-b border-gray-50 hover:bg-gray-25 transition-colors">
              {/* Document Icon (becomes checkbox on hover or when selected) + Name Column */}
              <div className="flex-1 min-w-0 flex items-center">
                <div className="w-12 flex justify-center">
                  <input 
                    type="checkbox" 
                    checked={selected}
                    onChange={(e) => toggleItemSelection(doc.id, e)}
                    className={`w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary ${selected ? 'block' : 'hidden group-hover:block'}`}
                  />
                  <DocumentPortraitIcon className={`w-6 h-6 text-secondary-light ${selected ? 'hidden' : 'block group-hover:hidden'}`} />
                </div>
                <div className="flex-1 pr-3 min-w-0">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-graphik-semibold text-14 text-secondary-dark truncate">
                      {doc.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-13 font-graphik-regular text-secondary-dark truncate">
                      {doc.participants}
                    </span>
                    <ChevronDownIcon className="w-4 h-4 text-secondary-light flex-shrink-0" />
                  </div>
                </div>
              </div>

              <div className="w-28 flex items-center">
                <StatusLabel type={doc.status} />
              </div>

              <div className="w-24 flex items-center justify-end">
                <span className="text-13 font-graphik-regular text-secondary-dark">
                  {doc.amount || '\u00A0'}
                </span>
              </div>

              <div className="w-24 flex items-center ml-4">
                <Avatar src={doc.avatar} alt="Owner" size="sm" />
              </div>

              <div className="w-28 flex items-center ml-2">
                <div className="flex -space-x-2">
                  <Avatar src={doc.avatar || '/CLM/images/1.png'} alt="Recipient" size="sm" />
                  {doc.participants && doc.participants.includes(',') && (
                    <Avatar src="/CLM/images/2.png" alt="Recipient" size="sm" />
                  )}
                </div>
              </div>

              <div className="w-32 flex items-center ml-4">
                <span className="text-13 font-graphik-regular text-secondary-dark">
                  {doc.created}
                </span>
              </div>
            </div>
          );
        })}

        {/* Individual Documents (only show when not in folder view and not on Imported tab) */}
        {currentTab !== 'Imported' && !currentFolder && filteredDocuments.map((doc) => {
          const selected = isItemSelected(doc.id);
          return (
            <div key={doc.id} className="group flex items-center h-17 border-b border-gray-50 hover:bg-gray-25 transition-colors">
              {/* Document Icon (becomes checkbox on hover or when selected) + Name Column */}
              <div className="flex-1 min-w-0 flex items-center">
                <div className="w-12 flex justify-center">
                  <input 
                    type="checkbox" 
                    checked={selected}
                    onChange={(e) => toggleItemSelection(doc.id, e)}
                    className={`w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary ${selected ? 'block' : 'hidden group-hover:block'}`}
                  />
                  <DocumentPortraitIcon className={`w-6 h-6 text-secondary-light ${selected ? 'hidden' : 'block group-hover:hidden'}`} />
                </div>
                <div className="flex-1 pr-3 min-w-0">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-graphik-semibold text-14 text-secondary-dark truncate">
                      {doc.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-13 font-graphik-regular text-secondary-dark truncate">
                      {doc.participants}
                    </span>
                    <ChevronDownIcon className="w-4 h-4 text-secondary-light flex-shrink-0" />
                  </div>
                </div>
              </div>

              {/* Status Column */}
              <div className="w-28 flex items-center">
                <StatusLabel type={doc.status} />
              </div>

              {/* Amount Column */}
              <div className="w-24 flex items-center justify-end">
                <span className="text-13 font-graphik-regular text-secondary-dark">
                  {doc.amount || '\u00A0'}
                </span>
              </div>

              {/* Owner Column */}
              <div className="w-24 flex items-center ml-4">
                <Avatar src={doc.avatar} alt="Owner" size="sm" />
              </div>

              {/* Recipients Column */}
              <div className="w-28 flex items-center ml-2">
                <div className="flex -space-x-2">
                  <Avatar src={doc.avatar || '/CLM/images/1.png'} alt="Recipient" size="sm" />
                  {doc.participants && doc.participants.includes(',') && (
                    <Avatar src="/CLM/images/2.png" alt="Recipient" size="sm" />
                  )}
                </div>
              </div>

              {/* Modified Column */}
              <div className="w-32 flex items-center ml-4">
                <span className="text-13 font-graphik-regular text-secondary-dark">
                  {doc.created}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DocumentsTable;
