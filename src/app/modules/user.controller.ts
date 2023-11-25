import { Request, Response } from "express";
import { userManagement } from "./user.services";

//query for create user
const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await userManagement.createUserIntoDB(userData);
    res.status(200).json({
      success: true,
      message: "Create successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: {
        status: 400,
        description: err.message,
      },
    });
  }
};

//query for getall user
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userManagement.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: "Get Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//query for get single user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdIntoNumber = parseInt(userId);
    const result = await userManagement.getSingleUserFromDB(userIdIntoNumber);
    res.status(200).json({
      success: true,
      message: "Get Successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: {
        status: 400,
        description: err.message,
      },
    });
  }
};

//update a user
const updateAUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userUpdateInt = parseInt(userId);
    const { user: userData } = req.body;
    const result = await userManagement.updateUser(userUpdateInt, userData);
    res.status(200).json({
      success: true,
      message: "update Successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "no update",
      error: {
        status: 400,
        description: err.message || "no update",
      },
    });
  }
};

//delete a user
const deleteUserFromDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userDeleteInt = parseInt(userId);
    await userManagement.deleteUser(userDeleteInt);
    res.status(200).json({
      success: true,
      message: "Delete Successfully",
      data: null,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "no update",
      error: {
        status: 400,
        description: err.message || "no update",
      },
    });
  }
};

//order update
const addOrderIntoDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orderParse = parseInt(userId);
    const { user: userData } = req.body;
    await userManagement.updateOrder(orderParse, userData);
    res.status(200).json({
      success: true,
      message: "order update Successfully",
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "no update",
      error: {
        status: 400,
        description: err.message || "no update",
      },
    });
  }
};

//find order from user;
const getOrderFromDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const singleOrder = parseInt(userId);
    const result = await userManagement.getAllOrder(singleOrder);
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order fetched fail",
      error: {
        status: 400,
        description: "Order fetched fail",
      },
    });
  }
};

export const createUserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateAUser,
  deleteUserFromDB,
  addOrderIntoDB,
  getOrderFromDB,
};
