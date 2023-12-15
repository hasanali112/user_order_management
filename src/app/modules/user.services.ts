import { UserOrder, Users } from "./user.interface";
import { UserModel } from "./user.model";

//create new user
const createUserIntoDB = async (user: Users) => {
  if (await UserModel.isUserExists(user.userId)) {
    throw new Error("already exists");
  }
  const result = await UserModel.create(user);
  return result;
};

//get all user
const getAllUserFromDB = async () => {
  const result = await UserModel.find().select({
    _id: 0,
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

//find specific user
const getSingleUserFromDB = async (userId: number) => {
  if (await UserModel.isUserExists(userId)) {
    const result = await UserModel.findOne({ userId }).select({
      _id: 0,
      password: 0,
      orders: 0,
    });
    return result;
  } else {
    throw new Error("User not found");
  }
};

//update user
const updateUser = async (userId: number, userData: Users) => {
  if (await UserModel.isUserExists(userId)) {
    const result = await UserModel.findOneAndUpdate({ userId }, userData, {
      new: true,
      runValidators: true,
    }).select({
      _id: 0,
      password: 0,
      orders: 0,
    });
    return result;
  } else {
    throw new Error("User not found");
  }
};

//delete user
const deleteUser = async (userId: number) => {
  if (await UserModel.isUserExists(userId)) {
    const result = await UserModel.findOneAndDelete({ userId });
    return result;
  } else {
    throw new Error("User not found");
  }
};

//add a order
const updateOrder = async (userId: number, orderData: UserOrder) => {
  if (await UserModel.isUserExists(userId)) {
    const result = await UserModel.updateOne(
      { userId },
      {
        $push: {
          orders: {
            productName: orderData.productName,
            price: orderData.price,
            quantity: orderData.quantity,
          },
        },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
      }
    );

    return result;
  } else {
    throw new Error("User not found");
  }
};

//retive all order
const getAllOrder = async (userId: number) => {
  if (await UserModel.isUserExists(userId)) {
    const result = await UserModel.findOne({ userId }).select({
      _id: 0,
      orders: 1,
    });
    return result;
  } else {
    throw new Error("User not found");
  }
};

//calculate the price
const calculateThePrice = async (userId: number) => {
  if (await UserModel.isUserExists(userId)) {
    const result = await UserModel.aggregate([
      {
        $match: { userId: userId },
      },
      {
        $unwind: "$orders",
      },
      {
        $group: {
          _id: "$userId ",
          totalPrice: {
            $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalPrice: 1,
        },
      },
    ]);
    return result[0];
  } else {
    throw new Error("User not found");
  }
};

export const userManagement = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUser,
  deleteUser,
  updateOrder,
  getAllOrder,
  calculateThePrice,
};
