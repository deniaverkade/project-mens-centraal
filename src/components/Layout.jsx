import { Outlet } from 'react-router';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <section class="bg-[#4CBCAD] w-full h-screen">
            <div class="bg-white w-300 h-full ml-85">
                <Navbar />
                <div class="h-[81%]">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </section>
    );
}

export default Layout;