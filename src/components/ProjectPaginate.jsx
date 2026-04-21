import projects from "../projects.js";
import ProjectCard from "./ProjectCard.jsx"
import { useState, useEffect } from "react";

const ProjectPaginate = () => {

    const itemsPerPage = 6;
    
        const [projectsData, setProjectsData] = useState(projects);
        const [currentPage, setCurrentPage] = useState(1);
        const totalPages  = Math.ceil(projectsData.length / itemsPerPage);
        const currentItems = projectsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        

    return (
        <div >
            <div class="w-200 h-[75%] grid grid-cols-2 gap-4 justify-between ">
                {currentItems.map((item, index) => 
                (
                    <ProjectCard
                        name={item.name}
                        img={item.img}
                        desc={item.description}
                        linkweb={item.link}
                    />
                ))}
            </div>

            <div class="ml-76 mt-5">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};



export default ProjectPaginate;