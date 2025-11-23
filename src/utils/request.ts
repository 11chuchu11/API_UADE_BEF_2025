import axios, { AxiosError } from 'axios'
import { getCookie } from './cookies'

const getRequestClient = ({authorizationCallback}: {authorizationCallback?:()=> void}) => {
    const requestClient = axios.create({
        baseURL: 'http://localhost:3000/api',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        },
    })

    requestClient.interceptors.request.use(
        (config) => {
            const token = getCookie('access_token')
  
            if (token) {
                config.headers = config.headers ?? {}
                config.headers.Authorization = `Bearer ${token}`
            }
  
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )
  
    requestClient.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            if (error.response?.status === 401) {
                authorizationCallback?.()
            }
  
            return Promise.reject(error)
        }
    )

    return requestClient
}
export default getRequestClient