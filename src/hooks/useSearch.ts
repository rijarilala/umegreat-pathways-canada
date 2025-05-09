
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

    const search = async () => {
      setIsLoading(true);
      try {
        // Simuler un délai réseau court
        await new Promise(resolve => setTimeout(resolve, 150));
        const searchResults = searchData(query);
        setResults(searchResults);
      } catch (error) {
        console.error("Erreur de recherche:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    // Utiliser un debounce pour éviter des recherches inutiles
    const timeoutId = setTimeout(search, 200);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return { results, isLoading };
}
