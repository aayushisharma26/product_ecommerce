import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <nav className="flex flex-col md:flex-row justify-between items-center container mx-auto">
        <div className="text-2xl font-bold mb-4 md:mb-0">My Portfolio</div>

        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="search-input p-2 rounded-md text-black pl-4 pr-4 border border-gray-300 mb-2 md:mb-0"
          />
          <button
            className="bg-blue-600 text-white p-2 rounded-md w-full md:w-auto md:ml-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>

        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center w-full md:w-auto">
          <li>
            <Link to="/myproject" className="text-white no-underline hover:underline">My Project</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white no-underline hover:underline">Help is here</Link>
          </li>
          <li>
            <Link to="/signup" className="text-white no-underline hover:underline">Sign in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
