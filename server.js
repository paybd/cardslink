import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import morgan from "morgan";


import authRoute from "./routes/authRoute.js";
import settingsRoute from "./routes/settingsRoute.js";
import balanceRoute from "./routes/balanceRoute.js";

import cors from "cors";


//configure env
dotenv.config();

//database config
connectDB();

//rest objet
const app = express();

app.use(cors());

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/auth", authRoute);
app.use("/settings", settingsRoute);
app.use("/balance", balanceRoute);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to our app",
  });
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, "0.0.0.0");

console.log(PORT);

//192.168.0.129 command prompt e ipconfig likhe ipv4 address eta

//0.0.0.0 when upload to hosting site
