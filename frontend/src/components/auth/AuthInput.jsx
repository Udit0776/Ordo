import React from 'react';
import Icons from '../ui/Icons';

const AuthInput = ({ label, icon, type = "text", placeholder, name, register, error }) => (
  <div className="flex flex-col gap-1.5 w-full mb-4">
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <div className="relative flex items-center">
      <div className={`absolute left-3 ${error ? 'text-red-400' : 'text-gray-400'}`}>
        <Icons icon={icon} size={18} />
      </div>
      <input
        {...register(name)} // Connects to React Hook Form
        type={type}
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 border rounded-lg outline-none transition-all text-sm
          ${error ? 'border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'}`}
      />
    </div>
    {error && <span className="text-[11px] text-red-500 font-medium ml-1">{error.message}</span>}
  </div>
);

export default AuthInput;