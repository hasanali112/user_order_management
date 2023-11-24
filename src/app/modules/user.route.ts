import express from "express";
import { createStudentController } from "./user.controller";

const router = express.Router();

router.post("/users", createStudentController.createStudent);

router.get("/users", createStudentController.getAllStudents);

export const createUserRoute = router;
