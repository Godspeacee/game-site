import { useQuery } from "@tanstack/react-query"
import APIClient from "@/services/api-client"
import ms from 'ms'

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

 export interface Platform{
    id: number
    name:string
    slug: string
}

const usePlatforms= () => useQuery({
    queryKey:['platforms'],
    queryFn: () => apiClient.getALL({}),
    staleTime:ms('24h'),
})

export default usePlatforms