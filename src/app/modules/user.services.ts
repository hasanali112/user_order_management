import { Users } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (user: Users) => {
  const result = await UserModel.create(user);
  return result;
};

export const userManagement = {
  createUserIntoDB,
};
