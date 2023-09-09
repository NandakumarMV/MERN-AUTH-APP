import express from "express";
import { AdminProtect } from "../middleware/adminAuthMiddleware.js";
const router = express.Router();

import {
  authAdmin,
  editUserProfile,
  listUserProfile,
  logoutAdmin,
  registerAdmin,
} from "../controllers/adminController.js";

router.post("/auth", authAdmin);

router.post("/", registerAdmin);

router.post("/logout", logoutAdmin);

router.get("/users-list", AdminProtect, listUserProfile);

router.put("/edit-user", AdminProtect, editUserProfile);

export default router;
