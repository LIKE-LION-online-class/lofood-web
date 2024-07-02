export interface User{
  id: number,
  fullname:string,
  address: string,
  phoneNumber: string,
  username:string,
  email:string,
  password:string,
  role:string
}
export type Users = Pick<User, 'id'|'email'|'avatar'|'last_name'>[]
