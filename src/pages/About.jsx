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
            content: 'Stichting Mens Centraal streeft ernaar om ouderen te verbinden met hun gemeenschap. Wij geloven dat elke oudere het recht heeft op aandacht, zorg en betekenisvolle interactie. Door projecten te organiseren en samen te werken met lokale organisaties, creëren wij een netwerk van ondersteuning.',
        },
        visie: {
            title: 'Visie & Doel',
            content: 'Wij envision een samenleving waarin ouderen actief deelnemen en worden gewaardeerd voor hun ervaring en wijsheid. Ons doel is om bruggen te bouwen tussen generaties en om ouderen de kans te geven om hun talenten te blijven inzetten.',
        },
        anbi: {
            title: 'ANBI Status',
            content: 'Stichting Mens Centraal is erkend als Algemeen Nut Beogende Instelling (ANBI). Dit betekent dat wij voldoen aan de strenge eisen van de Belastingdienst en dat giften aan onze stichting fiscaal aftrekbaar zijn.',
        },
        bestuur: {
            title: 'Bestuur',
            content: 'Ons bestuur bestaat uit toegewijde vrijwilligers die zich inzetten voor de belangen van ouderen in onze regio. Zij zorgen voor transparant beheer en strategische koersbepaling.',
        },
    };

    return (
        <section aria-label="Over Ons">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Main Content Area */}
                <div className="lg:col-span-3">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Informatie categorieën">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                aria-controls={`tabpanel-${tab.id}`}
                                id={`tab-${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                    activeTab === tab.id
                                        ? 'bg-[#4CBCAD] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div
                        role="tabpanel"
                        id={`tabpanel-${activeTab}`}
                        aria-labelledby={`tab-${activeTab}`}
                        className="bg-gray-50 p-6 rounded-lg"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{tabContent[activeTab].title}</h2>
                        <p className="text-gray-600 leading-relaxed">{tabContent[activeTab].content}</p>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 text-center">
                        <p className="text-lg text-gray-700 mb-4">Geïnteresseerd in onze projecten?</p>
                        <Link
                            to="/projects"
                            className="inline-block bg-[#4CBCAD] text-white px-6 py-3 rounded-md font-medium hover:bg-[#3da89a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4CBCAD] focus:ring-offset-2"
                        >
                            Naar projecten
                        </Link>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="bg-[#ebb7d7]/30 p-6 rounded-lg" aria-label="Gerelateerde links">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Meer informatie</h2>
                    <nav aria-label="Over Ons submenu">
                        <ul className="space-y-3">
                            {sidebarLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-gray-700 hover:text-[#4CBCAD] transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            </div>
        </section>
    );
}

export default About;
