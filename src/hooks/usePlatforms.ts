import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import APIClient from "../services/api-client";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}


const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: 
    apiClient.getAll,
  initialData: {count: platforms.length, results: platforms},
  staleTime: 24 * 60 * 60 * 1000 // 24h

});




export default usePlatforms;