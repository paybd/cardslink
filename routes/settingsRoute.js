import express from "express";

const router = express.Router();

import {
  getSettingsController,
} from "../controllers/settingsController.js";

router.post("/get-settings", getSettingsController);

export default router;
