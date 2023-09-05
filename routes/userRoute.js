import express from "express";
import {
  Signup,
  forgotPassword,
  getUserDetails,
  login,
  logout,
  resetPassword,
  updatePassword,
} from "../controllers/userCtrl.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/signup").post(Signup);

router.route("/login").post(login);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

export default router;
