import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDB from "./db.js";
import investorRoutes from "./routes/investorRoutes.js";
import startUpRoutes from "./routes/startUpRoutes.js";

import  MatchMakingRoutes  from "./routes/matchMakingRoutes.js";
import  MailRoutes from "./routes/emailSchedularRoutes.js";
import {cronAuth} from "./middleware/cronAuth.js"
import { mailListner } from "./mail/mailListenerServer.js";
import AuthRoutes from "./routes/authRoutes.js";

// middleware
import {checkAuth} from "./middleware/auth/IsAuth.js"




dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(express.static("public"));

// Connect to MongoDB and start the server
connectToMongoDB()
.then(() => {
  // Use the user routes
  // mailListner()

    app.use("/api/investor",checkAuth, investorRoutes);
    app.use("/api/startup",checkAuth, startUpRoutes);
    app.use("/api/match",checkAuth,MatchMakingRoutes)
    app.use("/api/cron",cronAuth,MailRoutes)
    app.use("/api/auth", AuthRoutes)



    app.all('*',(req,res)=>{
res.status(500).json({message:"invalid request"})
    })
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
