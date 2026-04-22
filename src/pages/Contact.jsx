import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#4CBCAD] font-sans">
            
            {/* 1. Main Content Container */}
            <main className="flex-grow p-4 sm:p-8 lg:p-12">
                <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-sm border border-gray-200 overflow-hidden">
                    
                    {/* Page Header */}
                    <div className="p-8 border-b border-gray-100 bg-white">
                        <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-tight">
                            Contact formulier
                        </h1>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-10 bg-gray-50">
                        
                        {/* LEFT COLUMN: The Form */}
                        <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-sm">
                            <form className="space-y-6" noValidate>
                                <div>
                                    <label className="block text-lg font-bold text-gray-700 mb-1">Naam</label>
                                    <input type="text" className="w-full bg-gray-200 p-3 outline-none focus:ring-2 focus:ring-[#4CBCAD] rounded-sm" />
                                </div>
                                <div>
                                    <label className="block text-lg font-bold text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full bg-gray-200 p-3 outline-none focus:ring-2 focus:ring-[#4CBCAD] rounded-sm" />
                                </div>
                                <div>
                                    <label className="block text-lg font-bold text-gray-700 mb-1">Telefoonnummer</label>
                                    <input type="tel" className="w-full bg-gray-200 p-3 outline-none focus:ring-2 focus:ring-[#4CBCAD] rounded-sm" />
                                </div>
                                <div>
                                    <label className="block text-lg font-bold text-gray-700 mb-1">Onderwerp</label>
                                    <input type="text" className="w-full bg-gray-200 p-3 outline-none focus:ring-2 focus:ring-[#4CBCAD] rounded-sm" />
                                </div>
                                <div>
                                    <label className="block text-lg font-bold text-gray-700 mb-1">Uw bericht</label>
                                    <textarea rows="4" className="w-full bg-gray-200 p-3 outline-none focus:ring-2 focus:ring-[#4CBCAD] rounded-sm resize-none"></textarea>
                                </div>

                                {/* ANBI/Link section from wireframe */}
                                <div className="flex items-center gap-4 bg-[#4CBCAD]/5 p-4 border border-[#4CBCAD]/20 rounded-sm">
                                    <div className="bg-[#4CBCAD] text-white px-2 py-1 text-xs font-black rounded-sm">ANBI</div>
                                    <a href="#" className="text-sm text-[#4CBCAD] font-bold hover:underline">
                                        Uw werk/foto op onze website? Klik hier
                                    </a>
                                </div>

                                <button type="submit" className="bg-[#4CBCAD] text-white px-12 py-3 text-xl font-black hover:bg-[#388E83] transition-all shadow-md active:scale-95 uppercase">
                                    Versturen
                                </button>
                            </form>
                        </div>

                        {/* RIGHT COLUMN: Info Boxes */}
                        <div className="flex flex-col gap-8">
                            
                            {/* Map Box */}
                            <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-sm">
                                <h2 className="text-xl font-black mb-4 text-gray-800 border-l-4 border-[#4CBCAD] pl-3 italic">
                                    Kom bij ons langs!
                                </h2>
                                <div className="aspect-video bg-gray-200 mb-6 border border-gray-300 flex items-center justify-center text-gray-500 font-bold">
                                    Locatie op de kaart
                                </div>
                                <div className="text-lg text-gray-800 space-y-1">
                                    <p className="font-black">Stichting Mens Centraal</p>
                                    <p>Hovenier 45</p>
                                    <p>3161 LG Rhoon</p>
                                </div>
                            </div>

                            {/* Call Box */}
                            <div className="bg-white p-8 border-2 border-dashed border-[#4CBCAD]/30 shadow-sm rounded-sm">
                                <h2 className="text-2xl font-black text-gray-800 mb-4">Wilt u liever bellen?</h2>
                                <div className="space-y-4">
                                    <p className="text-lg text-gray-500 font-bold">Ingrid Hoogstraten</p>
                                    <p className="text-3xl font-black text-[#4CBCAD] tracking-tight">
                                        06-40 54 54 90
                                    </p>
                                    <p className="text-xs text-gray-400 font-bold">Bereikbaar op werkdagen 09:00 - 17:00</p>
                                </div>
                                
                                {/* Socials*/}
                                <div className="flex gap-4 mt-8">
                                    <div className="w-12 h-12 bg-[#3b5998] rounded-md flex items-center justify-center text-white font-bold text-2xl shadow-sm">f</div>
                                    <div className="w-12 h-12 bg-[#bd081c] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-sm">P</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;