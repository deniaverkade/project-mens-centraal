import { Outlet } from 'react-router';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div class="bg-[#4CBCAD] w-full min-h-screen flex flex-col">
            <div class="bg-white w-300 min-h-screen flex flex-col ml-85">
                <Navbar />
                <div class="flex-1">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;