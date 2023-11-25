import express from "express";
import { createUserController } from "./user.controller";

const router = express.Router();

router.post("/users", createUserController.createUser);

router.get("/users", createUserController.getAllUsers);

router.get("/:userId", createUserController.getSingleUser);

router.put("/:userId", createUserController.updateAUser);

export const createUserRoute = router;
