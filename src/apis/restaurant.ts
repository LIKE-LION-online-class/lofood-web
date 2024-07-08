import instance from '../utils/axios'
import ApiUtil from '@/common/ApiUtil';

export const getRestaurantsHttp = () => {
  return instance.get(ApiUtil.RESTAURANT_URL);
};
