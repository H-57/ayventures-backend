import express from 'express';
import {getAllMatchMaking,getSingleMatchMaking} from "../controller/matchMakingController.js"
const router=express.Router();

import {IsAccess} from "../middleware/auth/IsAccess.js";

router.get("/get-all",IsAccess,getAllMatchMaking)
router.get("/get/:id",IsAccess,getSingleMatchMaking)



export default router