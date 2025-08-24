import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Screenshot } from "../entities/screenshot";


const useScreenshots = (gameId: number) => {
    const apiCleint = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['game', gameId],
        queryFn: apiCleint.getAll
    })
};


export default useScreenshots;