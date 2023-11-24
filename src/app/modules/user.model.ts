import { Schema, model } from "mongoose";
import {
  FullNameOfUser,
  UserAddress,
  UserOrder,
  Users,
} from "./user.interface";

const FullNameOfUserSchema = new Schema<FullNameOfUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const UserAddressSchema = new Schema<UserAddress>({
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});

const UserOrderSchema = new Schema<UserOrder>({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

const usersSchema = new Schema<Users>({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  fullName: FullNameOfUserSchema,
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  hobbies: {
    type: [String],
  },
  address: UserAddressSchema,
  orders: {
    type: [UserOrderSchema],
    default: undefined,
  },
});

export const UserModel = model<Users>("Users", usersSchema);
