import { Request, Response } from "express";
import { userManagement } from "./user.services";

const createStudent = async (req: Request, res: Response) => {
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

export const createStudentController = {
  createStudent,
};
