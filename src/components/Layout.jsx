import {Outlet } from 'react-router';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return ( <section>
        <Navbar />
        <div>
            <div >
                <Outlet />
            </div>
            
        </div>

        <Footer />
    </section>);
}
 
export default Layout;