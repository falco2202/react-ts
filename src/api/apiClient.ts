import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  withCredentials: false
})

const onRequest = (config: InternalAxiosRequestConfig) => {
  return config
}

const onResponse = (response: AxiosResponse) => ({
  ...response,
  data: response.data
})

const onRequestError = (error: AxiosError) => Promise.reject(error)

const onResponseError = (error: AxiosError) => Promise.reject(error)

apiClient.interceptors.request.use(onRequest, onRequestError)
apiClient.interceptors.response.use(onResponse, onResponseError)

export default apiClient
