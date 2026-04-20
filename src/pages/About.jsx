import { Link } from 'react-router';

const About = () => {
    return (<section>
        <div class="absolute bg-[url(../images/img2.png)] w-200 h-[50%] bg-no-repeat bg-cover">
            <div>
                <button></button>
            </div>

        </div>

        <div class="bg-[#F18284] w-100 h-[81%] absolute ml-200">

        </div>

        <div class="absolute mt-135 text-3xl">
            <h1 class="ml-40"><b>Geinteresseerd in onze projecten?</b></h1>
            <Link to="/projects"><button class="bg-[#4CBCAD] pt-7 pb-7 pl-15 pr-15 ml-60 mt-5">Naar projecten</button></Link>
        </div>
    </section>);
}

export default About;