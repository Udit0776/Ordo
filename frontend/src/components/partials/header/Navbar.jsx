import React from 'react';
import { useLocation } from 'react-router-dom';
import AppHeader from './AppHeader';
import Button from '../../ui/Button';
import SearchBar from '../../skeleton/bar/SearchBar';
import Icons from '../../ui/Icons';
import { websiteName } from '../../../constant/constant';

const Navbar = () => {
  const location = useLocation();
  const isLoggedIn = false; 

  // 1. SIGN IN PAGE: Prompt to Sign Up
  if (location.pathname === '/signin') {
    return (
      <AppHeader title={websiteName}>
        <span className="text-sm text-gray-500 hidden sm:inline">New to {websiteName}?</span>
        <Button text="Sign Up" variant="outline" size="sm" navigate="/signup" />
      </AppHeader>
    );
  }

  // 2. SIGN UP PAGE: Prompt to Sign In
  if (location.pathname === '/signup') {
    return (
      <AppHeader title={websiteName}>
        <span className="text-sm text-gray-500 hidden sm:inline">Already have an account?</span>
        <Button text="Sign In" variant="outline" size="sm" navigate="/signin" />
      </AppHeader>
    );
  }

  // 3. LOGGED IN STATE: Dashboard View
  if (isLoggedIn) {
    return (
      <AppHeader title={websiteName}>
        <SearchBar />
        <div className="flex items-center gap-3 ml-2">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
            <Icons icon="mdi:bell-outline" size={24} />
          </button>
          <Button 
            text="New Task" 
            icon="mdi:plus" 
            size="sm" 
            variant="primary" 
            className="rounded-full shadow-lg shadow-blue-200"
          />
        </div>
      </AppHeader>
    );
  }

  // 4. DEFAULT STATE: Changed to focus on Sign Up
  // This will show on the Landing Page or any other non-auth page
  return (
    <AppHeader title={websiteName}>
      <Button text="Sign In" variant="outline" size="sm" navigate="/signin" />
      <Button text="Join Now" variant="primary" size="sm" navigate="/signup" />
    </AppHeader>
  );
};

export default Navbar;