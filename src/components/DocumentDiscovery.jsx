import React from 'react';
import { getDocumentStats } from '../data/mockGmailDocuments';

const DocumentDiscovery = ({ documents, onContinue }) => {
  const stats = getDocumentStats(documents);
  
  // Show preview of first few documents
  const previewDocuments = documents.slice(0, 6);

  return (
    <div className="py-4">
      {/* Success Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EDF5F3' }}>
          <svg className="w-8 h-8" fill="none" stroke="#248567" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-18 font-graphik-bold text-secondary-dark mb-2">
          Found {documents.length} Documents
        </h3>
        <p className="text-14 font-graphik-regular text-secondary-light">
          We discovered business documents and agreements in your Gmail
        </p>
      </div>

      {/* Document Statistics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-24 font-graphik-bold text-brand-primary mb-1">
            {stats.signed}
          </div>
          <div className="text-13 font-graphik-regular text-secondary-light">
            Signed Documents
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-24 font-graphik-bold text-secondary-dark mb-1">
            {stats.withAmount}
          </div>
          <div className="text-13 font-graphik-regular text-secondary-light">
            With Amounts
          </div>
        </div>
      </div>

      {/* Document Type Breakdown */}
      <div className="mb-6">
        <h4 className="text-14 font-graphik-semibold text-secondary-dark mb-3">
          Document Types Found:
        </h4>
        <div className="space-y-2">
          {Object.entries(
            documents.reduce((acc, doc) => {
              acc[doc.type] = (acc[doc.type] || 0) + 1;
              return acc;
            }, {})
          ).map(([type, count]) => (
            <div key={type} className="flex justify-between items-center">
              <span className="text-13 font-graphik-regular text-secondary-dark">
                {type}
              </span>
              <span className="text-13 font-graphik-semibold text-brand-primary">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Document Preview */}
      <div className="mb-6">
        <h4 className="text-14 font-graphik-semibold text-secondary-dark mb-3">
          Preview of Documents:
        </h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {previewDocuments.map((doc) => (
            <div key={doc.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EDF5F3' }}>
                <svg className="w-4 h-4" fill="none" stroke="#248567" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-13 font-graphik-semibold text-secondary-dark truncate">
                  {doc.name}
                </div>
                <div className="text-12 font-graphik-regular text-secondary-light">
                  {doc.company} • {new Date(doc.date).toLocaleDateString()}
                </div>
              </div>
              <div className="text-12 font-graphik-regular text-secondary-light flex-shrink-0">
                {doc.fileType}
              </div>
            </div>
          ))}
          {documents.length > 6 && (
            <div className="text-center py-2 text-13 font-graphik-regular text-secondary-light">
              +{documents.length - 6} more documents...
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default DocumentDiscovery;