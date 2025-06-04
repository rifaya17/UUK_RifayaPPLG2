import React, { useState } from 'react';
import { FaUserCircle, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to='/'>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Menu tengah - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#skill" 
              className="text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
            >
              Skill Dev
            </a>
            <a 
              href="#hub" 
              className="text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
            >
              digiTalent Hub
            </a>
            <a 
              href="#events" 
              className="text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
            >
              Events
            </a>
            <a 
              href="#course" 
              className="text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
            >
              Course
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
            >
              About
            </a>
          </nav>

          {/* Profile dropdown - Desktop */}
          <div className="hidden md:flex items-center relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 focus:outline-none"
            >
              <FaUserCircle className="text-2xl" />
              <span className="text-sm font-medium">Latifa</span>
              <FaChevronDown 
                className={`text-xs transition-transform duration-200 ${
                  isProfileDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                <a 
                  href="#profile" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  Profile
                </a>
                <a 
                  href="#settings" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  Settings
                </a>
                <div className="border-t border-gray-200 my-1"></div>
                <a 
                  href="#logout" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  Logout
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#home" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#skill" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
              >
                Skill Dev
              </a>
              <a 
                href="#hub" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
              >
                digiTalent Hub
              </a>
              <a 
                href="#events" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
              >
                Events
              </a>
              <a 
                href="#course" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
              >
                Course
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              
              {/* Mobile Profile Section */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex items-center px-3 py-2">
                  <FaUserCircle className="text-2xl text-gray-700 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Latifa</span>
                </div>
                <a 
                  href="#profile" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm transition-colors duration-200"
                >
                  Profile
                </a>
                <a 
                  href="#settings" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm transition-colors duration-200"
                >
                  Settings
                </a>
                <a 
                  href="#logout" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 text-sm transition-colors duration-200"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay untuk menutup dropdown saat klik di luar */}
      {isProfileDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileDropdownOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;