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

//
export const getStatistics1 = () => {
  return request({ url: 'statistics1', method: 'GET' })
}

export const statistics2API = () => {
  return request({ url: 'statistics2', method: 'GET' })
}

export const statistics3API = (data) => {
  return request({
    url: '/statistics3',
    method: 'GET',
    data
  })
}
