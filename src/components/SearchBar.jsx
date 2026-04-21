import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <section className="my-8" aria-labelledby="search-title">
      <h2 id="search-title" className="sr-only">Doorzoek Projecten</h2>
      
      <form onSubmit={handleSubmit} role="search" className="relative flex gap-2">
        <div className="relative flex-grow">
          <label htmlFor="project-search" className="sr-only">
            Zoek projecten op trefwoord
          </label>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bijv. Tijdloos Talent..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4CBCAD] focus:ring-2 focus:ring-[#4CBCAD] outline-none transition-all"
          />
        </div>
        
        <button 
          type="submit"
          className="bg-[#388E83] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#4CBCAD] focus:ring-2 focus:ring-offset-2 focus:ring-[#4CBCAD] transition-colors"
        >
          Zoeken
        </button>
      </form>

      {/* WCAG Live Region: This tells screen readers when results change */}
      <div aria-live="polite" className="mt-2 text-sm text-gray-600">
        {query && `Zoeken naar: ${query}`}
      </div>
    </section>
  );
};

export default SearchBar;