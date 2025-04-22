export type Product = {
    name: string;
    price: string;
    image: string;
  };
  
  export type SearchState = {
    query: string;
    filteredProducts: Product[];
    setQuery: (query: string) => void;
    setFilteredProducts: (products: Product[]) => void;
    clearSearch: () => void;
  };
  