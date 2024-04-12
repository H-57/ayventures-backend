import express from "express";
import {checkAuth} from "../middleware/auth/IsAuth.js";
import { IsAdmin } from "../middleware/auth/IsAdmin.js";
import { IsAccess } from "../middleware/auth/IsAccess.js";
import {getUser,getUsers,login, register, updateUserByEmployee, updateUserByAdmin, deleteUser,getUserBYId} from "../controller/authController.js"
const router=express.Router();
router.get("/user",checkAuth,IsAccess,getUser)
router.post("/login",login)
router.put("/update",checkAuth,IsAccess, updateUserByEmployee)
router.post("/register", checkAuth,IsAdmin,register)
router.get("/user/:id",checkAuth,IsAdmin,getUserBYId)
router.get("/users",checkAuth,IsAdmin, getUsers)
router.put("/update/:id",checkAuth,IsAdmin, updateUserByAdmin)
router.delete("/delete/:id",checkAuth,IsAdmin, deleteUser)



export default router