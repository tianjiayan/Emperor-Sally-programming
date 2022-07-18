import request from '../utils/request'

export const loginAPI = (data) => {
  return request({ url: '/login', method: 'POST', data })
}

export const getUserInfo = (data) => {
  return request({ url: '/getinfo', method: 'POST', data })
}
