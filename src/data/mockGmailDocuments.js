// Mock Gmail documents data - 235 fake business documents
export const mockGmailDocuments = [
  // Sales Agreements
  {
    id: 1,
    name: 'Sales Agreement - TechFlow Solutions Q4 2024',
    sender: 'sarah.johnson@techflow.com',
    company: 'TechFlow Solutions',
    date: '2024-11-15',
    status: 'Signed',
    type: 'Sales Agreement',
    amount: '$125,000.00',
    fileType: 'PDF'
  },
  {
    id: 2,
    name: 'Equipment Sales Contract - DataVision Corp',
    sender: 'mike.chen@datavision.com',
    company: 'DataVision Corp',
    date: '2024-10-28',
    status: 'Not Signed',
    type: 'Sales Agreement',
    amount: '$89,500.00',
    fileType: 'PDF'
  },
  {
    id: 3,
    name: 'Enterprise Sales Agreement - CloudSync Inc',
    sender: 'alex.martinez@cloudsync.com',
    company: 'CloudSync Inc',
    date: '2024-12-01',
    status: 'Draft',
    type: 'Sales Agreement',
    amount: '$245,000.00',
    fileType: 'DOCX'
  },
  
  // NDAs
  {
    id: 4,
    name: 'Non-Disclosure Agreement - InnovateLab',
    sender: 'legal@innovatelab.com',
    company: 'InnovateLab',
    date: '2024-09-22',
    status: 'Signed',
    type: 'NDA',
    amount: '',
    fileType: 'PDF'
  },
  {
    id: 5,
    name: 'Mutual NDA - Strategic Partners Group',
    sender: 'partnerships@strategicpartners.com',
    company: 'Strategic Partners Group',
    date: '2024-11-08',
    status: 'Signed',
    type: 'NDA',
    amount: '',
    fileType: 'PDF'
  },
  {
    id: 6,
    name: 'Confidentiality Agreement - NextGen Robotics',
    sender: 'ceo@nextgenrobotics.com',
    company: 'NextGen Robotics',
    date: '2024-10-15',
    status: 'Not Signed',
    type: 'NDA',
    amount: '',
    fileType: 'DOCX'
  },
  
  // Master Service Agreements
  {
    id: 7,
    name: 'Master Service Agreement - Global Dynamics Ltd',
    sender: 'procurement@globaldynamics.com',
    company: 'Global Dynamics Ltd',
    date: '2024-08-30',
    status: 'Signed',
    type: 'MSA',
    amount: '$500,000.00',
    fileType: 'PDF'
  },
  {
    id: 8,
    name: 'MSA Amendment - Enterprise Solutions Co',
    sender: 'legal@enterprisesolutions.com',
    company: 'Enterprise Solutions Co',
    date: '2024-11-20',
    status: 'Draft',
    type: 'MSA',
    amount: '$750,000.00',
    fileType: 'DOCX'
  },
  
  // Software Development Proposals
  {
    id: 9,
    name: 'Custom CRM Development Proposal - RetailMax',
    sender: 'it.director@retailmax.com',
    company: 'RetailMax',
    date: '2024-10-05',
    status: 'Not Signed',
    type: 'Software Proposal',
    amount: '$180,000.00',
    fileType: 'PDF'
  },
  {
    id: 10,
    name: 'Mobile App Development - FitLife Wellness',
    sender: 'product@fitlifewellness.com',
    company: 'FitLife Wellness',
    date: '2024-11-12',
    status: 'Signed',
    type: 'Software Proposal',
    amount: '$95,000.00',
    fileType: 'PDF'
  },
  {
    id: 11,
    name: 'E-commerce Platform Proposal - StyleHub Fashion',
    sender: 'tech@stylehub.com',
    company: 'StyleHub Fashion',
    date: '2024-09-18',
    status: 'Draft',
    type: 'Software Proposal',
    amount: '$220,000.00',
    fileType: 'DOCX'
  },
  
  // Consulting Agreements
  {
    id: 12,
    name: 'Business Strategy Consulting - VentureCapital Pro',
    sender: 'partnerships@vcpro.com',
    company: 'VentureCapital Pro',
    date: '2024-07-25',
    status: 'Signed',
    type: 'Consulting Agreement',
    amount: '$75,000.00',
    fileType: 'PDF'
  },
  {
    id: 13,
    name: 'IT Consulting Services - MedTech Innovations',
    sender: 'cto@medtechinnovations.com',
    company: 'MedTech Innovations',
    date: '2024-10-30',
    status: 'Not Signed',
    type: 'Consulting Agreement',
    amount: '$120,000.00',
    fileType: 'PDF'
  },
  
  // Equipment Purchase Agreements
  {
    id: 14,
    name: 'Server Hardware Purchase - DataCenter Solutions',
    sender: 'procurement@datacenter.com',
    company: 'DataCenter Solutions',
    date: '2024-09-08',
    status: 'Signed',
    type: 'Equipment Purchase',
    amount: '$450,000.00',
    fileType: 'PDF'
  },
  {
    id: 15,
    name: 'Manufacturing Equipment Lease - AutoParts Inc',
    sender: 'operations@autoparts.com',
    company: 'AutoParts Inc',
    date: '2024-11-25',
    status: 'Draft',
    type: 'Equipment Purchase',
    amount: '$325,000.00',
    fileType: 'DOCX'
  }
];

