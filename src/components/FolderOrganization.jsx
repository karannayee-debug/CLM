import React, { useState, useEffect } from 'react';
import { organizeByYear, organizeByCompany, organizeByStatus } from '../data/mockGmailDocuments';

const FolderOrganization = ({ selectedDocuments, organizationSettings, onSettingsChange, onStartImport }) => {
  const [localSettings, setLocalSettings] = useState(organizationSettings);

  useEffect(() => {
    onSettingsChange(localSettings);
  }, [localSettings, onSettingsChange]);

  const handleSettingChange = (setting, value) => {
    setLocalSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  // Generate preview of folder structure
  const generateFolderPreview = () => {
    if (!localSettings.byYear && !localSettings.byCompany && !localSettings.byStatus) {
      return ['All Documents'];
    }

    let structure = {};
    let docs = selectedDocuments;

    if (localSettings.byYear) {
      const byYear = organizeByYear(docs);
      Object.keys(byYear).forEach(year => {
        structure[year] = byYear[year];
      });
    }

    if (localSettings.byCompany) {
      const byCompany = organizeByCompany(docs);
      Object.keys(byCompany).forEach(company => {
        if (localSettings.byYear) {
          // Nested structure: Year > Company
          Object.keys(structure).forEach(year => {
            const yearDocs = structure[year];
            const companyInYear = yearDocs.filter(doc => doc.company === company);
            if (companyInYear.length > 0) {
              structure[`${year}/${company}`] = companyInYear;
            }
          });
        } else {
          structure[company] = byCompany[company];
        }
      });
    }

    if (localSettings.byStatus) {
      const byStatus = organizeByStatus(docs);
      Object.keys(byStatus).forEach(status => {
        if (localSettings.byYear || localSettings.byCompany) {
          // Add status as deepest level
          Object.keys(structure).forEach(key => {
            const keyDocs = structure[key];
            const statusDocs = keyDocs.filter(doc => doc.status === status);
            if (statusDocs.length > 0) {
              structure[`${key}/${status}`] = statusDocs;
            }
          });
        } else {
          structure[status] = byStatus[status];
        }
      });
    }

    return Object.keys(structure).length > 0 ? Object.keys(structure).slice(0, 10) : ['All Documents'];
  };

  const folderPreview = generateFolderPreview();
  const hasAnySettings = localSettings.byYear || localSettings.byCompany || localSettings.byStatus;

  return (
    <div className="py-4">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-16 font-graphik-semibold text-secondary-dark mb-2">
          Organize Your Documents
        </h3>
        <p className="text-14 font-graphik-regular text-secondary-light">
          Choose how to organize your {selectedDocuments.length} selected documents into folders
        </p>
      </div>

      {/* Organization Options */}
      <div className="space-y-4 mb-6">
        <div className="p-4 border border-gray-200 rounded-lg">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={localSettings.byYear}
              onChange={(e) => handleSettingChange('byYear', e.target.checked)}
              className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary mt-1"
            />
            <div className="flex-1">
              <div className="text-14 font-graphik-semibold text-secondary-dark mb-1">
                Organize by Year
              </div>
              <div className="text-13 font-graphik-regular text-secondary-light">
                Create folders for each year (2022, 2023, 2024, 2025)
              </div>
            </div>
          </label>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={localSettings.byCompany}
              onChange={(e) => handleSettingChange('byCompany', e.target.checked)}
              className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary mt-1"
            />
            <div className="flex-1">
              <div className="text-14 font-graphik-semibold text-secondary-dark mb-1">
                Organize by Company
              </div>
              <div className="text-13 font-graphik-regular text-secondary-light">
                Create folders for each company or organization
              </div>
            </div>
          </label>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={localSettings.byStatus}
              onChange={(e) => handleSettingChange('byStatus', e.target.checked)}
              className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary mt-1"
            />
            <div className="flex-1">
              <div className="text-14 font-graphik-semibold text-secondary-dark mb-1">
                Organize by Status
              </div>
              <div className="text-13 font-graphik-regular text-secondary-light">
                Create folders for document status (Signed, Not Signed, Draft)
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Preview Section */}
      <div className="mb-6">
        <h4 className="text-14 font-graphik-semibold text-secondary-dark mb-3">
          Folder Structure Preview:
        </h4>
        <div className="p-4 bg-gray-50 rounded-lg">
          {hasAnySettings ? (
            <div className="space-y-2">
              {folderPreview.map((folder, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5L12 5H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="text-13 font-graphik-regular text-secondary-dark">
                    {folder}
                  </span>
                </div>
              ))}
              {folderPreview.length === 10 && (
                <div className="text-12 font-graphik-regular text-secondary-light italic">
                  ...and more folders
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-4">
              <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5L12 5H5a2 2 0 00-2 2z" />
              </svg>
              <div className="text-13 font-graphik-regular text-secondary-light">
                All documents will be imported into a single folder
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Document Count by Organization */}
      {hasAnySettings && (
        <div className="mb-6">
          <h4 className="text-14 font-graphik-semibold text-secondary-dark mb-3">
            Distribution Summary:
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {localSettings.byYear && (
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-12 font-graphik-semibold text-blue-800 mb-1">
                  By Year
                </div>
                <div className="text-11 text-blue-700">
                  {Object.keys(organizeByYear(selectedDocuments)).length} year folders
                </div>
              </div>
            )}
            {localSettings.byCompany && (
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-12 font-graphik-semibold text-green-800 mb-1">
                  By Company
                </div>
                <div className="text-11 text-green-700">
                  {Object.keys(organizeByCompany(selectedDocuments)).length} company folders
                </div>
              </div>
            )}
            {localSettings.byStatus && (
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="text-12 font-graphik-semibold text-purple-800 mb-1">
                  By Status
                </div>
                <div className="text-11 text-purple-700">
                  {Object.keys(organizeByStatus(selectedDocuments)).length} status folders
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default FolderOrganization;