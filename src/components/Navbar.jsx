import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav>
            <div />
            <div>
                <ul><Link to="/about">Over Ons</Link></ul>
                <ul><Link to="/contact">Contact</Link></ul>
            </div>
        </nav>
    );
}

export default Navbar;