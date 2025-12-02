import React from 'react';
import { XIcon } from './Icons';

const GetStartedModal = ({ isOpen, onClose, onOpenGmailImport }) => {
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
          className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-24 font-graphik-bold text-secondary-dark">
              Get started
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <XIcon className="w-5 h-5 text-secondary-light" />
            </button>
          </div>

          {/* Content - Scrollable */}
          <div className="p-6 overflow-y-auto flex-1">
            {/* Upload Zone */}
            <div className="mb-8 p-12 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
              <div className="mb-4">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h3 className="text-14 font-graphik-semibold text-secondary-dark mb-2">
                  Drag and drop your files here
                </h3>
                <p className="text-13 font-graphik-regular text-secondary-light mb-4">
                  Supported files: PDF, Word, PowerPoint, JPG, PNG
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button className="px-4 py-2 bg-brand-primary text-white text-14 font-graphik-semibold rounded-lg hover:bg-brand-primary/90 transition-colors">
                    Select files
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-14 font-graphik-semibold rounded-lg hover:bg-gray-50 transition-colors">
                    Browse templates
                  </button>
                </div>
              </div>
            </div>

            {/* Import Options */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <button
                onClick={() => {
                  onClose();
                  onOpenGmailImport();
                }}
                className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_969_72596)">
                      <path d="M3.36364 18.9996H6.54545V11.2724L2 7.86328V17.636C2 18.3906 2.61136 18.9996 3.36364 18.9996Z" fill="#4285F4"/>
                      <path d="M17.4546 18.9996H20.6364C21.391 18.9996 22 18.3883 22 17.636V7.86328L17.4546 11.2724" fill="#34A853"/>
                      <path d="M17.4546 5.3636V11.2727L22 7.8636V6.04542C22 4.35905 20.075 3.39769 18.7273 4.40905" fill="#FBBC04"/>
                      <path d="M6.54541 11.2724V5.36328L12 9.45419L17.4545 5.36328V11.2724L12 15.3633" fill="#EA4335"/>
                      <path d="M2 6.04542V7.8636L6.54545 11.2727V5.3636L5.27273 4.40905C3.92273 3.39769 2 4.35905 2 6.04542Z" fill="#C5221F"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_969_72596">
                        <rect width="20" height="15" fill="white" transform="translate(2 4)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-14 font-graphik-semibold text-secondary-dark">
                  Import from Gmail
                </span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-sm transition-all">
                <div className="w-8 h-8 mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_969_72609)">
                      <path d="M4.36082 17.7121L5.15464 19.0762C5.31959 19.3634 5.5567 19.589 5.83505 19.7531L8.6701 14.8711H3C3 15.189 3.08247 15.507 3.24742 15.7942L4.36082 17.7121Z" fill="#0066DA"/>
                      <path d="M12 9.12814L9.16495 4.24609C8.8866 4.4102 8.64948 4.63584 8.48454 4.92302L3.24742 13.9487C3.08551 14.2296 3.00022 14.5478 3 14.8717H8.6701L12 9.12814Z" fill="#00AC47"/>
                      <path d="M18.1651 19.7531C18.4434 19.589 18.6805 19.3634 18.8455 19.0762L19.1754 18.5121L20.7527 15.7942C20.9176 15.507 21.0001 15.189 21.0001 14.8711H15.3296L16.5362 17.2301L18.1651 19.7531Z" fill="#EA4335"/>
                      <path d="M12.0001 9.1282L14.8351 4.24615C14.5568 4.08205 14.2372 4 13.9073 4H10.0929C9.76298 4 9.44339 4.09231 9.16504 4.24615L12.0001 9.1282Z" fill="#00832D"/>
                      <path d="M15.3298 14.8711H8.67001L5.83496 19.7531C6.11331 19.9172 6.4329 19.9993 6.7628 19.9993H17.237C17.5669 19.9993 17.8865 19.907 18.1649 19.7531L15.3298 14.8711Z" fill="#2684FC"/>
                      <path d="M18.134 9.43584L15.5155 4.92302C15.3505 4.63584 15.1134 4.4102 14.8351 4.24609L12 9.12814L15.3299 14.8717H20.9897C20.9897 14.5538 20.9072 14.2358 20.7423 13.9487L18.134 9.43584Z" fill="#FFBA00"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_969_72609">
                        <rect width="18" height="16" fill="white" transform="translate(3 4)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-14 font-graphik-semibold text-secondary-dark">
                  Import from Drive
                </span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-sm transition-all">
                <div className="w-8 h-8 mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_969_72603)">
                      <path d="M6.28346 14.5983C6.28346 15.7479 5.35432 16.677 4.20472 16.677C3.05511 16.677 2.12598 15.7479 2.12598 14.5983C2.12598 13.4487 3.05511 12.5195 4.20472 12.5195H6.28346V14.5983ZM7.32283 14.5983C7.32283 13.4487 8.25196 12.5195 9.40157 12.5195C10.5512 12.5195 11.4803 13.4487 11.4803 14.5983V19.7951C11.4803 20.9447 10.5512 21.8739 9.40157 21.8739C8.25196 21.8739 7.32283 20.9447 7.32283 19.7951V14.5983Z" fill="#E01E5A"/>
                      <path d="M9.40169 6.25123C8.25208 6.25123 7.32295 5.3221 7.32295 4.17249C7.32295 3.02288 8.25208 2.09375 9.40169 2.09375C10.5513 2.09375 11.4804 3.02288 11.4804 4.17249V6.25123H9.40169ZM9.40169 7.30635C10.5513 7.30635 11.4804 8.23548 11.4804 9.38509C11.4804 10.5347 10.5513 11.4638 9.40169 11.4638H4.18909C3.03949 11.4638 2.11035 10.5347 2.11035 9.38509C2.11035 8.23548 3.03949 7.30635 4.18909 7.30635H9.40169Z" fill="#36C5F0"/>
                      <path d="M17.7325 9.38509C17.7325 8.23548 18.6616 7.30635 19.8112 7.30635C20.9608 7.30635 21.89 8.23548 21.89 9.38509C21.89 10.5347 20.9608 11.4638 19.8112 11.4638H17.7325V9.38509ZM16.6931 9.38509C16.6931 10.5347 15.764 11.4638 14.6144 11.4638C13.4648 11.4638 12.5356 10.5347 12.5356 9.38509V4.17249C12.5356 3.02288 13.4648 2.09375 14.6144 2.09375C15.764 2.09375 16.6931 3.02288 16.6931 4.17249V9.38509Z" fill="#2EB67D"/>
                      <path d="M14.6144 17.7164C15.764 17.7164 16.6931 18.6455 16.6931 19.7951C16.6931 20.9447 15.764 21.8739 14.6144 21.8739C13.4648 21.8739 12.5356 20.9447 12.5356 19.7951V17.7164H14.6144ZM14.6144 16.677C13.4648 16.677 12.5356 15.7479 12.5356 14.5983C12.5356 13.4487 13.4648 12.5195 14.6144 12.5195H19.827C20.9766 12.5195 21.9057 13.4487 21.9057 14.5983C21.9057 15.7479 20.9766 16.677 19.827 16.677H14.6144Z" fill="#ECB22E"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_969_72603">
                        <rect width="20" height="20" fill="white" transform="translate(2 2)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-14 font-graphik-semibold text-secondary-dark">
                  Import from Slack
                </span>
              </button>
              
              <button className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-sm transition-all">
                <div className="w-8 h-8 mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                <span className="text-14 font-graphik-semibold text-secondary-dark">
                  Other import options
                </span>
              </button>
            </div>

            {/* Template Gallery */}
            <div>
              <h2 className="text-18 font-graphik-bold text-secondary-dark mb-6">
                Choose a template
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Software Development Proposal */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-lg mb-3 hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src="/CLM/images/Template 1.png" 
                      alt="Software Development Proposal Template"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-graphik-semibold text-secondary-dark text-center" style={{fontSize: '12px'}}>
                    Software Development Proposal
                  </h3>
                </div>

                {/* Agency Agreement Template */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-lg mb-3 hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src="/CLM/images/Template 2.png" 
                      alt="Agency Agreement Template"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-graphik-semibold text-secondary-dark text-center" style={{fontSize: '12px'}}>
                    Agency Agreement Template
                  </h3>
                </div>

                {/* Executive Summary Template */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-lg mb-3 hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src="/CLM/images/Template 3.png" 
                      alt="Executive Summary Template"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-graphik-semibold text-secondary-dark text-center" style={{fontSize: '12px'}}>
                    Executive Summary Template
                  </h3>
                </div>

                {/* Construction Proposal Template */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-lg mb-3 hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src="/CLM/images/Template 4.png" 
                      alt="Construction Proposal Template"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-graphik-semibold text-secondary-dark text-center" style={{fontSize: '12px'}}>
                    Construction Proposal Template
                  </h3>
                </div>

                {/* Mobile App Development Proposal */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-lg mb-3 hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src="/CLM/images/Template 5.png" 
                      alt="Mobile App Development Proposal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-graphik-semibold text-secondary-dark text-center" style={{fontSize: '12px'}}>
                    Mobile app Development Proposal
                  </h3>
                </div>

                {/* Event Sponsorship Proposal */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-lg mb-3 hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src="/CLM/images/Template 6.png" 
                      alt="Event Sponsorship Proposal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-graphik-semibold text-secondary-dark text-center" style={{fontSize: '12px'}}>
                    Event Sponsorship Proposal
                  </h3>
                </div>

                {/* Product Launch Template */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-lg mb-3 hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src="/CLM/images/Template 7.png" 
                      alt="Product Launch Template"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-graphik-semibold text-secondary-dark text-center" style={{fontSize: '12px'}}>
                    Product Launch Template
                  </h3>
                </div>

                {/* Executive Summary Template (Second) */}
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-lg mb-3 hover:shadow-lg transition-shadow overflow-hidden">
                    <img 
                      src="/CLM/images/Template 8.png" 
                      alt="Executive Summary Template"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-graphik-semibold text-secondary-dark text-center" style={{fontSize: '12px'}}>
                    Executive Summary Template
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;
