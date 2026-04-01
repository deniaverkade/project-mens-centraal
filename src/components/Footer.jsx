import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer class="bg-mist-900 text-cyan-600 h-18 static">
            <div class="flex gap-13 ">
                <div class="bg-emerald-300 w-15 h-15 absolute ml-5" />
                <div class="bg-emerald-300 w-15 h-15 absolute ml-30" />
                
                 <p class="ml-60">Uw werk/foto op onze website? <Link to="youtube.com">Klik hier</Link></p>
                 <p><Link to="youtube.com">Privacy/AVG</Link></p>
                 <p><Link to="youtube.com">Doneren</Link></p>
                
                <Link to="facebook.com"><div class="bg-blue-800 w-15 h-15  " /></Link>
                <Link to="pinterest.com"><div class="bg-red-700 w-15 h-15 " /></Link>
            </div>
        </footer>
    );
}

export default Footer;