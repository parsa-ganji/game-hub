import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import platforms from "../data/platform";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}


// useData<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: () =>
    apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
  initialData: {count: platforms.length, results: platforms},
  staleTime: 24 * 60 * 60 * 1000 // 24h

});




export default usePlatforms;