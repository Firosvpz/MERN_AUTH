import express from "express";
const adminRouter = express.Router();
import {
  authAdmin,
  logoutAdmin,
  getUsers,
  getSingleUser,
  updateUserDetails,
  deleteUser,
  addUser,
} from "../controllers/adminController.js";
import upload from "../middleware/multer.js";

adminRouter.post("/", authAdmin);
adminRouter.post("/logout", logoutAdmin);
adminRouter.route("/users").get(getUsers);
adminRouter.get("/single-user", getSingleUser);
adminRouter.post("/update-user", upload.single("image"), updateUserDetails);
adminRouter.delete("/delete-user", deleteUser);
adminRouter.post("/add-user", upload.single("image"), addUser);

export default adminRouter;
