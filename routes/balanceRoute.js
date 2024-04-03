import express from "express";
import {balanceRequestController } from "../controllers/balanceController.js";




const router = express.Router();

router.post("/add-balance-request", balanceRequestController);


export default router;