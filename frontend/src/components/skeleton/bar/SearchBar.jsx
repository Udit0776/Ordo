import React from 'react';
import Icons from '../../ui/Icons';

const SearchBar = ({ placeholder = "Search tasks...", onChange }) => {
  return (
    <div className="hidden md:flex items-center bg-gray-100 border border-transparent focus-within:border-blue-400 focus-within:bg-white rounded-full px-4 py-1.5 transition-all w-64 lg:w-96">
      <Icons icon="mdi:magnify" size={20} className="text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full outline-none text-gray-700"
      />
    </div>
  );
};

export default SearchBar;