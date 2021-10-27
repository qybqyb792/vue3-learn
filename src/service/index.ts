// service统一出口
import QYBRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

// axios实例
const qybRequest = new QYBRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 请求成功的拦截
    requestInterceptor: (conifg) => {
      const token = ''
      if (token) {
        conifg.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功的拦截')

      return conifg
    },
    // 请求失败的拦截
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')

      return err
    },
    // 响应成功的拦截
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')

      return res
    },
    // 响应失败的拦截
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')

      return err
    }
  }
})

export default qybRequest
