import React, { useState } from 'react';
import { DocumentPortraitIcon, ChevronDownIcon, ChevronRightIcon } from './Icons';
import StatusLabel from './StatusLabel';
import Avatar from './Avatar';

const DocumentsTable = ({ currentFolder, onFolderClick }) => {
  const [expandedFolders, setExpandedFolders] = useState({});

  const toggleFolder = (folderId) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderId]: !prev[folderId]
    }));
  };

  const handleFolderRowClick = (folder, e) => {
    e.stopPropagation();
    if (onFolderClick) {
      onFolderClick(folder);
    }
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

  return (
    <div className="bg-white">
      {/* Table Header */}
      <div className="flex items-center h-10 border-b border-gray-100 text-13 font-graphik-regular text-[#767676]">
        <div className="flex-1 min-w-0 px-0 flex items-center">
          Name
        </div>
        <div className="w-40 flex items-center">
          Status
        </div>
        <div className="w-32 flex items-center justify-end">
          Amount
        </div>
        <div className="w-40 flex items-center ml-6">
          Created
        </div>
      </div>

      {/* Table Body */}
      <div>
        {/* Show folders only when not in folder view */}
        {!currentFolder && populatedFolders.map((folder) => (
          <React.Fragment key={folder.id}>
            {/* Folder Row */}
            <div 
              className="flex items-center h-17 border-b border-gray-50 hover:bg-gray-25 transition-colors cursor-pointer"
              onClick={(e) => handleFolderRowClick(folder, e)}
            >
              {/* Folder Icon + Name Column */}
              <div className="flex-1 min-w-0 flex items-center">
                <div className="w-12 flex justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
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
              <div className="w-40 flex items-center">
                <span className="text-13 font-graphik-regular text-secondary-light">
                  {folder.documents.length} items
                </span>
              </div>

              {/* Amount Column - Empty for folders */}
              <div className="w-32 flex items-center justify-end">
                <span className="text-13 font-graphik-regular text-secondary-dark">
                  {'\u00A0'}
                </span>
              </div>

              {/* Created Column */}
              <div className="w-40 flex items-center gap-2 ml-6">
                <Avatar src={folder.avatar} alt="User avatar" size="sm" />
                <span className="text-13 font-graphik-regular text-secondary-dark">
                  {folder.created}
                </span>
              </div>
            </div>

          </React.Fragment>
        ))}

        {/* Show folder documents when in folder view */}
        {currentFolder && currentFolder.documents.map((doc) => (
          <div key={doc.id} className="flex items-center h-17 border-b border-gray-50 hover:bg-gray-25 transition-colors">
            {/* Document Icon + Name Column */}
            <div className="flex-1 min-w-0 flex items-center">
              <div className="w-12 flex justify-center">
                <DocumentPortraitIcon className="w-6 h-6 text-secondary-light" />
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

            <div className="w-40 flex items-center">
              <StatusLabel type={doc.status} />
            </div>

            <div className="w-32 flex items-center justify-end">
              <span className="text-13 font-graphik-regular text-secondary-dark">
                {doc.amount || '\u00A0'}
              </span>
            </div>

            <div className="w-40 flex items-center gap-2 ml-6">
              <Avatar src={doc.avatar} alt="User avatar" size="sm" />
              <span className="text-13 font-graphik-regular text-secondary-dark">
                {doc.created}
              </span>
            </div>
          </div>
        ))}

        {/* Individual Documents (only show when not in folder view) */}
        {!currentFolder && documents.map((doc) => (
          <div key={doc.id} className="flex items-center h-17 border-b border-gray-50 hover:bg-gray-25 transition-colors">
            {/* Document Icon + Name Column */}
            <div className="flex-1 min-w-0 flex items-center">
              <div className="w-12 flex justify-center">
                <DocumentPortraitIcon className="w-6 h-6 text-secondary-light" />
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
            <div className="w-40 flex items-center">
              <StatusLabel type={doc.status} />
            </div>

            {/* Amount Column */}
            <div className="w-32 flex items-center justify-end">
              <span className="text-13 font-graphik-regular text-secondary-dark">
                {doc.amount || '\u00A0'}
              </span>
            </div>

            {/* Created Column */}
            <div className="w-40 flex items-center gap-2 ml-6">
              <Avatar src={doc.avatar} alt="User avatar" size="sm" />
              <span className="text-13 font-graphik-regular text-secondary-dark">
                {doc.created}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsTable;
