import { atomWithStorage } from 'jotai/utils';
import { ICart, ILocation } from './interfaces';

export const userInfoAtom = atomWithStorage('user_info', {
  usersId: '',
  userName: '',
});

export const tokenAtom = atomWithStorage('token', null);

export const coordsAtom = atomWithStorage('coords', {
  latitude: 0,
  longitude: 0,
});

export const addressAtom = atomWithStorage<ILocation>('address', {});

export const cartAtom = atomWithStorage<ICart>('cart', {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  open: false,
});
