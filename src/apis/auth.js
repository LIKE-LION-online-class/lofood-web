import instance from '../utils/axios'

export const loginHttp = (data) => {
  return instance.post('/security/login', data)
}

export const registerHttp = (data) => {
  return instance.post('/security/register', data)
}
