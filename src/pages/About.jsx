const About = () => {
    return (
        <div class="bg-[#E8F5F3] min-h-full">
            <section class="mt-10 ml-15 mr-15">
            {/* Hero section with colored banner */}
            <div class="bg-pink-600 w-145 h-45 absolute mt-75 border-pink-900 border-t-9 border-r-9 border-b-9 opacity-60">
                <p class="text-black opacity-100 text-center mt-15 text-2xl">Over Stichting MensCentraal</p>
            </div>
            <img src="../public/images/placeholder.jpeg" class="w-full h-130" />
            
            {/* Main content sections */}
            <div class="mt-160">
                {/* Mission section */}
                <div class="flex gap-60 ml-18 mb-20">
                    <div class="w-1/3">
                        <h1 class="text-3xl mb-5">Onze Missie</h1>
                        <p class="text-lg">missie-text</p>
                    </div>

                    <div class="w-1/3">
                        <h1 class="text-3xl mb-5">Onze Visie</h1>
                        <p class="text-lg">visie-text</p>
                    </div>

                    <div class="w-1/3">
                        <h1 class="text-3xl mb-5">Onze Waarden</h1>
                        <p class="text-lg">waarden-text</p>
                    </div>
                </div>

                {/* Additional info section */}
                <div class="bg-cyan-100 w-full h-60 ml-10 mb-20 p-10">
                    <h2 class="text-2xl mb-5">Wie Zijn Wij?</h2>
                    <p class="text-lg">Stichting Mens Centraal</p>
                </div>

                {/* Team section */}
                <div class="ml-18 mb-20">
                    <h1 class="text-3xl mb-10">Ons Team</h1>
                    <p class="text-lg mb-10">ons-text.</p>
                    
                    <div class="flex gap-40">
                        <div class="text-center">
                            <div class="bg-emerald-300 w-40 h-40 mb-5"></div>
                            <h3 class="text-xl">Naam Lid 1</h3>
                            <p class="text-sm">Functie/Rol</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-emerald-300 w-40 h-40 mb-5"></div>
                            <h3 class="text-xl">Naam Lid 2</h3>
                            <p class="text-sm">Functie/Rol</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-emerald-300 w-40 h-40 mb-5"></div>
                            <h3 class="text-xl">Naam Lid 3</h3>
                            <p class="text-sm">Functie/Rol</p>
                        </div>
                    </div>
                </div>

                {/* Call to action */}
                <div class="bg-pink-600 w-145 h-35 ml-18 mb-20 border-pink-900 border-t-9 border-r-9 border-b-9 opacity-60 flex items-center justify-center">
                    <p class="text-black text-xl">Samen kunnen we het verschil maken!</p>
                </div>
            </div>
        </section>
        </div>
    );
}

export default About;