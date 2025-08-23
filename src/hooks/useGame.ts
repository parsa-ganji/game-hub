import { useParams } from "react-router-dom";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "./useGames";
import { useQuery } from "@tanstack/react-query";
import { a } from "framer-motion/dist/types.d-CtuPurYT";

const apiClient = new APIClient<Game>('/games')

const useGame = (slug: string) => {
    return useQuery<Game>({
        queryKey:['Game',slug],
        queryFn: () => apiClient.get(slug)
    })
}


export default useGame;