import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import TemplatesContent from './components/TemplatesContent';
import HomeContent from './components/HomeContent';
import ContactsContent from './components/ContactsContent';
import GmailImportModal from './components/GmailImportModal';
import GetStartedPage from './components/GetStartedPage';
import BulkImportPage from './components/BulkImportPage';
import DocumentViewerPage from './components/DocumentViewerPage';

function App() {
  const [isGmailImportModalOpen, setIsGmailImportModalOpen] = useState(false);
  const [showGetStartedPage, setShowGetStartedPage] = useState(false);
  const [showBulkImportPage, setShowBulkImportPage] = useState(false);
  const [importedDocuments, setImportedDocuments] = useState([]);
  const [importedOrganizationSettings, setImportedOrganizationSettings] = useState(null);
  const [currentTab, setCurrentTab] = useState('All documents');
  const [currentFolder, setCurrentFolder] = useState(null);
  const [activePage, setActivePage] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingDocument, setViewingDocument] = useState(null);

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

  const handleBulkImportComplete = (fileNames) => {
    // Convert file names to document objects
    const newDocuments = fileNames.map((name, index) => ({
      id: `bulk-${Date.now()}-${index}`,
      name: name,
      company: 'Bulk Import',
      status: 'Completed',
      date: new Date().toISOString(),
      isImported: true,
      importDate: new Date().toISOString()
    }));
    
    // Add to imported documents
    setImportedDocuments(prev => [...prev, ...newDocuments]);
    
    // Set organization settings for flat structure
    setImportedOrganizationSettings({ byYear: false, byCompany: false, byStatus: false });
    
    // Close bulk import and switch to Imported tab
    setShowBulkImportPage(false);
    setCurrentFolder(null);
    setCurrentTab('Imported');
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

  const handleOpenDocument = (document) => {
    setViewingDocument(document);
  };

  const handleCloseDocumentViewer = () => {
    setViewingDocument(null);
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
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header - Full width of remaining space */}
        <div className="w-full z-20">
          <Header 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery}
            activePage={activePage}
          />
        </div>
        
        {/* Main content - Scrollable, full width */}
        <main className="flex-1 overflow-auto">
          {activePage === 'Home' && (
            <HomeContent 
              onNavigateToDocuments={() => setActivePage('Documents')}
            />
          )}
          {activePage === 'Documents' && (
            <MainContent 
              importedDocuments={importedDocuments}
              importedOrganizationSettings={importedOrganizationSettings}
              currentTab={currentTab}
              onTabChange={setCurrentTab}
              currentFolder={currentFolder}
              onFolderChange={setCurrentFolder}
              onOpenDocumentModal={handleOpenGetStarted}
              onOpenBulkImport={handleOpenBulkImport}
              searchQuery={searchQuery}
              onOpenDocument={handleOpenDocument}
            />
          )}
          {activePage === 'Templates' && (
            <TemplatesContent searchQuery={searchQuery} />
          )}
          {activePage === 'Contacts' && (
            <ContactsContent />
          )}
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
        <BulkImportPage 
          onClose={handleCloseBulkImport} 
          onImportComplete={handleBulkImportComplete}
        />
      )}

      {/* Document Viewer Page */}
      {viewingDocument && (
        <DocumentViewerPage 
          document={viewingDocument}
          onClose={handleCloseDocumentViewer}
        />
      )}
    </div>
  );
}

export default App;
