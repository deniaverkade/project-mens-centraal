import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer>
            <div />
            <div />
            <p>Uw werk/foto op onze website? <Link to="youtube.com">Klik hier</Link></p>
            <p><Link to="youtube.com">Privacy/AVG</Link></p>
            <p><Link to="youtube.com">Doneren</Link></p>

            <Link to="facebook.com"><div /></Link>
            <Link to="pinterest.com"><div /></Link>
        </footer>
    );
}

export default Footer;