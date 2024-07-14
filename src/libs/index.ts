import { ICart, IFood } from '@/interfaces';

export const formatVND = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export const handleCart = ({
  cart,
  food,
  type,
}: {
  cart: ICart;
  food: IFood;
  type: 'update' | 'increment' | 'decrement' | 'remove';
}): ICart => {
  const existingItem = cart.items.find((cartItem) => cartItem.id === food.id);

  let updatedItems;

  if (existingItem) {
    if (type === 'remove') {
      updatedItems = cart.items.filter((cartItem) => cartItem.id !== food.id);
    } else {
      updatedItems = cart.items.map((cartItem) => {
        switch (type) {
          case 'update':
            return cartItem.id === food.id ? { ...cartItem, quantity: food.quantity } : cartItem;
          case 'increment':
            return cartItem.id === food.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
          case 'decrement':
            return cartItem.id === food.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem;
          default:
            return cartItem;
        }
      });
    }
  } else {
    updatedItems = [...cart.items, { ...food, quantity: 1 }];
  }

  updatedItems = updatedItems.filter((item) => item.quantity > 0);

  const totalQuantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const newCart = {
    ...cart,
    items: updatedItems,
    totalPrice,
    totalQuantity,
    open: false,
  };

  return newCart;
};
