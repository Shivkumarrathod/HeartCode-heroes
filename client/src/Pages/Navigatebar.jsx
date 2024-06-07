// import React from 'react'

const Navigatebar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src="/path/to/logo.png" alt="Logo" />
              <span className="ml-2 text-xl font-bold text-blue-700">Jayadeva Hospital</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Home
              </a>
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Reports
              </a>
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-blue-500">
                Talk
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <div>
                <button type="button" className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="/path/to/user-profile.jpg" alt="User" />
                </button>
              </div>
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Report</a>
          <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Talk</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigatebar;
