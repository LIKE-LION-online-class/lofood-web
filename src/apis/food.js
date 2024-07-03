import instance from '../utils/axios'

export const loginHttp = (data) => {
  return instance.post('/food', data)
}
