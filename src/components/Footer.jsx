function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="max-w-6xl mx-auto px-6 py-8">

                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold">Stichting_Mens_Centraal</h1>

                    <ul className="flex gap-6 text">
                        <li className="hover:text-gray-400 cursor-pointer">Home</li>
                        <li className="hover:text-gray-400 cursor-pointer">About</li>
                        <li className="hover:text-gray-400 cursor-pointer">Projects</li>
                        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
                    © 2026 Stichting_Mens_Centraal. Alle rechten voorbehouden.
                </div>
            </div>
        </footer>
    );
}

export default Footer;