
import { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { FetechResponse } from "@/services/api-client";


export interface Platform{
    id: number;
    name:string;
    slug:string;
}

 export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{ platform:Platform} []
    metacritic:number;
    rating_top:number;
  }
  
 

const useGames = (gameQuery:GameQuery) => 
  useQuery<FetechResponse<Game>, Error>({
    queryKey :['games'],
    queryFn: () => apiClient.get<FetechResponse<Game>>('/games', {
      params: {genres:gameQuery.genre?.id, parent_platforms:gameQuery.platform?.id, ordering:gameQuery.sortOrder, search:gameQuery.searchText}
    })
    .then(res => res.data),
    staleTime:24*60*60*1000//24hrs
  })
  


export default useGames