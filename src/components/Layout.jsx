import { Outlet, Link, useLocation } from 'react-router';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);

    function getPageTitle(pathname) {
        switch (pathname) {
            case '/about': return 'Over Ons';
            case '/contact': return 'Contact';
            case '/projects': return 'Projecten';
            default: return 'Home';
        }
    }

    return (
        <div className="min-h-screen bg-[#4CBCAD] flex items-center justify-center p-4 sm:p-6">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#4CBCAD] focus:text-white focus:px-4 focus:py-2 focus:rounded-md">
                Direct naar de inhoud
            </a>
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl flex flex-col min-h-[90vh] overflow-hidden">
                <Navbar />
                <main id="main-content" className="flex-grow p-6 sm:p-10" role="main" aria-label="Hoofdinhoud">
                    <h1 className="sr-only">{pageTitle}</h1>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
