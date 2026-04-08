import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-teal-900 text-cyan-600 py-6 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="flex flex-wrap justify-between items-center gap-6 pb-6 border-b border-teal-700">
                    {/* Logo Section */}
                    <div className="flex gap-4">
                        <div className="bg-emerald-300 w-15 h-15 rounded-lg" />
                        <div className="bg-emerald-300 w-15 h-15 rounded-lg" />
                    </div>

                    {/* Quick Links */}
                    <div className="flex gap-8">
                        <p className="hover:text-cyan-400 transition-colors">
                            <Link to="/about">Over Ons</Link>
                        </p>
                        <p className="hover:text-cyan-400 transition-colors">
                            <Link to="/contact">Contact</Link>
                        </p>
                        <p className="hover:text-cyan-400 transition-colors">
                            <Link to="/projects">Projecten</Link>
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="flex gap-4">
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                              className="bg-blue-800 w-15 h-15 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <span className="text-white text-xs">FB</span>
                        </Link>
                        <Link to="https://pinterest.com" target="_blank" rel="noopener noreferrer"
                              className="bg-red-700 w-15 h-15 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                            <span className="text-white text-xs">PI</span>
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-wrap justify-between items-center pt-4 gap-4 text-sm">
                    <p className="hover:text-cyan-400 transition-colors">
                        Uw werk/foto op onze website? <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="underline">Klik hier</Link>
                    </p>
                    
                    <div className="flex gap-6">
                        <p className="hover:text-cyan-400 transition-colors">
                            <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer">Privacy/AVG</Link>
                        </p>
                        <p className="hover:text-cyan-400 transition-colors">
                            <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer">Doneren</Link>
                        </p>
                    </div>

                    <p className="text-cyan-700">
                        © 2026 Project MensCentraal. Alle rechten voorbehouden.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;