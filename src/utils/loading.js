import { ElLoading } from 'element-plus'

export const loading = () => {
  return ElLoading.service({
    target: 'body',
    background: 'rgba(0,0,0,0.4)',
    text: '正在加载中'
  })
}
