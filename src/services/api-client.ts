import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ba92f511584b499c8b3bb9f189b4d873'
    }
})

 export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}


class APIClient<T>{

    constructor(public endPoint : string){};

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endPoint,config)
        .then(res => res.data)
    }
}
export default APIClient;