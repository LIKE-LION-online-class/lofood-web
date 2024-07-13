import { ICart, IFood } from '@/interfaces';

export const formatVND = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export const addToCart = (cart: ICart, food: IFood): ICart => {
  const existingItem = cart.items.find((cartItem) => cartItem.id === food.id);

  let updatedItems;
  if (existingItem) {
    updatedItems = cart.items.map((cartItem) =>
      cartItem.id === food.id ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } : cartItem,
    );
  } else {
    updatedItems = [...cart.items, { ...food, quantity: 1 }];
  }

  const newCart = {
    ...cart,
    items: updatedItems,
    totalPrice: cart.totalPrice + food.price,
    totalQuantity: cart.totalQuantity + 1,
    open: true,
  };

  return newCart;
};

export const removeFromCart = (cart: ICart, food: IFood): ICart => {
  const existingItem = cart.items.find((cartItem) => cartItem.id === food.id);

  if (!existingItem) {
    return cart;
  }

  let updatedItems;
  if (existingItem.quantity === 1) {
    updatedItems = cart.items.filter((cartItem) => cartItem.id !== food.id);
  } else {
    updatedItems = cart.items.map((cartItem) =>
      cartItem.id === food.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
    );
  }

  const newCart = {
    ...cart,
    items: updatedItems,
    totalPrice: cart.totalPrice - food.price,
    totalQuantity: cart.totalQuantity - 1,
    open: false,
  };

  return newCart;
};

export const removeItemFromCart = (cart: ICart, food: IFood): ICart => {
  const existingItem = cart.items.find((cartItem) => cartItem.id === food.id);

  if (!existingItem) {
    return cart;
  }

  const updatedItems = cart.items.filter((cartItem) => cartItem.id !== food.id);

  const newCart = {
    ...cart,
    items: updatedItems,
    totalPrice: cart.totalPrice - food.price * food.quantity,
    totalQuantity: cart.totalQuantity - food.quantity,
    open: false,
  };

  return newCart;
};
