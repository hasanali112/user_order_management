import express from "express";
import { createUserController } from "./user.controller";

const router = express.Router();

router.post("/users", createUserController.createUser);

router.get("/users", createUserController.getAllUsers);

router.get("/:userId", createUserController.getSingleUser);

export const createUserRoute = router;
