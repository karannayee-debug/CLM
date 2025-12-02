import React, { useState, useEffect } from 'react';

const ImportProgress = ({ documents, organizationSettings, onComplete }) => {
  const [currentDocumentIndex, setCurrentDocumentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [importedDocuments, setImportedDocuments] = useState([]);

  useEffect(() => {
    if (documents.length === 0) return;

    // Calculate time per document to complete within 30 seconds
    const maxTotalTime = 30000; // 30 seconds in milliseconds
    const timePerDocument = Math.min(maxTotalTime / documents.length, 200); // Max 200ms per doc, ensure completion in 30s

    const importDocument = async (index) => {
      if (index >= documents.length) {
        setIsComplete(true);
        setTimeout(() => {
          onComplete(importedDocuments);
        }, 1000);
        return;
      }

      const document = documents[index];
      setCurrentDocumentIndex(index);
      
      // Fast processing time based on total documents to complete in ~30 seconds
      const processingTime = Math.random() * (timePerDocument * 0.5) + (timePerDocument * 0.5);
      
      await new Promise(resolve => setTimeout(resolve, processingTime));
      
      // Add document to imported list
      setImportedDocuments(prev => [...prev, document]);
      
      // Update progress
      const newProgress = ((index + 1) / documents.length) * 100;
      setProgress(newProgress);
      
      // Import next document with minimal delay
      setTimeout(() => importDocument(index + 1), 50);
    };

    // Start importing
    importDocument(0);
  }, [documents, onComplete]);

  const getCurrentDocument = () => {
    return documents[currentDocumentIndex];
  };

  const getOrganizationDescription = () => {
    const settings = [];
    if (organizationSettings.byYear) settings.push('Year');
    if (organizationSettings.byCompany) settings.push('Company');
    if (organizationSettings.byStatus) settings.push('Status');
    
    if (settings.length === 0) return 'single folder';
    return `folders organized by ${settings.join(', ')}`;
  };

  if (isComplete) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EDF5F3' }}>
          <svg className="w-8 h-8" fill="none" stroke="#248567" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-18 font-graphik-bold text-secondary-dark mb-2">
          Import Complete!
        </h3>
        <p className="text-14 font-graphik-regular text-secondary-light mb-4">
          Successfully imported {documents.length} documents
        </p>
        <div className="text-13 font-graphik-regular text-secondary-light">
          Documents organized into {getOrganizationDescription()}
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-18 font-graphik-bold text-secondary-dark mb-2">
          Importing Documents
        </h3>
        <p className="text-14 font-graphik-regular text-secondary-light">
          Please wait while we import and organize your documents
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-14 font-graphik-semibold text-secondary-dark">
            Progress
          </span>
          <span className="text-14 font-graphik-semibold text-brand-primary">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-brand-primary h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-12 font-graphik-regular text-secondary-light mt-1">
          <span>{importedDocuments.length} imported</span>
          <span>{documents.length} total</span>
        </div>
      </div>

      {/* Current Document */}
      {getCurrentDocument() && (
        <div className="mb-6">
          <div className="text-14 font-graphik-semibold text-secondary-dark mb-3">
            Currently Processing:
          </div>
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-14 font-graphik-semibold text-secondary-dark truncate">
                {getCurrentDocument().name}
              </div>
              <div className="text-12 font-graphik-regular text-secondary-light">
                {getCurrentDocument().company} • {getCurrentDocument().type}
              </div>
            </div>
            <div className="text-12 font-graphik-regular text-blue-600 flex-shrink-0">
              {getCurrentDocument().fileType}
            </div>
          </div>
        </div>
      )}

      {/* Import Steps */}
      <div className="mb-6">
        <div className="text-14 font-graphik-semibold text-secondary-dark mb-3">
          Import Steps:
        </div>
        <div className="space-y-3">
          <div className={`flex items-center gap-3 p-3 rounded-lg ${
            progress > 0 ? 'bg-green-50 text-green-800' : 'bg-gray-50 text-gray-600'
          }`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              progress > 0 ? 'bg-green-200' : 'bg-gray-200'
            }`}>
              {progress > 0 ? (
                <svg className="w-3 h-3" fill="none" stroke="#248567" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              )}
            </div>
            <span className="text-13 font-graphik-regular">
              Processing document contents
            </span>
          </div>
          
          <div className={`flex items-center gap-3 p-3 rounded-lg ${
            progress > 25 ? 'bg-green-50 text-green-800' : 'bg-gray-50 text-gray-600'
          }`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              progress > 25 ? 'bg-green-200' : 'bg-gray-200'
            }`}>
              {progress > 25 ? (
                <svg className="w-3 h-3" fill="none" stroke="#248567" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              )}
            </div>
            <span className="text-13 font-graphik-regular">
              Extracting metadata
            </span>
          </div>
          
          <div className={`flex items-center gap-3 p-3 rounded-lg ${
            progress > 50 ? 'bg-green-50 text-green-800' : 'bg-gray-50 text-gray-600'
          }`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              progress > 50 ? 'bg-green-200' : 'bg-gray-200'
            }`}>
              {progress > 50 ? (
                <svg className="w-3 h-3" fill="none" stroke="#248567" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              )}
            </div>
            <span className="text-13 font-graphik-regular">
              Creating folder structure
            </span>
          </div>
          
          <div className={`flex items-center gap-3 p-3 rounded-lg ${
            progress > 75 ? 'bg-green-50 text-green-800' : 'bg-gray-50 text-gray-600'
          }`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              progress > 75 ? 'bg-green-200' : 'bg-gray-200'
            }`}>
              {progress > 75 ? (
                <svg className="w-3 h-3" fill="none" stroke="#248567" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              )}
            </div>
            <span className="text-13 font-graphik-regular">
              Organizing documents
            </span>
          </div>
        </div>
      </div>

      {/* Recently Imported */}
      {importedDocuments.length > 0 && (
        <div>
          <div className="text-14 font-graphik-semibold text-secondary-dark mb-3">
            Recently Imported:
          </div>
          <div className="max-h-40 overflow-y-auto space-y-2">
            {importedDocuments.slice(-5).reverse().map((doc) => (
              <div key={doc.id} className="flex items-center gap-3 p-2 bg-green-50 rounded">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#248567" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div className="flex-1 min-w-0">
                  <div className="text-12 font-graphik-semibold text-secondary-dark truncate">
                    {doc.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportProgress;