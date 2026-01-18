import React from 'react';
import { websiteName } from '../../../constant/constant';
import { useNavigate } from 'react-router-dom';

// Corrected the default value assignment here
const AppHeader = ({ title = websiteName, children }) => {
    const navigate = useNavigate();

  return (
    <header className="w-full flex items-center justify-between py-4 px-6 md:px-12 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Left side: Stylish Branding */}
      <div className="flex items-center gap-2">
        <h1 
          className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate("/")} // Usually, branding points to root "/"
        >
          {title}
        </h1>
      </div>

      {/* Right side: Dynamic Content (Buttons, Search, etc.) */}
      <div className="flex items-center gap-4">
        {children}
      </div>
    </header>
  );
};

export default AppHeader;