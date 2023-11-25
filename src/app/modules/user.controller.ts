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

export const createUserController = {
  createUser,
  getAllUsers,
  getSingleUser,
};
