import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface QYBRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (res: T) => T

  responseInterceptorCatch?: (error: any) => any
}

export interface QYBRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: QYBRequestInterceptors<T>
  showLoading?: boolean
}
