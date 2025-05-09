
import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "@/contexts/SearchContext";

const SearchBar = () => {
  const {
    query,
    results,
    isLoading,
    isOpen,
    setIsOpen,
    updateQuery,
    clearSearch
  } = useSearch();
  
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Gestion des clics en dehors de la barre de recherche
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  // Fonction pour gérer les clics sur les résultats
  const handleResultClick = (url: string) => {
    navigate(url);
    clearSearch();
  };

  // Grouper les résultats par catégorie
  const serviceResults = results.filter(result => result.category === "service");
  const formationResults = results.filter(result => result.category === "formation");
  const pageResults = results.filter(result => result.category === "page");
  const faqResults = results.filter(result => result.category === "faq");

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      {/* Champ de recherche */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          placeholder="Rechercher..."
          className="w-full p-2 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-gray-700" />
          </button>
        )}
      </div>

      {/* Liste des résultats */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-96 overflow-auto">
          {results.length > 0 ? (
            <div className="py-1">
              {/* Résultats de services */}
              {serviceResults.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100">
                    Services
                  </div>
                  {serviceResults.map(result => (
                    <div
                      key={result.id}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      onClick={() => result.url && handleResultClick(result.url)}
                    >
                      <div className="font-medium">{result.title}</div>
                      <div className="text-xs text-gray-500 truncate">
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Résultats de formations */}
              {formationResults.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100">
                    Formations
                  </div>
                  {formationResults.map(result => (
                    <div
                      key={result.id}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      onClick={() => result.url && handleResultClick(result.url)}
                    >
                      <div className="font-medium">{result.title}</div>
                      <div className="text-xs text-gray-500 truncate">
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Résultats de pages */}
              {pageResults.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100">
                    Pages
                  </div>
                  {pageResults.map(result => (
                    <div
                      key={result.id}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      onClick={() => result.url && handleResultClick(result.url)}
                    >
                      <div className="font-medium">{result.title}</div>
                      <div className="text-xs text-gray-500 truncate">
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Résultats de FAQ */}
              {faqResults.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100">
                    FAQ
                  </div>
                  {faqResults.map(result => (
                    <div
                      key={result.id}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      onClick={() => result.url && handleResultClick(result.url)}
                    >
                      <div className="font-medium">{result.title}</div>
                      <div className="text-xs text-gray-500 truncate">
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="px-4 py-2 text-sm text-gray-700">
              {isLoading ? "Recherche en cours..." : "Aucun résultat trouvé"}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
