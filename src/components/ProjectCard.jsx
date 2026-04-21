import { Link } from 'react-router';

const ProjectCard = ({ img, name, desc, linkweb }) => {
    return (
        <article className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg border border-gray-100 transition-transform hover:scale-[1.01]">
            
            {/* 1. Header with Teal Background */}
            <header className="bg-[#388E83] p-4">
                <h2 className="text-white text-xl font-bold line-clamp-1">
                    {name}
                </h2>
            </header>

            {/* 2. Image Section*/}
            <div className="h-48 w-full overflow-hidden bg-gray-200">
                <img 
                    src={img} 
                    alt={`Illustratie voor project: ${name}`} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 3. Content Section */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Description - Removed the scroll for a cleaner look */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow line-clamp-4">
                    {desc}
                </p>

                {/* 4. The Action Link (Styled as a button) */}
                <Link 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    to={linkweb}
                    className="inline-block w-full text-center bg-[#388E83] text-white font-bold py-3 px-4 rounded-md hover:bg-[#4CBCAD] transition-colors focus:ring-4 focus:ring-[#4CBCAD]/50 outline-none"
                    aria-label={`Bekijk project: ${name} (opent in nieuw venster)`}
                >
                    Naar project
                </Link>
            </div>
        </article>
    );
}

export default ProjectCard;