import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ba92f511584b499c8b3bb9f189b4d873'
    }
})

 export interface FetchResponse<T> {
  count: number;
  results: T[];
}