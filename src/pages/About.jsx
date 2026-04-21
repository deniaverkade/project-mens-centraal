import { useState } from 'react';
import { Link } from 'react-router';

const tabs = [
    { id: 'missie', label: 'Missie' },
    { id: 'visie', label: 'Visie & Doel' },
    { id: 'anbi', label: 'ANBI' },
    { id: 'bestuur', label: 'Bestuur' },
];

const sidebarLinks = [
    { label: 'Bereidsplan', href: '#' },
    { label: 'Financiële verantwoording', href: '#' },
    { label: 'Jaarverslag', href: '#' },
    { label: 'Bedrijfsinfo', href: '#' },
    { label: 'Projectleiding', href: '#' },
];

const About = () => {
    const [activeTab, setActiveTab] = useState('missie');

    const tabContent = {
        missie: {
            title: 'Onze Missie',
            content: 'Stichting Mens Centraal streeft ernaar om ouderen te verbinden met hun gemeenschap. Wij geloven dat elke oudere het recht heeft op aandacht, zorg en betekenisvolle interactie.',
        },
        // This was missing!
        visie: {
            title: 'Visie & Doel',
            content: 'Wij envision een samenleving waarin ouderen actief deelnemen en worden gewaardeerd voor hun ervaring en wijsheid. Ons doel is om bruggen te bouwen tussen generaties.',
        },
        anbi: {
            title: 'ANBI Status & Transparantie',
            content: (
                <div className="space-y-4">
                    <p>Wij voldoen aan de strenge eisen van de Belastingdienst. Onze gegevens:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white p-4 rounded border border-gray-200 shadow-sm">
                        <li><strong>RSIN:</strong> 852159632</li>
                        <li><strong>KvK-nummer:</strong> 56599994</li>
                        <li><strong>Status:</strong> Actief</li>
                    </ul>
                </div>
            ),
        },
        bestuur: {
            title: 'Ons Bestuur',
            content: (
                <div className="space-y-2">
                    <p>Het bestuur van Stichting Mens Centraal bestaat uit:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Voorzitter:</strong> [Naam invullen]</li>
                        <li><strong>Secretaris:</strong> [Naam invullen]</li>
                        <li><strong>Penningmeester:</strong> [Naam invullen]</li>
                    </ul>
                </div>
            ),
        },
    };

    return (
        <section aria-labelledby="about-heading" className="max-w-6xl mx-auto">
            <h1 id="about-heading" className="text-3xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#4CBCAD] inline-block pb-2">
                Over Ons
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    {/* Improved Tabs with better visual 'heft' */}
                    <div className="flex border-b border-gray-200 mb-6 overflow-x-auto" role="tablist" aria-label="Informatie categorieën">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                aria-controls={`tabpanel-${tab.id}`}
                                id={`tab-${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                className={`whitespace-nowrap px-6 py-3 font-bold transition-all border-b-4 ${
                                    activeTab === tab.id
                                        ? 'border-[#4CBCAD] text-[#388E83] bg-[#4CBCAD]/5'
                                        : 'border-transparent text-gray-500 hover:text-[#4CBCAD] hover:bg-gray-50'
                                } focus:outline-none focus:ring-2 focus:ring-[#4CBCAD] focus:ring-inset`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content with better spacing */}
                    <div
                        role="tabpanel"
                        id={`tabpanel-${activeTab}`}
                        aria-labelledby={`tab-${activeTab}`}
                        className="bg-white border border-gray-100 shadow-xl p-8 rounded-xl min-h-[300px]"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-[#4CBCAD] rounded-full"></span>
                            {tabContent[activeTab].title}
                        </h2>
                        <div className="text-gray-700 leading-relaxed text-lg">
                            {tabContent[activeTab].content}
                        </div>
                    </div>
                </div>

                {/* Sidebar with "Premium" styling */}
                <aside className="lg:col-span-1" aria-label="Documenten en downloads">
                    <div className="bg-[#4CBCAD]/10 p-6 rounded-2xl border-l-4 border-[#4CBCAD]">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Documenten</h2>
                        <nav>
                            <ul className="space-y-4">
                                {sidebarLinks.map((link) => (
                                    <li key={link.label}>
                                        <a 
                                            href={link.href} 
                                            className="flex items-center group text-gray-700 font-medium hover:text-[#388E83]"
                                        >
                                            <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                            <span className="underline decoration-[#4CBCAD]/30 group-hover:decoration-[#4CBCAD]">
                                                {link.label}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default About;