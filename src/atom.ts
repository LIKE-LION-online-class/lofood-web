import { atomWithStorage } from 'jotai/utils';
import { ICart, ILocation } from './interfaces';

interface IUserInfo {
  id?: string;
  username?: string;
  role?: string;
}

interface ICoords {
  latitude?: number;
  longitude?: number;
}

export const userInfoAtom = atomWithStorage<IUserInfo>('user_info', {});

export const coordsAtom = atomWithStorage<ICoords>('coords', {});

export const addressAtom = atomWithStorage<ILocation>('address', {});

export const cartAtom = atomWithStorage<ICart>('cart', {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  open: false,
});
