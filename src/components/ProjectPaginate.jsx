import projects from "../projects.js";
import ProjectCard from "./ProjectCard.jsx";
import SearchBar from "./SearchBar.jsx"; 
import { useState, useMemo } from "react";

const ProjectPaginate = () => {
    const itemsPerPage = 6;
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // 1. Filter projects based on search term
    const filteredProjects = useMemo(() => {
        return projects.filter((project) =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    // 2. Pagination Logic
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const currentItems = filteredProjects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // 3. Reset to page 1 when searching
    const handleSearch = (term) => {
        setSearchTerm(term);
        setCurrentPage(1); 
    };

    return (
        <div>
            {/* Added SearchBar here */}
            <SearchBar onSearch={handleSearch} />

            {/* Grid for Projects */}
            <div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6" 
                aria-busy="false" 
                role="region" 
                aria-label="Projecten overzicht"
            >
                {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                        <ProjectCard
                            key={item.id || item.name}
                            name={item.name}
                            img={item.img}
                            desc={item.description}
                            linkweb={item.link}
                        />
                    ))
                ) : (
                    <p className="col-span-2 text-center py-10 text-gray-600" role="alert">
                        Geen projecten gevonden die voldoen aan je zoekopdracht.
                    </p>
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <nav 
                    className="flex justify-center items-center gap-4 mt-10" 
                    aria-label="Pagina navigatie"
                >
                    <button 
                        disabled={currentPage === 1} 
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 focus:ring-2 focus:ring-[#4CBCAD]"
                        aria-label="Vorige pagina"
                    >
                        Vorige
                    </button>
                    
                    <span aria-current="true">
                        Pagina <strong>{currentPage}</strong> van {totalPages}
                    </span>

                    <button 
                        disabled={currentPage === totalPages} 
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 focus:ring-2 focus:ring-[#4CBCAD]"
                        aria-label="Volgende pagina"
                    >
                        Volgende
                    </button>
                </nav>
            )}
        </div>
    );
};

export default ProjectPaginate;