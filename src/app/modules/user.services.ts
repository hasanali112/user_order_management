import { Users } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: Users) => {
  if (await UserModel.isUserExists(user.userId)) {
    throw new Error("already exists");
  }
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find().select({
    _id: 0,
    userName: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

const getSingleUserFromDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId }).select({
    password: 0,
    _id: 0,
  });
  return result;
};

export const userManagement = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
};
