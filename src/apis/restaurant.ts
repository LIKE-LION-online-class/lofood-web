import instance from '../utils/axios'
import ApiUtil from '@/common/ApiUtil';

export const getRestaurantsHttp = () => {
  return instance.get(ApiUtil.RESTAURANT_URL);
};

export const getIn5KmHttp = ({latitude,longitude}) => {
  return instance.get(ApiUtil.RESTAURANT_URL + ApiUtil.IN5KM_LOCATION_URL + `/${latitude}/${longitude}`);
};
