import { configureStore } from '@reduxjs/toolkit';
import cartProducer from './slice/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartProducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
