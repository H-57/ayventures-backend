import express from "express";
import{sendInitialCronjobsMails,sendFollowUp2CronjobsMails,sendFollowUpCronjobsMails} from "../controller/emailSchedularController.js"

const router=express.Router();

router.get("/initialmails",sendInitialCronjobsMails)
.get("/followup1mails",sendFollowUpCronjobsMails)
.get("/followup2mails",sendFollowUp2CronjobsMails)



export default router