// Generate additional documents to reach 235 total
const generateAdditionalDocuments = () => {
  const additionalDocs = [];
  const companies = [
    'TechFlow Solutions', 'DataVision Corp', 'CloudSync Inc', 'InnovateLab', 
    'Strategic Partners Group', 'NextGen Robotics', 'Global Dynamics Ltd', 
    'Enterprise Solutions Co', 'RetailMax', 'FitLife Wellness', 'StyleHub Fashion',
    'VentureCapital Pro', 'MedTech Innovations', 'DataCenter Solutions', 'AutoParts Inc',
    'FinanceFirst Bank', 'GreenTech Energy', 'UrbanSpace Architects', 'LogisticsPro',
    'HealthcarePlus', 'EduTech Academy', 'SportsTech Gear', 'FoodService Group',
    'TravelEase Solutions', 'PropertyManagement Pro', 'SecuritySystems Ltd',
    'MarketingGenius Co', 'SupplyChain Dynamics', 'BioTech Research', 'AeroSpace Industries',
    'Construction Masters', 'DigitalMedia Hub', 'EventPlanning Plus', 'LegalServices Pro',
    'TransportationCorp', 'EnergyEfficient Systems', 'WaterTech Solutions', 'AgriTech Innovations',
    'TextileManufacturing', 'ChemicalSolutions Inc', 'PharmaTech Labs', 'RealEstate Ventures'
  ];
  
  const documentTypes = [
    { type: 'Sales Agreement', hasAmount: true },
    { type: 'NDA', hasAmount: false },
    { type: 'MSA', hasAmount: true },
    { type: 'Software Proposal', hasAmount: true },
    { type: 'Consulting Agreement', hasAmount: true },
    { type: 'Equipment Purchase', hasAmount: true },
    { type: 'SLA', hasAmount: true },
    { type: 'Partnership Agreement', hasAmount: true }
  ];
  
  const statuses = ['Signed', 'Not Signed', 'Draft'];
  const fileTypes = ['PDF', 'DOCX'];
  
  const documentPrefixes = {
    'Sales Agreement': ['Sales Contract', 'Purchase Agreement', 'Revenue Agreement', 'Commercial Contract'],
    'NDA': ['Non-Disclosure Agreement', 'Confidentiality Agreement', 'Mutual NDA'],
    'MSA': ['Master Service Agreement', 'Framework Agreement', 'MSA Amendment'],
    'Software Proposal': ['Software Development Proposal', 'Custom App Proposal', 'Platform Development'],
    'Consulting Agreement': ['Consulting Services Agreement', 'Advisory Contract', 'Professional Services'],
    'Equipment Purchase': ['Equipment Purchase Agreement', 'Hardware Lease', 'Asset Purchase'],
    'SLA': ['Service Level Agreement', 'Support Contract', 'Maintenance Agreement'],
    'Partnership Agreement': ['Strategic Partnership', 'Joint Venture Agreement', 'Collaboration Agreement']
  };
  
  // Generate documents for years 2022-2025
  const years = [2022, 2023, 2024, 2025];
  let docId = 16; // Starting after manually created docs
  
  for (let i = 0; i < 220; i++) { // 235 - 15 manually created = 220
    const company = companies[Math.floor(Math.random() * companies.length)];
    const docType = documentTypes[Math.floor(Math.random() * documentTypes.length)];
    const year = years[Math.floor(Math.random() * years.length)];
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const fileType = fileTypes[Math.floor(Math.random() * fileTypes.length)];
    
    const prefixes = documentPrefixes[docType.type];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    
    const amount = docType.hasAmount ? 
      `$${(Math.floor(Math.random() * 900) + 100) * 1000}.00` : '';
    
    const email = `contact@${company.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}.com`;
    
    additionalDocs.push({
      id: docId++,
      name: `${prefix} - ${company} ${year}`,
      sender: email,
      company: company,
      date: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
      status: status,
      type: docType.type,
      amount: amount,
      fileType: fileType
    });
  }
  
  return additionalDocs;
};

export const allGmailDocuments = [
  ...mockGmailDocuments,
  ...generateAdditionalDocuments()
];

// Helper functions for organizing documents
export const organizeByYear = (documents) => {
  return documents.reduce((acc, doc) => {
    const year = new Date(doc.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(doc);
    return acc;
  }, {});
};

export const organizeByCompany = (documents) => {
  return documents.reduce((acc, doc) => {
    if (!acc[doc.company]) acc[doc.company] = [];
    acc[doc.company].push(doc);
    return acc;
  }, {});
};

export const organizeByStatus = (documents) => {
  return documents.reduce((acc, doc) => {
    if (!acc[doc.status]) acc[doc.status] = [];
    acc[doc.status].push(doc);
    return acc;
  }, {});
};

export const getDocumentStats = (documents) => {
  return {
    total: documents.length,
    signed: documents.filter(doc => doc.status === 'Signed').length,
    notSigned: documents.filter(doc => doc.status === 'Not Signed').length,
    draft: documents.filter(doc => doc.status === 'Draft').length,
    withAmount: documents.filter(doc => doc.amount && doc.amount !== '').length
  };
};

