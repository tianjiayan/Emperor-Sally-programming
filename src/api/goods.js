import request from '@/utils/request'

// 规格管理
const skusList = (current) => {
  return request({ url: `/skus/${current}`, method: 'GET' })
}

export default {
  skusList
}
