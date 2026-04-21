import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer class="bg-mist-900 text-cyan-600 h-18 static">
            <div class="flex gap-13 ">
                <div class="bg-[url(../images/logo-footer.png)] bg-contain bg-no-repeat w-15 h-15 absolute ml-5" />
                <div class="bg-[url(../images/ANBI.png)] bg-contain bg-no-repeat w-15 h-15 absolute ml-30" />
                
                 <p class="ml-60">Uw werk/foto op onze website? <Link target={"_blank"} to="https://stichtingmenscentraal.nl/onewebmedia/uw%20werk%20op%20onze%20website%20-%20your%20work%20on%20our%20site%202.pdf">Klik hier</Link></p>
                 <p><Link target={"_blank"} to="https://stichtingmenscentraal.nl/onewebmedia/2020%20Privacyverklaring.pdf" >Privacy/AVG</Link></p>
                 <p><Link target={"_blank"} to="https://ideal.nl/en/products/ideal-snel-bestellen">Doneren</Link></p>
                
                <Link target={"_blank"} to="http://www.facebook.com/Stichting.Mens.Centraal"><div class="bg-[url(../images/facebook-logo.png)]  bg-no-repeat bg-contain w-15 h-15  " /></Link>
                <Link target={"_blank"} to="http://pinterest.com/stmenscentraal/"><div class="bg-[url(../images/pinterest-logo.png)] bg-no-repeat bg-contain w-15 h-15 " /></Link>
            </div>
        </footer>
    );
}

export default Footer;