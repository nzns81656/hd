import { ShowMessage } from '../modules/control'
import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 600000 // request timeout
})

// 拦截请求
service.interceptors.request.use(config => {
  // 获取客户端token
  if (localStorage.getItem('X-Token')) {
    //  存在将api_token写入 request header
    config.headers.common['Authorization'] = localStorage.getItem('X-Token')
  }
  return config
},
error => {
  // 显示调试错误信息
  console.log(error)
  // 显示错误信息;
  Promise.reject(error)
})

// 拦截返回
service.interceptors.response.use(
  response => {
    if (response.data.Msg === '超时') {
      console.log('超时')
      // 服务器端控制用户超时
      localStorage.removeItem('X-Token')
      localStorage.removeItem('user')
      window.location.href = '/' // 回到登录页
    } else if (response.data.Code === 0) {
      // 业务逻辑成功的返回结果,直接处理json
      return Promise.resolve(response.data.Data)
    } else {
      // 业务逻辑不成功的返回
      ShowMessage(response.data.Msg)
    }
  },
  error => {
    console.log('err' + error) // for debug
    ShowMessage(error.message)
    return Promise.reject(error)
  })

export default service
