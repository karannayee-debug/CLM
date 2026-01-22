import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import GmailImportModal from './components/GmailImportModal';
import GetStartedPage from './components/GetStartedPage';
import BulkImportPage from './components/BulkImportPage';

function App() {
  const [isGmailImportModalOpen, setIsGmailImportModalOpen] = useState(false);
  const [showGetStartedPage, setShowGetStartedPage] = useState(false);
  const [showBulkImportPage, setShowBulkImportPage] = useState(false);
  const [importedDocuments, setImportedDocuments] = useState([]);
  const [importedOrganizationSettings, setImportedOrganizationSettings] = useState(null);
  const [currentTab, setCurrentTab] = useState('All documents');
  const [currentFolder, setCurrentFolder] = useState(null);

  const handleOpenGmailImport = () => {
    setIsGmailImportModalOpen(true);
  };

  const handleCloseGmailImport = () => {
    setIsGmailImportModalOpen(false);
  };

  const handleOpenGetStarted = () => {
    setShowGetStartedPage(true);
  };

  const handleCloseGetStarted = () => {
    setShowGetStartedPage(false);
  };

  const handleOpenBulkImport = () => {
    setShowBulkImportPage(true);
  };

  const handleCloseBulkImport = () => {
    setShowBulkImportPage(false);
  };

  const handleImportComplete = (documents, organizationSettings) => {
    // Add imported documents to state with organization metadata
    const documentsWithImportInfo = documents.map(doc => ({
      ...doc,
      isImported: true,
      importDate: new Date().toISOString()
    }));
    
    setImportedDocuments(prev => [...prev, ...documentsWithImportInfo]);
    setImportedOrganizationSettings(organizationSettings);
    
    // Reset folder navigation and switch to imported tab root
    setCurrentFolder(null);
    setCurrentTab('Imported');
  };

  // Show Get Started Page (full page view without sidebar)
  if (showGetStartedPage) {
    return (
      <div className="h-screen bg-white overflow-hidden">
        <GetStartedPage 
          onClose={handleCloseGetStarted} 
          onOpenGmailImport={handleOpenGmailImport}
        />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar - Fixed position */}
      <div className="w-60 flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header - Full width of remaining space */}
        <div className="w-full z-20">
          <Header />
        </div>
        
        {/* Main content - Scrollable, full width */}
        <main className="flex-1 overflow-auto">
          <MainContent 
            importedDocuments={importedDocuments}
            importedOrganizationSettings={importedOrganizationSettings}
            currentTab={currentTab}
            onTabChange={setCurrentTab}
            currentFolder={currentFolder}
            onFolderChange={setCurrentFolder}
            onOpenDocumentModal={handleOpenGetStarted}
            onOpenBulkImport={handleOpenBulkImport}
          />
        </main>
      </div>

      {/* Gmail Import Modal */}
      <GmailImportModal
        isOpen={isGmailImportModalOpen}
        onClose={handleCloseGmailImport}
        onImportComplete={handleImportComplete}
      />

      {/* Bulk Import Page */}
      {showBulkImportPage && (
        <BulkImportPage onClose={handleCloseBulkImport} />
      )}
    </div>
  );
}

export default App;
