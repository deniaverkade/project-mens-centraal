import { Link } from 'react-router';

const ProjectCard = ({img, name, desc, linkweb}) => {
    return (
    <article class="w-100 h-50 ml-5 mt-5 overflow-hidden bg-white   rounded-lg">
        <img src={img} class="absolute w-50 h-50 object-fill z-0 ml-50 overflow-hidden"/>
        <h1 class="z-3 absolute  bg-teal-500 w-100 h-13">{name}</h1>
        <p class="z-2 absolute w-100 h-50 overflow-x-scroll p-5 pt-20 bg-[#ffffffb7]" >{desc}</p>
        <Link target={"_blank"} to={linkweb}><button class=" z-4 relative mt-45 bg-teal-200">Naar project</button></Link>

    </article>);
}

export default ProjectCard;