const Contact = () => {
    return (
        <section aria-labelledby="contact-heading" className="max-w-6xl mx-auto">
            <h1 id="contact-heading" className="text-3xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#4CBCAD] inline-block pb-2">
                Contact Met Ons
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* 1. Contact Form - Enhanced with Accessibility */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Stuur ons een bericht</h2>
                    
                    <form action="#" method="POST" noValidate className="space-y-5">
                        {/* Instruction for screen readers */}
                        <p className="text-sm text-gray-500 mb-4">Velden met een <span className="text-red-500">*</span> zijn verplicht.</p>

                        <div>
                            <label htmlFor="naam" className="block text-sm font-bold text-gray-700 mb-1">
                                Naam <span className="text-red-500" aria-hidden="true">*</span>
                            </label>
                            <input
                                type="text"
                                id="naam"
                                name="naam"
                                required
                                aria-required="true"
                                autoComplete="name"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4CBCAD] focus:ring-0 outline-none transition-all"
                                placeholder="Uw volledige naam"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                                E-mailadres <span className="text-red-500" aria-hidden="true">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                aria-required="true"
                                autoComplete="email"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4CBCAD] focus:ring-0 outline-none transition-all"
                                placeholder="voorbeeld@mail.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="telefoon" className="block text-sm font-bold text-gray-700 mb-1">Telefoonnummer</label>
                            <input
                                type="tel"
                                id="telefoon"
                                name="telefoon"
                                autoComplete="tel"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4CBCAD] focus:ring-0 outline-none transition-all"
                                placeholder="06 - 12345678"
                            />
                        </div>

                        <div>
                            <label htmlFor="bericht" className="block text-sm font-bold text-gray-700 mb-1">
                                Uw bericht <span className="text-red-500" aria-hidden="true">*</span>
                            </label>
                            <textarea
                                id="bericht"
                                name="bericht"
                                rows="5"
                                required
                                aria-required="true"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4CBCAD] focus:ring-0 outline-none transition-all resize-y"
                                placeholder="Waar kunnen we u mee helpen?"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#388E83] text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-[#4CBCAD] shadow-lg hover:shadow-teal-900/20 transition-all focus:ring-4 focus:ring-[#4CBCAD]/50"
                        >
                            Verstuur Bericht
                        </button>
                    </form>
                </div>

                {/* 2. Map & Info - "Premium" Layout */}
                <div className="space-y-8">
                    {/* Visual Card for Location */}
                    <div className="bg-[#4CBCAD]/5 rounded-2xl overflow-hidden border border-[#4CBCAD]/20 shadow-md">
                        <div className="h-64 bg-gray-200 relative">
                            <img
                                src="../images/map-placeholder.png"
                                alt="Kaartlocatie van Stichting Mens Centraal in Rotterdam"
                                className="w-full h-full object-cover"
                            />
                            {/* Visual floating badge */}
                            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-[#388E83]">
                                📍 Rotterdam
                            </div>
                        </div>
                        <div className="p-6">
                            <address className="not-italic text-gray-700 space-y-1">
                                <p className="font-bold text-lg text-gray-800">Bezoekadres</p>
                                <p>Straatnaam 123</p>
                                <p>1234 AB Rotterdam</p>
                            </address>
                        </div>
                    </div>

                    {/* High-Readability Call Action */}
                    <div className="bg-[#ebb7d7]/30 p-8 rounded-2xl border-2 border-dashed border-[#ebb7d7]">
                        <h3 className="text-2xl font-extrabold text-gray-800 mb-4">Persoonlijk contact?</h3>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            Wij staan u graag persoonlijk te woord. Onze vrijwilligers zijn bereikbaar op werkdagen tussen 09:00 en 17:00.
                        </p>
                        <a 
                            href="tel:+31101234567" 
                            className="inline-flex items-center gap-3 text-2xl font-black text-[#388E83] hover:text-[#4CBCAD] transition-colors"
                        >
                            <span aria-hidden="true">📞</span> 010 - 123 4567
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
