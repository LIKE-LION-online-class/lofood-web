import { Food } from './Food';

export interface FoodOrderRequest {
  foodId: string;
  priceOrder: number;
  quantity: number;
}
