import instance from '../utils/axios'

export const orderHistory = (data) => {
  return instance.post('/order/getOrderUserLogged')
}

