import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv()
const secret = process.env.JWT_SECRET ;

export const sign = async(payload) => {
    try {
        
        return await jwt.sign(payload, secret);
    } catch (error) {
        return false
    }
}
export const verify = async(token) => {
    try {
       await jwt.verify(token, secret);
      
        return true
    } catch (error) {
        return false
    }
}

export const decode = async(token) => {
    try {
        return await jwt.decode(token);
    } catch (error) {
        return false
    }
}