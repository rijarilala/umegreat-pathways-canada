
import { useState, useCallback, useEffect } from "react";
import { searchData } from "@/services/searchService";
import type { SearchResult } from "@/components/shared/SearchBar";

export function useSearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  
  // Effectuer la recherche immédiatement lorsque la requête change
  useEffect(() => {
    // Ne pas rechercher si la requête est vide ou trop courte
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Recherche instantanée sans délai pour une réactivité maximale
    try {
      const searchResults = searchData(query);
      setResults(searchResults);
    } catch (error) {
      console.error("Erreur de recherche:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [query]); // Dépendance directe à query pour une réaction immédiate

  // Mise à jour directe de la requête sans délai
  const updateQuery = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  // Fonction de recherche manuelle si nécessaire
  const performSearch = useCallback((searchTerm: string) => {
    setQuery(searchTerm); // Utilise l'effet ci-dessus via la mise à jour de query
  }, []);

  return { 
    results, 
    isLoading, 
    query,
    updateQuery,
    performSearch
  };
}
