export type FullNameOfUser = {
  firstName: string;
  lastName: string;
};

export type UserAddress = {
  street: string;
  city: string;
  country: string;
};

export type UserOrder = {
  productName: string;
  price: number;
  quantity: number;
};

export type Users = {
  userId: string;
  userName: string;
  password: string;
  fullName: FullNameOfUser;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: UserAddress;
  orders?: UserOrder[];
};
