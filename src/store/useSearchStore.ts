// src/store/useSearchStore.ts
import { create } from "zustand";
import { SearchState } from "../types/searchStoreTypes";


export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  filteredProducts: [],
  setQuery: (query) => set({ query }),
  setFilteredProducts: (filteredProducts) => set({ filteredProducts }),
  clearSearch: () => set({ query: "", filteredProducts: [] })
}));