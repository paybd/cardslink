import express from "express";

import { fetchUserController, loginController,registerController } from "../controllers/authController.js";

import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", registerController);
router.post("/login", loginController);
router.post("/fetch-user", fetchUserController);

export default router;