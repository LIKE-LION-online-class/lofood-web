import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

// Define a type for the slice state
interface CartState {
  restaurantId: string;
}

const initialState: CartState = {
  restaurantId: '',
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<string>) => {
      state.restaurantId = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
