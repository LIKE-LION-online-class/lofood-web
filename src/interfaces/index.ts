export interface IUser {
  id: number;
  fullname: string;
  address: string;
  phoneNumber: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface IRestaurant {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  latitude: number;
  longitude: number;
  image: string;
}

export interface IFood {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  quantity: number;
}

export interface ICart {
  items: IFood[];
  address?: string;
  note?: string;
  totalQuantity: number;
  totalPrice: number;
  open: boolean;
  itemsBuyOnly?: IFood[];
  itemsBuyNow?: IFood;
}

export interface ILocation {
  city?: string;
  continent?: string;
  country?: string;
  country_code?: string;
  residential?: string;
  road?: string;
  road_type?: string;
  suburb?: string;
  formatted_address?: string;
  province?: string;
}
