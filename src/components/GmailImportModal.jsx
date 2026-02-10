import React, { useState, useEffect } from 'react';
import { XIcon } from './Icons';
import GmailConnection from './GmailConnection';
import DocumentDiscovery from './DocumentDiscovery';
import DocumentSelection from './DocumentSelection';
import FolderOrganization from './FolderOrganization';
import { allGmailDocuments } from '../data/mockGmailDocuments';

const STEPS = {
  CONNECTION: 'connection',
  DISCOVERY: 'discovery',
  SELECTION: 'selection',
  ORGANIZATION: 'organization',
  IMPORTING: 'importing',
  SUCCESS: 'success'
};

const GmailImportModal = ({ isOpen, onClose, onImportComplete }) => {
  const [currentStep, setCurrentStep] = useState(STEPS.CONNECTION);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [organizationSettings, setOrganizationSettings] = useState({
    byYear: false,
    byCompany: false,
    byStatus: false
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  // Reset modal state when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(STEPS.CONNECTION);
      setSelectedDocuments([]);
      setOrganizationSettings({
        byYear: false,
        byCompany: false,
        byStatus: false
      });
      setIsConnecting(false);
      setIsConnected(false);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Simulate connection delay (2-3 seconds)
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsConnecting(false);
    setIsConnected(true);
    
    // Auto-advance to discovery after brief success display
    setTimeout(() => {
      setCurrentStep(STEPS.DISCOVERY);
    }, 1000);
  };

  const handleDocumentSelection = (documents) => {
    setSelectedDocuments(documents);
  };

  const handleContinueToSelection = () => {
    setCurrentStep(STEPS.SELECTION);
  };

  const handleContinueToOrganization = () => {
    setCurrentStep(STEPS.ORGANIZATION);
  };

  const handleOrganizationSettings = (settings) => {
    setOrganizationSettings(settings);
  };

  const handleStartImport = async () => {
    // Show importing state
    setCurrentStep(STEPS.IMPORTING);
    
    // Simulate import delay (2-3 seconds)
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Show success
    setCurrentStep(STEPS.SUCCESS);
  };

  const handleViewFiles = () => {
    onImportComplete(selectedDocuments, organizationSettings);
    onClose();
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case STEPS.CONNECTION:
        return 'Connect to Gmail';
      case STEPS.DISCOVERY:
        return 'Documents Found';
      case STEPS.SELECTION:
        return 'Select Documents';
      case STEPS.ORGANIZATION:
        return 'Organize Documents';
      case STEPS.IMPORTING:
        return 'Importing Documents';
      case STEPS.SUCCESS:
        return 'Import Complete';
      default:
        return 'Gmail Import';
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case STEPS.CONNECTION:
        return (
          <GmailConnection
            isConnecting={isConnecting}
            isConnected={isConnected}
            onConnect={handleConnect}
          />
        );
      case STEPS.DISCOVERY:
        return (
          <DocumentDiscovery
            documents={allGmailDocuments}
            onContinue={handleContinueToSelection}
          />
        );
      case STEPS.SELECTION:
        return (
          <DocumentSelection
            documents={allGmailDocuments}
            selectedDocuments={selectedDocuments}
            onSelectionChange={handleDocumentSelection}
            onContinue={handleContinueToOrganization}
          />
        );
      case STEPS.ORGANIZATION:
        return (
          <FolderOrganization
            selectedDocuments={selectedDocuments}
            organizationSettings={organizationSettings}
            onSettingsChange={handleOrganizationSettings}
            onStartImport={handleStartImport}
          />
        );
      case STEPS.IMPORTING:
        return (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-brand-primary/10">
              <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-18 font-graphik-bold text-secondary-dark mb-2">
              Importing Documents
            </h3>
            <p className="text-14 font-graphik-regular text-secondary-light">
              Please wait while we import {selectedDocuments.length} documents...
            </p>
          </div>
        );
      case STEPS.SUCCESS:
        return (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EDF5F3' }}>
              <svg className="w-8 h-8" fill="none" stroke="#248567" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-18 font-graphik-bold text-secondary-dark mb-2">
              Import Successful!
            </h3>
            <p className="text-14 font-graphik-regular text-secondary-light mb-6">
              {selectedDocuments.length} documents have been imported successfully.
            </p>
            <button
              onClick={handleViewFiles}
              className="px-6 py-2.5 bg-[#EDF5F3] text-[#248567] text-14 font-graphik-semibold rounded-lg hover:bg-[#e0efe9] transition-colors"
            >
              View files
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-18 font-graphik-bold text-secondary-dark">
              {getStepTitle()}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <XIcon className="w-5 h-5 text-secondary-light" />
            </button>
          </div>

          {/* Progress indicator */}
          {currentStep !== STEPS.SUCCESS && (
            <div className="px-6 py-3 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center justify-center space-x-2">
                {Object.values(STEPS).slice(0, -1).map((step, index) => (
                  <React.Fragment key={step}>
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-graphik-semibold ${
                        Object.values(STEPS).indexOf(currentStep) >= index
                          ? 'bg-brand-primary text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index < Object.values(STEPS).length - 2 && (
                      <div 
                        className={`h-0.5 w-8 ${
                          Object.values(STEPS).indexOf(currentStep) > index
                            ? 'bg-brand-primary' 
                            : 'bg-gray-200'
                        }`} 
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Content - Scrollable */}
          <div className="p-6 overflow-y-auto flex-1">
            {renderStepContent()}
          </div>

          {/* Fixed Footer */}
          {(currentStep === STEPS.DISCOVERY || currentStep === STEPS.SELECTION || currentStep === STEPS.ORGANIZATION) && (
            <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0 bg-white">
              {currentStep === STEPS.DISCOVERY && (
                <div className="flex justify-end">
                  <button
                    onClick={handleContinueToSelection}
                    className="px-6 py-2.5 bg-brand-primary text-white text-14 font-graphik-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
                  >
                    Continue to Selection
                  </button>
                </div>
              )}
              {currentStep === STEPS.SELECTION && (
                <div className="flex justify-between items-center">
                  <div className="text-14 font-graphik-regular text-secondary-light">
                    {selectedDocuments.length} of {allGmailDocuments.length} documents selected
                  </div>
                  <button
                    onClick={handleContinueToOrganization}
                    disabled={selectedDocuments.length === 0}
                    className="px-6 py-2.5 bg-brand-primary text-white text-14 font-graphik-semibold rounded-lg hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Organization
                  </button>
                </div>
              )}
              {currentStep === STEPS.ORGANIZATION && (
                <div className="flex justify-end">
                  <button
                    onClick={handleStartImport}
                    className="px-6 py-2.5 bg-brand-primary text-white text-14 font-graphik-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
                  >
                    Start Import
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GmailImportModal;