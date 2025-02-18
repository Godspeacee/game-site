
import { useQuery } from "@tanstack/react-query";
import  { FetechResponse } from "@/services/api-client";
import apiClient from "@/services/api-client";

export interface Genre{
    id: number;
    name:string;
    image_background:string
}



const useGenres = () => 
useQuery({
    queryKey:['genres'],
    queryFn: () => apiClient.get<FetechResponse<Genre>>('/genres')
    .then(res => res.data),
    staleTime: 24*60*60*1000 //24hr
})
 

export default useGenres