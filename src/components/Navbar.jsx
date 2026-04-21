import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* --- NEW: Utility Top Bar (Satisfies "Missing Info" feedback) --- */}
      <div className="bg-[#388E83] text-white py-2 px-4 sm:px-8 flex justify-between items-center text-sm font-medium">
        <div className="flex gap-4">
          <a href="tel:+31101234567" className="hover:underline flex items-center gap-1">
            <span>📞</span> 010 - 123 4567
          </a>
          <span className="hidden md:inline">|</span>
          <a href="mailto:info@menscentraal.nl" className="hover:underline hidden md:inline">
            info@menscentraal.nl
          </a>
        </div>
        <div className="text-xs uppercase tracking-widest hidden sm:block">
          Erkend ANBI Stichting
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#4CBCAD] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:scale-110">M</div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-800 leading-none">stichting <span className="text-[#4CBCAD]">mens</span></span>
              <span className="text-lg font-light text-gray-500 leading-none tracking-tighter uppercase">centraal</span>
            </div>
          </Link>

          {/* Desktop Nav - Added Focus rings for WCAG */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/about" className={`text-lg font-bold transition-all py-2 border-b-4 ${isActive('/about') ? 'border-[#4CBCAD] text-[#388E83]' : 'border-transparent text-gray-600 hover:text-[#4CBCAD]'}`}>Over Ons</Link>
            <Link to="/projects" className={`text-lg font-bold transition-all py-2 border-b-4 ${isActive('/projects') ? 'border-[#4CBCAD] text-[#388E83]' : 'border-transparent text-gray-600 hover:text-[#4CBCAD]'}`}>Projecten</Link>
            <Link to="/contact" className="bg-[#4CBCAD] text-white px-6 py-2 rounded-full font-bold hover:bg-[#388E83] transition-colors shadow-md">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 p-2 rounded-md focus:ring-2 focus:ring-[#4CBCAD]"
              aria-label="Menu openen" 
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/about" className="block px-4 py-3 rounded-xl text-lg font-bold text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Over Ons</Link>
            <Link to="/projects" className="block px-4 py-3 rounded-xl text-lg font-bold text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Projecten</Link>
            <Link to="/contact" className="block px-4 py-3 rounded-xl text-lg font-bold bg-[#4CBCAD] text-white" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;