
import { useState, useEffect } from "react";
import { searchData } from "@/services/searchService";
import type { SearchResult } from "@/components/shared/SearchBar";

export function useSearch(query: string) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Ne pas rechercher si la requête est vide ou trop courte
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    // Marquer le début de la recherche
    setIsLoading(true);
    
    // Utiliser un debounce plus court pour une réponse plus rapide
    const timeoutId = setTimeout(() => {
      try {
        // Récupérer les résultats synchrones (puisque searchData n'est pas asynchrone)
        const searchResults = searchData(query);
        setResults(searchResults);
      } catch (error) {
        console.error("Erreur de recherche:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 100); // Réduit à 100ms pour une réponse plus rapide

    return () => clearTimeout(timeoutId);
  }, [query]);

  return { results, isLoading };
}
