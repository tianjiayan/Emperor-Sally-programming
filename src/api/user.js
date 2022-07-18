import request from '../utils/request'

export const loginAPI = (data) => {
  return request({ url: '/login', method: 'POST', data })
}

export const getUserInfo = (data) => {
  return request({ url: '/getinfo', method: 'POST', data })
}

// 退出登录
export const getLogout = (data) => {
  return request({ url: '/logout', method: 'POST', data })
}
