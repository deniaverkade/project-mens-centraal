const projects = [
    {
        id: 1,
        name: "Tijdloos Talent",
        description: "Het doel van Tijdloos Talent is helder: senioren bewust maken van hun talenten en samen ontdekken hoe zij deze kunnen inzetten — als vrijwilliger, als actieve bewoner of door passende activiteiten te vinden die helpen om een sterk netwerk te behouden en eenzaamheid te voorkomen. Met de Talentenscan sluiten wij aan bij: Fitfestivals, Vitale Woongemeenschappen en grote evenementen in de stad. Daarnaast verzorgen wij Talentenscantrainingen voor professionals en organiseren wij de Pensioen- en Vrijetijdsbeurzen.",
        link: "http://www.tijdloostalent.nl/",
        img: "../images/tijdloos-talent.png"
    },
    {
        id: 2,
        name: "Valpreventie",
        description: "Binnen het programma van de Rotterdamse welzijnsorganisaties 'Minder Vallen, Meer Bewegen' verzorgen wij interactieve presentaties over het belang van gezonde voeten, goed schoeisel en een stabiele houding. Deze onderdelen zijn essentieel voor een betere balans en het verkleinen van het risico op vallen — een thema dat steeds belangrijker wordt nu ouderen langer thuis blijven wonen.",
        link: "http://www.val-niet.nl/",
        img: ""
    },
    {
        id: 3,
        name: "Samen Sterker",
        description: "Voor zorgorganisatie Welthuis ontwikkelden wij het project Samen Sterker, een programma dat medewerkers en naasten ondersteunt in het samen zorgen voor bewoners. Door middel van praktische interactieve inspiratiebijeenkomsten, open gesprekken en toegankelijke materialen helpen we teams én familieleden om elkaar beter te vinden, begrip te vergroten en de samenwerking te versterken.",
        link: "https://stichtingmenscentraal.nl/onewebmedia/Samen%20Sterker%20%20flyer.pdf",
        img: ""
    },
    {
        id: 4,
        name: "De leukste internetwerkshops voor senioren!",
        description: "Hoe blijf je veilig online? Hoe ga je om met zorgapps? En hoe kun je als 60-plusser AI gebruiken? In onze internetworkshops ontdekken senioren op een leuke, duidelijke en laagdrempelige manier hoe digitale hulpmiddelen hun dagelijks leven kunnen verrijken. Stichting Mens Centraal biedt inspirerende en praktische workshops waarin deelnemers leren: - veilig online te zijn - AI in te zetten voor alledaagse taken - zorgapps te begrijpen en te gebruiken In kleine groepen, met eenvoudige uitleg en veel persoonlijke begeleiding, helpen we iedereen stap voor stap op weg. Zo worden digitale vaardigheden toegankelijk en krijgen senioren meer vertrouwen in een steeds digitalere wereld.",
        link: "/null",
        img: ""
    },
    {
        id: 5,
        name: "Fitfestivals 55+",
        description: "Stichting Mens Centraal organiseert samen met Anne-René van Wissen (Kansrijk Ondernemend Welzijn) jaarlijks meerdere Fitfestivals 55+ voor welzijnsorganisaties in Rotterdam. Deze bruisende evenementen brengen bewoners, professionals en organisaties samen rond één doel: gezond en vitaal ouder worden. Tijdens de Fitfestivals sluiten veel partners aan — van beweegaanbieders tot gezondheidsprofessionals — om bezoekers te informeren, inspireren en laten ervaren wat zij zelf kunnen doen voor een fitter leven. Bezoekers ontdekken laagdrempelig activiteiten, advies, testen en workshops die passen bij hun eigen gezondheid en leefstijl.",
        link: "/null",
        img: ""
    },
    {
        id: 6,
        name: "(Gebieds)gidsen",
        description: "Nadat Mens Centraal een Seniorengids voor Charlois heeft gemaakt, zijn we gevraagd door de Gemeente Rotterdam om de spil in het web te worden om voor de 14 gebieden Gebiedsgidsen te maken. Sinds 2024 ondersteunen we SOL bij het maken van de Activiteitengidsen voor de gebieden IJsselmonde, Feijenoord en Noord.",
        link: "/null",
        img: ""
    },
    {
        id: 7,
        name: "De Geldboom",
        description: "De Geldboom is een initiatief van Stichting Mens Centraal en biedt Rotterdammers op een toegankelijke manier informatie, tips en handige doorverwijzingenover geldzaken. De website is bedoeld voor iedereen die meer grip wil krijgen op inkomsten en uitgaven, of simpelweg op zoek is naar praktische hulpmiddelen. Onze aanpak is positief en laagdrempelig: geen ingewikkelde taal, geen oordeel, maar duidelijke uitleg en concrete stappen waar mensen écht iets aan hebben. Van regelingen en bespaartips tot hulp bij administratie — De Geldboom wijst de weg naar passende ondersteuning in de wijk en in de stad. Per doelgroep en per onderwerp kun je de informatie terugvinden en ook voor professionals staan er regelmatig nieuwe onderdelen op.",
        link: "http://www.degeldboom.nl/",
        img: ""
    },
    {
        id: 8,
        name: "De Deelwinkel",
        description: "In 2026 openen wij De Deelwinkel, een plek waar bewoners met een kleine beurs gratis toiletartikelen, menstruatieproducten, kinderspelletjes, kinderboeken en kleine hulpmiddelen voor ouderen kunnen ophalen. De winkel is twee keer per week geopend en is bedoeld als laagdrempelige steunplek voor wijkbewoners die wat extra hulp kunnen gebruiken. Naast het uitdelen van producten willen we vooral ook een plek van ontmoeting en verbinding creëren. Onder het genot van een kop koffie gaan we graag in gesprek, luisteren we naar vragen en denken we mee over de verschillende vormen van ondersteuning die Rotterdam te bieden heeft",
        link: "/null",
        img: ""
    },
    {
        id: 9,
        name: "De Digikoffer van SOL",
        description: "De DigiKoffer is gevuld met handige e-healthproducten en slimme hulpmiddelen die ouderen ondersteunen om langer en veiliger thuis te wonen. Tijdens een presentatie ontdekken senioren hoe deze hulpmiddelen werken, waar ze bij kunnen helpen en hoe belangrijk het is om zélf de regie te houden. De bijeenkomsten voelen vaak als een ouderwetse Tupperwareparty: gezellig, herkenbaar en verrassend leerzaam.",
        link: "http://www.solnetwerk.nl/",
        img: ""
    },
    {
        id: 10,
        name: "Slimmer Thuis",
        description: "De SlimmerThuisBox helpt ouderen de eigen regie te behouden bij het langer thuis blijven wonen. De SlimmerThuisBox geeft thuiswonende ouderen de regie over hun toekomst. Rond het 75e levensjaar ontvangt een oudere een mooie informatie box die informeert over alle mogelijkheden om lekker lang thuis te wonen. Er zitten zelfs handige hulpmiddelen in om direct te proberen. Ook wijst de SlimmerThuisBox de weg naar de lokale winkels en contactpunten waar experts klaar staan om persoonlijk advies te geven. Samen met de Stichting Slimmer Thuis kijken we naar de mogelijkheden om meer gemeentes deze waardevolle box uit te kunnen reiken aan hun 75-plussers. Niet alleen voor de senioren een waardevolle aanvulling maar voor gemeentes kan dit de manier zijn om het behouden van de eigen regie onder de aandacht te brengen en het kan uitstel betekenen van een aanvraag voor de Wmo.",
        link: "https://slimmerthuisbox.nl/",
        img: ""
    },
    {
        id: 11,
        name: "Afgeronde projecten",
        description: "Naast onze vaste en lopende programma’s heeft Stichting Mens Centraal in de afgelopen jaren aan diverse bijzondere projecten mogen bijdragen. Een aantal lichten we hieronder graag toe.",
        link: "/null",
        img: ""
    },

]

export default projects;