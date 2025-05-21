
import { useState, useEffect, useRef } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "@/contexts/SearchContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const GlobalSearchBar = () => {
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
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle keyboard shortcut (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }

      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  // Navigate to the selected result with enhanced functionality
  const handleResultClick = (result: typeof results[0]) => {
    if (!result.url) return;
    
    // Handle different result types
    if (result.category === 'formation' && result.formationId) {
      // For formations: navigate to formation page with parameter to open the modal
      navigate(`${result.url}?modal=${result.formationId}`);
    } 
    else if (result.category === 'faq' && result.faqCategory && result.questionIndex !== undefined) {
      // For FAQ: navigate to FAQ page with parameters for tab and question
      navigate(`${result.url}?tab=${result.faqCategory}&question=${result.questionIndex}`);
    } 
    else {
      // For other results: simple navigation
      navigate(result.url);
    }
    
    clearSearch();
    setIsOpen(false);
  };

  // Group results by category
  const groupedResults = results.reduce((acc, result) => {
    const category = result.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(result);
    return acc;
  }, {} as Record<string, typeof results>);

  const categoryLabels: Record<string, string> = {
    'service': 'Services',
    'formation': 'Formations',
    'faq': 'FAQ',
    'page': 'Pages'
  };

  return (
    <>
      {/* Search trigger with improved styling */}
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center justify-center p-1.5 text-gray-600 hover:text-primary rounded-md hover:bg-gray-100/70 transition-all duration-200"
        aria-label="Rechercher (Ctrl+K)"
        title="Rechercher (Ctrl+K)"
      >
        <Search className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
      </button>

      {/* Search modal dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 gap-0 max-w-2xl w-[90vw] rounded-xl overflow-hidden border shadow-lg">
          <div className="relative" ref={searchRef}>
            {/* Search input */}
            <div className="relative border-b">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                ) : (
                  <Search className="w-5 h-5 text-gray-500" />
                )}
              </div>
              <input
                type="text"
                ref={inputRef}
                value={query}
                onChange={(e) => updateQuery(e.target.value)}
                placeholder="Rechercher dans tout le site..."
                className="w-full p-4 pl-12 pr-10 text-base text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-0 transition-colors duration-200"
                autoFocus
              />
              {query && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 group"
                >
                  <X className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors duration-200 group-hover:rotate-90" />
                </button>
              )}
            </div>

            {/* Results section with enhanced styling */}
            {(query.length >= 2 || results.length > 0) && (
              <div className="max-h-[60vh] overflow-y-auto p-3 bg-white/95 backdrop-blur-sm">
                {Object.keys(groupedResults).length > 0 ? (
                  Object.entries(groupedResults).map(([category, categoryResults]) => (
                    <div key={category} className="mb-4">
                      <div className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">
                        {categoryLabels[category] || category}
                      </div>
                      <div className="mt-1.5 space-y-0.5">
                        {categoryResults.map((result) => (
                          <button
                            key={result.id}
                            onClick={() => handleResultClick(result)}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md transition-colors duration-200 group"
                          >
                            <div className="font-medium text-primary group-hover:translate-x-0.5 transition-transform duration-200">
                              {result.title}
                            </div>
                            <div className="text-sm text-gray-500 line-clamp-1 transition-colors duration-200 group-hover:text-gray-700">
                              {result.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="text-center">
                      <p className="mt-2 text-lg font-medium text-gray-900">Aucun résultat trouvé</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Essayez de modifier votre recherche ou vos filtres
                      </p>
                    </div>
                  </div>
                )}

                {/* Show loading indicator if isLoading is true */}
                {isLoading && results.length === 0 && (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlobalSearchBar;
