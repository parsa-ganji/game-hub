import { useQuery,useInfiniteQuery } from "@tanstack/react-query";

import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { s } from "framer-motion/dist/types.d-CtuPurYT";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = () => {

  const gameQuery = useGameQueryStore(s => s.gameQuery)

   return useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey:['games',gameQuery],
    queryFn: ({pageParam = 1}) => 
      apiClient.getAll({
    params: {
      page: pageParam,
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.search
  }}),
  getNextPageParam: (lastPage,allPage) => {
    return lastPage.next ? allPage.length + 1 : undefined;
  },
  staleTime: 24 * 60 * 60 * 1000
  }); 
}




export default useGames;


