import express from "express";
import {
  getAllInvestor,
  multiAddInvestor,
  getInvestor,
  updateInvestor,
  delInvestor,
} from "../controller/investorController.js";

import {IsAdmin} from "../middleware/auth/IsAdmin.js";
import {IsAccess} from "../middleware/auth/IsAccess.js";


const router = express.Router();

router.post("/multi-add",IsAccess, multiAddInvestor);

router.get("/get-all",IsAccess, getAllInvestor);
router.get("/get/:id",IsAccess, getInvestor);
router.put("/update/:id",IsAccess, updateInvestor);
router.delete("/delete/:id",IsAdmin, delInvestor);

export default router;
