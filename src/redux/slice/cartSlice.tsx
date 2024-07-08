import { Food } from '@/model/Food';
import { FoodOrderRequest } from '@/model/FoodOrderRequest';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { toast } from 'react-toastify';

// Define a type for the slice state
interface CartState {
  CartArr: Food[];
  FoodOrder: FoodOrderRequest[];
}

const initialState: CartState = {
  CartArr: [],
  FoodOrder: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<Food>) => {
      const foodIndex = state.CartArr.findIndex((p) => p?.id === action.payload?.id);
      if (foodIndex === -1) {
        state.CartArr.push({ ...action.payload, quantity: 1 });
      } else {
        state.CartArr[foodIndex].quantity += 1;
      }
      toast.success('added');
    },
    minusFood: (state, action: PayloadAction<Food>) => {
      const foodIndex = state.CartArr.findIndex((p) => p?.id === action.payload?.id);
      if (state.CartArr[foodIndex].quantity === 1 && foodIndex !== -1) {
        state.CartArr.splice(foodIndex, 1);
      } else {
        state.CartArr[foodIndex].quantity -= 1;
      }
    },
    deleteFood: (state, action: PayloadAction<Food>) => {
      const foodRemoveId = action.payload.id;
      state.CartArr = state.CartArr.filter((item) => item.id !== foodRemoveId);
    },
    clearCart: (state) => {
      state.CartArr = [];
    },
  },
});

export const selectTotalPrice = (state: RootState) => {
  return state.cart.CartArr.reduce((sum: number, item: Food) => {
    return sum + item?.price * item?.quantity;
  }, 0);
};

export const { addFood, minusFood, deleteFood, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
