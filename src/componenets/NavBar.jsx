import React from 'react';

const Navbar = ({ onSignOut }) => {
  return (
    <nav className="bg-gray-800 text-white shadow-md p-4 flex justify-between">
      <div className="text-2xl font-bold">
       WeatherZone
      </div>
      <button
        onClick={onSignOut}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
      >
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
