import { Link } from 'react-router';

const Home = () => {
    return (<section>
        <div class="bg-[#ebb7d78c] w-145 h-45 absolute mt-75 border-pink-900 border-t-9 border-r-9 border-b-9">
            <p class="text-black opacity-100 text-center text-xl mt-6">
                Bij Stichting Mens Centraal geloven we dat iedereen sterker staat door

                echte aandacht voor elkaar.
                We verbinden ouderen met kansen, ontmoetingen en projecten die

                bijdragen aan een vitaal, veerkrachtig en betekenisvol leven.
            </p>
        </div>
        <img src="../images/img1.png" class="w-full h-130 object-cover" />
        <div class="flex  mt-15">
            <div class="w-80 ml-15">
                <h1 class="text-3xl"><b>Impact projecten</b></h1>
                <p><b>+1500</b> ouderen per jaar bereikt</p>
            </div>

            <div class="w-80 ml-5">
                <h1 class="text-3xl"><b>Website <Link to="https://degeldboom.nl/">De Geldboom</Link></b></h1>
                <p><b>+30.000</b> bezoekers per jaar</p>
            </div>

            <div class="w-80 ml-25">
                <h1 class="text-3xl"><b>50+</b></h1>
                <p>organizaties waarmee wij samenwerken binnen Rotterdam e.o.</p>
            </div>
        </div>

    </section>);
}

export default Home;