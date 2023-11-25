import { Request, Response } from "express";
import { userManagement } from "./user.services";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await userManagement.createUserIntoDB(userData);
    res.status(200).json({
      success: true,
      message: "Create successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

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
  } catch (error) {
    console.log(error);
  }
};

export const createUserController = {
  createUser,
  getAllUsers,
  getSingleUser,
};
