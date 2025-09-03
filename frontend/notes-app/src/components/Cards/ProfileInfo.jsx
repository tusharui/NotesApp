import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ProfileInfo = ({ onLogout }) => {
  // A dummy user object for demonstration
  const user = {
    displayName: 'John Doe',
    email: 'john.doe@example.com'
  };

  // Define the getInitials function to resolve the ReferenceError
  const getInitials = (name) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white font-bold text-xl select-none'>
        {getInitials(user.displayName)}
      </div>
      <div>
        <h6 className='text-sm font-medium text-gray-700'>{user.displayName}</h6>
        <p className='text-xs text-gray-500'>{user.email}</p>
      </div>
      <button
        className='ml-4 text-sm text-red-500 hover:text-red-700 font-medium'
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileInfo;
