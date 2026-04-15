import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            {/* Replace src with actual logo path when available */}
            <div className="w-10 h-10 bg-[#4CBCAD] rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
            <span className="text-xl font-bold text-gray-700">stichting <span className="text-[#4CBCAD]">mens</span> <span className="font-light">centraal</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className={`text-lg font-medium transition-colors ${isActive('/about') ? 'text-[#4CBCAD] border-b-2 border-[#4CBCAD]' : 'text-gray-600 hover:text-[#4CBCAD]'}`}>Over Ons</Link>
            <Link to="/contact" className={`text-lg font-medium transition-colors ${isActive('/contact') ? 'text-[#4CBCAD] border-b-2 border-[#4CBCAD]' : 'text-gray-600 hover:text-[#4CBCAD]'}`}>Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none p-2" aria-label="Toggle menu">
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'bg-[#4CBCAD]/10 text-[#4CBCAD]' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setIsOpen(false)}>Over Ons</Link>
            <Link to="/contact" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'bg-[#4CBCAD]/10 text-[#4CBCAD]' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
