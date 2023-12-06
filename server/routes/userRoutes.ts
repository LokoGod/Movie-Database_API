import express from "express";
const userRouter = express.Router();

import { loginUser, signupUser } from "../controllers/userController";

userRouter.route("/login").post(loginUser);
userRouter.route("/signup").post(signupUser);

export { userRouter };
