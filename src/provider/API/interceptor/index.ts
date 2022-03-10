import axios, { AxiosRequestConfig } from 'axios'
import { url } from 'src/provider/config/constant'


const instance = axios.create({
    baseURL:  url.BASE_URL 
})

instance.interceptors.request.use(
    async (config: AxiosRequestConfig<any>) => {
        const token = await localStorage.getItem('token')
        
        if(token) {
            config.headers!.Authorization = `Bearer ${token}`
        }
        return config;
    },

    (err) => {
        return Promise.reject(err)
    }
)

export default instance