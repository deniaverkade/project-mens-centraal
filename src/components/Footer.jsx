import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Column 1: Brand & ANBI */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4CBCAD] rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="text-xl font-bold tracking-tight">Stichting Mens Centraal</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Wij verbinden ouderen in Rotterdam en omstreken door middel van betekenisvolle projecten en persoonlijke aandacht.
          </p>
          <div className="pt-2">
            <span className="bg-white/10 text-xs px-3 py-1 rounded-full text-gray-300 uppercase tracking-widest border border-white/5">
              RSIN: 852159632 | KvK: 56599994
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-[#4CBCAD] font-bold mb-6 uppercase tracking-wider text-sm">Navigatie</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link to="/about" className="hover:text-white transition-colors">Over Ons</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Onze Projecten</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Locatie</Link></li>
            <li><Link to="/anbi" className="hover:text-white transition-colors">ANBI Verantwoording</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div>
          <h3 className="text-[#4CBCAD] font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
          <address className="not-italic text-gray-300 space-y-2 text-sm">
            <p>Straatnaam 123</p>
            <p>1234 AB Rotterdam</p>
            <div className="pt-4 flex gap-4">
               {/* Social Icons - Kept your SVGs, just wrapped in high-contrast circles */}
               <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[#4CBCAD] transition-all" aria-label="Facebook">
                 <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </Link>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Stichting Mens Centraal. Alle rechten voorbehouden.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-gray-300">Privacybeleid</Link>
          <Link to="/cookies" className="hover:text-gray-300">Cookie-instellingen</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;