import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

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


