import { Schema, model } from "mongoose";
import {
  FullNameOfUser,
  UserAddress,
  UserOrder,
  Users,
  tUserModel,
} from "./user.interface";

//name schema
const FullNameOfUserSchema = new Schema<FullNameOfUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

//sub-address schma
const UserAddressSchema = new Schema<UserAddress>(
  {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { _id: false }
);

//sub-order schema
const UserOrderSchema = new Schema<UserOrder>(
  {
    productName: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  { _id: false }
);

//user schema
const usersSchema = new Schema<Users, tUserModel>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  fullName: {
    type: FullNameOfUserSchema,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isActive: {
    type: Boolean,
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: UserAddressSchema,
    required: true,
  },
  orders: {
    type: [UserOrderSchema],
    default: undefined,
  },
});

usersSchema.statics.isUserExists = async function (userId: number) {
  const existUser = await UserModel.findOne({ userId });
  return existUser;
};

//model
export const UserModel = model<Users, tUserModel>("Users", usersSchema);
