import { configureStore } from '@reduxjs/toolkit';
import cartProducer from './slice/cartSlice';
import restaurantReducer from './slice/restaurantSlice';
import locationReducer from './slice/locationSlice';

export const store = configureStore({
  reducer: {
    cart: cartProducer,
    restaurant: restaurantReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
