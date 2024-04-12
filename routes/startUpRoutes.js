import express from "express";
import {
    getAllStartUp,
    multiAddStartUp,
    getStartUp,
    updateStartUp,
    delStartUp,
  } from "../controller/startUpController.js";
  import {IsAdmin} from "../middleware/auth/IsAdmin.js";
  import {IsAccess} from "../middleware/auth/IsAccess.js";
const router = express.Router();

router.post("/multi-add",IsAccess, multiAddStartUp);

router.get("/get-all",IsAccess, getAllStartUp);
router.get("/get/:id",IsAccess, getStartUp);
router.put("/update/:id",IsAccess ,updateStartUp);
router.delete("/delete/:id",IsAdmin, delStartUp);

export default router;