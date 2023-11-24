import { Users } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: Users) => {
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

export const userManagement = {
  createUserIntoDB,
  getAllUserFromDB,
};
