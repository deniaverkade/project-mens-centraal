import { Outlet } from 'react-router';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="min-h-screen bg-[#4CBCAD] flex items-center justify-center p-4 sm:p-6">
            <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl flex flex-col min-h-[90vh] overflow-hidden">
                <Navbar />
                <main className="flex-grow p-6 sm:p-10">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
