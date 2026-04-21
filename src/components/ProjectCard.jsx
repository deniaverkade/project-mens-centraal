import { Link } from 'react-router';

const ProjectCard = ({ img, name, desc, linkweb }) => {
    return (
        <article className="relative flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
            {/* 1. Improved Image Handling */}
            <div className="h-48 overflow-hidden">
                <img 
                    src={img} 
                    alt={`Illustratie voor project: ${name}`} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 2. Semantic Heading and Text */}
            <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {name}
                </h2>
                
                {/* Removed internal scroll - better to show a snippet */}
                <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                    {desc}
                </p>

                {/* 3. Clean Link (No nested button) */}
                <Link 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    to={linkweb}
                    className="inline-block text-center bg-[#388E83] text-white font-bold py-2 px-4 rounded hover:bg-[#4CBCAD] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#4CBCAD]"
                    aria-label={`Bekijk project: ${name} (opent in nieuw venster)`}
                >
                    Naar project
                </Link>
            </div>
        </article>
    );
}

export default ProjectCard;