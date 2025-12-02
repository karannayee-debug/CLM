import React, { useState, useEffect } from 'react';

const DocumentSelection = ({ documents, selectedDocuments, onSelectionChange, onContinue }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [localSelectedDocuments, setLocalSelectedDocuments] = useState(selectedDocuments);

  // Get unique document types for filter
  const documentTypes = ['All', ...new Set(documents.map(doc => doc.type))];

  // Filter documents based on search and type
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || doc.type === filterType;
    return matchesSearch && matchesType;
  });

  useEffect(() => {
    onSelectionChange(localSelectedDocuments);
  }, [localSelectedDocuments, onSelectionChange]);

  const handleSelectAll = () => {
    if (localSelectedDocuments.length === filteredDocuments.length) {
      // Deselect all filtered documents
      const remainingSelected = localSelectedDocuments.filter(selected => 
        !filteredDocuments.find(filtered => filtered.id === selected.id)
      );
      setLocalSelectedDocuments(remainingSelected);
    } else {
      // Select all filtered documents
      const allFilteredIds = filteredDocuments.map(doc => doc.id);
      const existingSelected = localSelectedDocuments.filter(selected => 
        !allFilteredIds.includes(selected.id)
      );
      setLocalSelectedDocuments([...existingSelected, ...filteredDocuments]);
    }
  };

  const handleDocumentToggle = (document) => {
    const isSelected = localSelectedDocuments.find(doc => doc.id === document.id);
    if (isSelected) {
      setLocalSelectedDocuments(localSelectedDocuments.filter(doc => doc.id !== document.id));
    } else {
      setLocalSelectedDocuments([...localSelectedDocuments, document]);
    }
  };

  const isDocumentSelected = (document) => {
    return localSelectedDocuments.find(doc => doc.id === document.id) !== undefined;
  };

  const areAllFilteredSelected = filteredDocuments.length > 0 && 
    filteredDocuments.every(doc => isDocumentSelected(doc));

  return (
    <div className="py-4">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-16 font-graphik-semibold text-secondary-dark mb-2">
          Select Documents to Import
        </h3>
        <p className="text-14 font-graphik-regular text-secondary-light">
          Choose which documents you'd like to import into your workspace
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-14 font-graphik-regular focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-3 py-2 border border-gray-200 rounded-lg text-14 font-graphik-regular focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"
        >
          {documentTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Selection Summary */}
      <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={areAllFilteredSelected}
            onChange={handleSelectAll}
            className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
          />
          <span className="text-14 font-graphik-semibold text-secondary-dark">
            Select All ({filteredDocuments.length})
          </span>
        </div>
        <div className="text-14 font-graphik-regular text-secondary-light">
          {localSelectedDocuments.length} selected
        </div>
      </div>

      {/* Document List */}
      <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-lg">
        {filteredDocuments.length === 0 ? (
          <div className="p-6 text-center text-14 font-graphik-regular text-secondary-light">
            No documents found matching your criteria
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredDocuments.map((document) => (
              <label
                key={document.id}
                className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isDocumentSelected(document)}
                  onChange={() => handleDocumentToggle(document)}
                  className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                />
                
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EDF5F3' }}>
                  <svg className="w-4 h-4" fill="none" stroke="#248567" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-14 font-graphik-semibold text-secondary-dark truncate">
                    {document.name}
                  </div>
                  <div className="text-12 font-graphik-regular text-secondary-light">
                    {document.company} • {new Date(document.date).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-12 font-graphik-regular text-secondary-light">
                    {document.type}
                  </div>
                  {document.amount && (
                    <div className="text-12 font-graphik-semibold text-secondary-dark">
                      {document.amount}
                    </div>
                  )}
                  <div className={`px-2 py-1 rounded text-11 font-graphik-semibold ${
                    document.status === 'Signed' ? 'bg-green-100 text-green-800' :
                    document.status === 'Not Signed' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {document.status}
                  </div>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default DocumentSelection;