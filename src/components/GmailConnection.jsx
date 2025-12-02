import React from 'react';

const GmailConnection = ({ isConnecting, isConnected, onConnect }) => {
  if (isConnected) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EDF5F3' }}>
          <svg className="w-8 h-8" fill="none" stroke="#248567" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-16 font-graphik-semibold text-secondary-dark mb-2">
          Successfully Connected!
        </h3>
        <p className="text-14 font-graphik-regular text-secondary-light">
          Searching for documents...
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      {/* Gmail Icon */}
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gray-50 rounded-full">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
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

      <h3 className="text-18 font-graphik-bold text-secondary-dark mb-2">
        Connect your Gmail account
      </h3>
      
      <p className="text-14 font-graphik-regular text-secondary-light mb-6 max-w-md mx-auto">
        We'll securely scan your Gmail for business documents and agreements that can be imported into your workspace.
      </p>

      {/* Connection Button */}
      <button
        onClick={onConnect}
        disabled={isConnecting}
        className="flex items-center justify-center gap-3 px-6 py-3 bg-brand-primary text-white text-14 font-graphik-semibold rounded-lg hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
      >
        {isConnecting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <g clipPath="url(#clip0_969_72596_button)">
                <path d="M3.36364 18.9996H6.54545V11.2724L2 7.86328V17.636C2 18.3906 2.61136 18.9996 3.36364 18.9996Z" fill="currentColor"/>
                <path d="M17.4546 18.9996H20.6364C21.391 18.9996 22 18.3883 22 17.636V7.86328L17.4546 11.2724" fill="currentColor"/>
                <path d="M17.4546 5.3636V11.2727L22 7.8636V6.04542C22 4.35905 20.075 3.39769 18.7273 4.40905" fill="currentColor"/>
                <path d="M6.54541 11.2724V5.36328L12 9.45419L17.4545 5.36328V11.2724L12 15.3633" fill="currentColor"/>
                <path d="M2 6.04542V7.8636L6.54545 11.2727V5.3636L5.27273 4.40905C3.92273 3.39769 2 4.35905 2 6.04542Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip0_969_72596_button">
                  <rect width="20" height="15" fill="white" transform="translate(2 4)"/>
                </clipPath>
              </defs>
            </svg>
            Connect Gmail
          </>
        )}
      </button>

      {/* Security Notice */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left max-w-md mx-auto">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div>
            <h4 className="text-13 font-graphik-semibold text-secondary-dark mb-1">
              Secure Connection
            </h4>
            <p className="text-12 font-graphik-regular text-secondary-light">
              We only access document attachments and don't store your Gmail credentials. Your data is processed securely and never shared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GmailConnection;