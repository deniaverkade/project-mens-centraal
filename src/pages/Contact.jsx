const Contact = () => {
    return (
        <section aria-label="Contact">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact formulier</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <form action="#" method="POST" noValidate>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                                <input
                                    type="text"
                                    id="naam"
                                    name="naam"
                                    required
                                    autoComplete="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CBCAD] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CBCAD] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer</label>
                                <input
                                    type="tel"
                                    id="telefoon"
                                    name="telefoon"
                                    autoComplete="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CBCAD] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="onderwerp" className="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
                                <input
                                    type="text"
                                    id="onderwerp"
                                    name="onderwerp"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CBCAD] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1">Uw bericht</label>
                                <textarea
                                    id="bericht"
                                    name="bericht"
                                    rows="5"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CBCAD] focus:border-transparent resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#4CBCAD] text-white px-6 py-2 rounded-md font-medium hover:bg-[#3da89a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4CBCAD] focus:ring-offset-2"
                            >
                                Versturen
                            </button>
                        </div>
                    </form>
                </div>

                {/* Map & Info */}
                <div className="space-y-6">
                    {/* Map Placeholder */}
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src="../images/map-placeholder.png"
                            alt="Kaart met locatie van Stichting Mens Centraal"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-gray-600">Straatnaam 123</p>
                            <p className="text-sm text-gray-600">1234 AB Rotterdam</p>
                        </div>
                    </div>

                    {/* Call Info */}
                    <div className="bg-[#ebb7d7]/20 p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Wilt u liever bellen?</h3>
                        <p className="text-gray-700">
                            Neem contact op via{' '}
                            <a href="tel:+31101234567" className="text-[#4CBCAD] hover:underline font-medium">
                                010 - 123 4567
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
