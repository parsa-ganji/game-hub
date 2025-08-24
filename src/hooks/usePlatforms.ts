import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platform";
import APIClient from "../services/api-client";
import  Platform  from "../entities/Platform";


const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: 
    apiClient.getAll,
  initialData: platforms,
  staleTime: 24 * 60 * 60 * 1000 // 24h

});




export default usePlatforms;