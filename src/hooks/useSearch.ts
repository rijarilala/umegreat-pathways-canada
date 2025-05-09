
import { useState, useEffect, useCallback } from "react";
import { searchData } from "@/services/searchService";
import type { SearchResult } from "@/components/shared/SearchBar";

export function useSearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  // Fonction de recherche séparée pour une meilleure réactivité
  const performSearch = useCallback((searchTerm: string) => {
    // Ne pas rechercher si la requête est vide ou trop courte
    if (!searchTerm || searchTerm.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    try {
      // Recherche directe et immédiate
      const searchResults = searchData(searchTerm);
      setResults(searchResults);
    } catch (error) {
      console.error("Erreur de recherche:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Mettre à jour la requête et lancer la recherche
  const updateQuery = useCallback((newQuery: string) => {
    setQuery(newQuery);
    
    // Utiliser un très petit délai pour éviter les recherches trop fréquentes
    // tout en conservant une impression d'instantanéité
    setTimeout(() => performSearch(newQuery), 50);
  }, [performSearch]);

  return { 
    results, 
    isLoading, 
    query,
    updateQuery,
    performSearch
  };
}
