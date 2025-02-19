import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count:number;
    results: T[];
}

  const axiosInstance = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"a83a4394f85a49b9b61e0e26eed19632"
    }
})

class APIClient<T>{
    endpoint: string

    constructor(endpoint:string){
        this.endpoint = endpoint
    }

    getALL(config:AxiosRequestConfig){
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then ( res => res.data)
    }
}

export default APIClient