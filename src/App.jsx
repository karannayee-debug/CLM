import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import GmailImportModal from './components/GmailImportModal';
import GetStartedModal from './components/GetStartedModal';

function App() {
  const [isGmailImportModalOpen, setIsGmailImportModalOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const [importedDocuments, setImportedDocuments] = useState([]);
  const [currentTab, setCurrentTab] = useState('All documents');

  const handleOpenGmailImport = () => {
    setIsGmailImportModalOpen(true);
  };

  const handleCloseGmailImport = () => {
    setIsGmailImportModalOpen(false);
  };

  const handleOpenGetStarted = () => {
    setIsGetStartedModalOpen(true);
  };

  const handleCloseGetStarted = () => {
    setIsGetStartedModalOpen(false);
  };

  const handleImportComplete = (documents, organizationSettings) => {
    // Add imported documents to state with organization metadata
    const documentsWithImportInfo = documents.map(doc => ({
      ...doc,
      isImported: true,
      importDate: new Date().toISOString(),
      organization: organizationSettings
    }));
    
    setImportedDocuments(prev => [...prev, ...documentsWithImportInfo]);
    
    // Switch to imported tab
    setCurrentTab('Imported');
  };

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
            currentTab={currentTab}
            onTabChange={setCurrentTab}
            onOpenDocumentModal={handleOpenGetStarted}
          />
        </main>
      </div>

      {/* Get Started Modal */}
      <GetStartedModal
        isOpen={isGetStartedModalOpen}
        onClose={handleCloseGetStarted}
        onOpenGmailImport={handleOpenGmailImport}
      />

      {/* Gmail Import Modal */}
      <GmailImportModal
        isOpen={isGmailImportModalOpen}
        onClose={handleCloseGmailImport}
        onImportComplete={handleImportComplete}
      />
    </div>
  );
}

export default App;
