import { create } from "zustand";
import platform from "./data/platform";

 interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setPlatformId: (platformId: number) => void;
  setGenreId: (genreId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: {search: searchText} })),
    setPlatformId: (platformId) => set((Store) => ({gameQuery: {...Store.gameQuery, platformId}})),
    setGenreId: (genreId) => set((store) => ({gameQuery: {...store.gameQuery, genreId}})),
    setSortOrder: (sortOrder) => set((store) => ({gameQuery:{...store.gameQuery, sortOrder}}))
}))


export default useGameQueryStore;