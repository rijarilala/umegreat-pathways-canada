
import { useRef, useEffect, useState } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import { useSearch } from "@/hooks/useSearch";

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
}

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  const { results, isLoading, query, updateQuery } = useSearch();

  // Gestion des clics à l'extérieur pour fermer la recherche
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      } else if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Ouvrir automatiquement les résultats dès que l'utilisateur commence à taper
  useEffect(() => {
    if (query && query.length > 0) {
      setIsOpen(true);
    }
  }, [query]);

  // Focus sur l'input quand la barre de recherche s'ouvre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelectItem = (result: SearchResult) => {
    navigate(result.url);
    setIsOpen(false);
    updateQuery("");
  };

  const handleClearSearch = () => {
    updateQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSearchInteraction = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 10);
  };

  // Gérer le changement de texte directement dans l'input
  const handleInputChange = (value: string) => {
    updateQuery(value);
    // S'assurer que les résultats sont visibles
    if (!isOpen && value.length > 0) {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <Button
        variant="outline"
        className="relative h-9 w-9 md:w-64 md:justify-start justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none hover:border-primary"
        onClick={handleSearchInteraction}
        aria-label="Rechercher les services"
      >
        <Search className="h-4 w-4 md:mr-2 text-muted-foreground" />
        <span className="hidden md:inline-flex text-muted-foreground">Rechercher...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <abbr title="Control">Ctrl</abbr>K
        </kbd>
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-screen max-w-md -translate-x-1/3 sm:-translate-x-1/2 z-50">
          <Command className="rounded-lg border shadow-md animate-fade-in">
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <CommandInput
                ref={inputRef}
                placeholder="Rechercher un service, une formation..."
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                value={query}
                onValueChange={handleInputChange}
                autoFocus
              />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={handleClearSearch}
                  aria-label="Effacer la recherche"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            <CommandList>
              {query === "" ? (
                <CommandEmpty>Commencez à taper pour rechercher</CommandEmpty>
              ) : (
                <>
                  {isLoading ? (
                    <div className="flex items-center justify-center py-6">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="ml-2 text-sm text-muted-foreground">Recherche en cours...</span>
                    </div>
                  ) : results.length === 0 ? (
                    <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
                  ) : (
                    <>
                      {results.filter(result => result.category === "service").length > 0 && (
                        <CommandGroup heading="Services">
                          {results
                            .filter((result) => result.category === "service")
                            .map((result) => (
                              <CommandItem
                                key={result.id}
                                onSelect={() => handleSelectItem(result)}
                                className="cursor-pointer"
                              >
                                <div className="flex flex-col">
                                  <span>{result.title}</span>
                                  <span className="text-xs text-gray-500 truncate">
                                    {result.description}
                                  </span>
                                </div>
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      )}
                      
                      {results.filter(result => result.category === "formation").length > 0 && (
                        <CommandGroup heading="Formations">
                          {results
                            .filter((result) => result.category === "formation")
                            .map((result) => (
                              <CommandItem
                                key={result.id}
                                onSelect={() => handleSelectItem(result)}
                                className="cursor-pointer"
                              >
                                <div className="flex flex-col">
                                  <span>{result.title}</span>
                                  <span className="text-xs text-gray-500 truncate">
                                    {result.description}
                                  </span>
                                </div>
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      )}
                    </>
                  )}
                </>
              )}
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
