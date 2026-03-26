import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className="bg-gray-900 text-white px-6 py-4">
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Stichting_Mens_Centraal</h1>

            <ul className="flex gap-6">
                <li>
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-gray-400">About</Link>
                </li>
                <li>
                    <Link to="/projects" className="hover:text-gray-400">Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;