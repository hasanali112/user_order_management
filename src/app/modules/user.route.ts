import express from "express";
import { createUserController } from "./user.controller";

const router = express.Router();

router.post("/users", createUserController.createUser);

router.get("/users", createUserController.getAllUsers);

router.get("/:userId", createUserController.getSingleUser);

router.put("/:userId", createUserController.updateAUser);

router.delete("/:userId", createUserController.deleteUserFromDB);

router.put("/:userId/orders", createUserController.addOrderIntoDB);

router.get("/:userId/orders", createUserController.getOrderFromDB);

router.get("/:userId/orders/total-price", createUserController.getTotalPriceDB);

export const createUserRoute = router;
