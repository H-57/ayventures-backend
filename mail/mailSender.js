import nodemailer from "nodemailer";
import { configDotenv } from 'dotenv';
configDotenv()





export const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
  socketTimeout: 60000,
});






