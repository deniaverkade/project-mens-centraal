import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav class="h-27 border-b border-b-gray-700">
            <Link to=".."><div class="bg-cyan-100 w-70 h-26.5 absolute" /></Link>
            <div class="absolute flex gap-7 text-4xl ml-210 mt-7 ">
                <ul><Link to="/about">Over Ons</Link></ul>
                <ul><Link to="/contact">Contact</Link></ul>
            </div>
        </nav>
    );
}

export default Navbar;