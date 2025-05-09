
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  const { results, isLoading } = useSearch(searchQuery);

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

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelectItem = (result: SearchResult) => {
    navigate(result.url);
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <Button
        variant="outline"
        className="relative h-9 w-9 md:w-64 md:justify-start justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none"
        onClick={() => setIsOpen(true)}
        aria-label="Rechercher les services"
      >
        <Search className="h-4 w-4 md:mr-2" />
        <span className="hidden md:inline-flex">Rechercher...</span>
        <span className="sr-only md:hidden lg:inline-flex ml-auto text-xs tracking-widest opacity-60">
          Ctrl+K
        </span>
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-screen max-w-md -translate-x-1/3 sm:-translate-x-1/2 z-50">
          <Command className="rounded-lg border shadow-md">
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <CommandInput
                ref={inputRef}
                placeholder="Rechercher un service, une formation..."
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
              {searchQuery && (
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
              {searchQuery === "" ? (
                <CommandEmpty>Commencez à taper pour rechercher</CommandEmpty>
              ) : (
                <>
                  {isLoading ? (
                    <CommandEmpty>Recherche en cours...</CommandEmpty>
                  ) : results.length === 0 ? (
                    <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
                  ) : (
                    <>
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
