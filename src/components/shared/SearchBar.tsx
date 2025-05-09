
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

// Type pour les résultats de recherche
interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
}

// Données fictives pour notre moteur de recherche
const mockData: SearchResult[] = [
  {
    id: "1",
    title: "Orientation Professionnelle",
    category: "service",
    description: "Trouvez votre voie professionnelle avec notre accompagnement personnalisé"
  },
  {
    id: "2",
    title: "Formation",
    category: "service",
    description: "Développez vos compétences professionnelles avec nos formations spécialisées"
  },
  {
    id: "3",
    title: "Coaching",
    category: "service",
    description: "Atteignez vos objectifs avec l'accompagnement de nos coachs certifiés"
  },
  {
    id: "4",
    title: "Rédiger un CV efficace",
    category: "formation",
    description: "Apprenez à créer un CV qui attire l'attention des recruteurs"
  },
  {
    id: "5",
    title: "Lettres de motivation",
    category: "formation",
    description: "Maîtrisez l'art d'écrire des lettres de motivation convaincantes"
  }
];

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mise à jour des résultats en temps réel
  useEffect(() => {
    if (query.trim().length > 0) {
      const searchResults = mockData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

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
  }, []);

  // Fonction pour effacer la recherche
  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  // Fonction pour gérer les changements dans l'input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Grouper les résultats par catégorie
  const serviceResults = results.filter(result => result.category === "service");
  const formationResults = results.filter(result => result.category === "formation");

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
          onChange={handleInputChange}
          placeholder="Rechercher..."
          className="w-full p-2 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
        />
        {query && (
          <button
            onClick={handleClear}
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
              Aucun résultat trouvé
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
