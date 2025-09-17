import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform animate-in fade-in zoom-in duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Cookie className="h-6 w-6 text-orange-500" />
            <h2 className="text-xl font-bold text-gray-800">🍪 Our New Cookie Policy!</h2>
          </div>
          <button
            onClick={handleDeny}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          For optimized experience, some elements may store temporary signals & For your safety, 
          our Website uses cookies to personalize content and ads, and analyze our traffic.
        </p>
        
        <div className="flex space-x-3 mb-4">
          <button
            onClick={handleAccept}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Accept
          </button>
          <button
            onClick={handleDeny}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Deny
          </button>
        </div>
        
        <Link 
          to="/privacy" 
          className="block text-center text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors"
          onClick={() => setIsVisible(false)}
        >
          View Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default CookieConsent;