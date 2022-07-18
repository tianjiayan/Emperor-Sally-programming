import { ElNotification } from 'element-plus'

export const Notification = (title, message, type) => {
  ElNotification({
    title,
    message,
    type
  })
}
