import { useQuery } from "@tanstack/react-query"
import  { FetechResponse } from "./useData"
import apiClient from "@/services/api-client"



interface Platform{
    id: number
    name:string
    slug: string
}

const usePlatforms= () => useQuery({
    queryKey:['platforms'],
    queryFn: () => apiClient.get<FetechResponse<Platform>>('/platforms/lists/parents').then((res) => res.data),
    staleTime:24*60*60*1000,// 24hrs
    
})

export default usePlatforms