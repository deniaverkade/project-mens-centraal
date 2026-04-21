import projects from "../projects.js";
import ProjectCard from "../components/ProjectCard"
import { useState } from "react";
import ReactPaginate from 'react-paginate';


const Projects = () => {

    const [projectsData, setProjectsData]= useState(projects);

    // 
    return ( <section>
        <div class="bg-[#ecf1f1] w-200 h-[81%] ml-100 absolute">
            
           <ProjectCard 
           name={projectsData[0].name} 
           img={projectsData[0].img} 
           desc={projectsData[0].description} 
           linkweb={projectsData[0].link}
           />

        </div>

        <div class="bg-[#F18284] w-100 h-[81%] absolute">
            <div class="bg-white w-85 h-50 ml-7 mt-7">

            </div>

            <div class="bg-white w-85 h-105 ml-7 mt-20">

            </div>
        </div>
    </section> );
}
 
export default Projects;