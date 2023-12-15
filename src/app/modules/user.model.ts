import { Schema, model } from "mongoose";
import {
  FullNameOfUser,
  UserAddress,
  UserOrder,
  Users,
  tUserModel,
} from "./user.interface";
import bcrypt from "bcrypt";
import config from "../config";

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
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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

usersSchema.methods.toJSON = function () {
  const userPassord = this.toObject();
  delete userPassord.password;
  return userPassord;
};

usersSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

usersSchema.statics.isUserExists = async function (userId: number) {
  const existUser = await UserModel.findOne({ userId });
  return existUser;
};

//model
export const UserModel = model<Users, tUserModel>("Users", usersSchema);
