import instance from '../utils/axios'

export const getfoodHttp = () => {
  return instance.get('/food')
}
