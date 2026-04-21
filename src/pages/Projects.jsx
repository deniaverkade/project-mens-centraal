import projects from "../projects.js";
import ProjectCard from "../components/ProjectCard"
import { useState, useMemo } from "react";
import ProjectPaginate from "../components/ProjectPaginate.jsx";
import SearchBar from "../components/SearchBar.jsx"; 



const Projects = () => {

const [searchTerm, setSearchTerm] = useState("");


const filteredProjects = useMemo(() => {
        return projects.filter((project) =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setCurrentPage(1); 
    };


    
    return ( <section>
        <div class="bg-[#ecf1f1] w-200 h-[81%] ml-100 absolute">
            
        <ProjectPaginate/>

        </div>

        <div class="bg-[#F18284] w-100 h-[81%] absolute">
            <div class="bg-white w-85 h-50 ml-7 mt-7">
            <SearchBar onSearch={handleSearch} />

            </div>

            <div class="bg-white w-85 h-105 ml-7 mt-20">

            </div>
        </div>
    </section> );
}
 
export default Projects;