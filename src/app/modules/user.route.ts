import express from "express";
import { createStudentController } from "./user.controller";

const router = express.Router();

router.post("/users", createStudentController.createStudent);

export const createUserRoute = router;
