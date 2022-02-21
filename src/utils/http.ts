import axios, { AxiosInstance } from 'axios'
import { stringify } from 'query-string'

export function createHttp<T = AxiosInstance>(): T {
  const Http: AxiosInstance = axios.create({
    baseURL: '/api/',
    timeout: 10000,
    withCredentials: true,
    paramsSerializer: function (params) {
      return stringify(params, { arrayFormat: 'bracket' })
    },
  })

  return Http as any
}

export const interceptResponse = (instance: any) => {
  instance.interceptors.response.use((response: any) => {
    const { data } = response

    return data?.data ?? data
  })

  return instance
}

export const http = interceptResponse(createHttp())
