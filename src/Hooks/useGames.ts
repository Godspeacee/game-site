

import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/services/api-client";
import { Platform } from "@/Hooks/usePlatforms";
import ms from 'ms'
import useGameQueryStore from "@/Zustandstores/GameQuerystore";

const apiClient = new APIClient<Game>('/games')

 export interface Game {
    id: number
    name: string;
    background_image: string;
    parent_platforms:{ platform:Platform} []
    metacritic:number;
    rating_top:number;
 }


 const useGames = () => {
const gameQuery = useGameQueryStore(s => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey :['games', gameQuery],
    queryFn: ({pageParam }) => apiClient.getALL({
      params: {
        genres:gameQuery.genreId,
        parent_platforms:gameQuery.platformId,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText,
        page:pageParam
       }
    }),
    staleTime:ms("24h"),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => { 
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  })
 }
  
          
export default useGames