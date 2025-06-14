import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Genre } from "./useGenres";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
  rating_top: number;
}


const useGames = (gameQuery: GameQuery) => 
  useQuery<FetchResponse<Game>,Error>({
    queryKey:['games',gameQuery],
    queryFn: () => apiClient.get<FetchResponse<Game>>('/games',{params: {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.search
  }
  }).then(res => res.data)
  })

  // useData<Game>(,{params: {
  //   genres: gameQuery.genre?.id,
  //   platforms: gameQuery.platform?.id,
  //   ordering: gameQuery.sortOrder,
  //   search: gameQuery.search
  // }
  // },
  // [gameQuery.genre?.id,
  //   gameQuery.platform?.id,
  //   gameQuery.sortOrder,
  //   gameQuery.search
  // ]);

export default useGames;