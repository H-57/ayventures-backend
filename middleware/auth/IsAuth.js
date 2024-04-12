

import { verify } from "../../services/auth/jwtService.js";
export const checkAuth = async (req, res, next) =>{
try {
    const token=req.headers.authorization
   
    const jwtToken=  token?.split('Bearer ')[1]
   
    if(!jwtToken){
      return res.status(401).json({success:false,message:'Unauthorized'})
    }
    if(jwtToken){
  
      const isAuth= await verify(jwtToken)
      
      if(isAuth){
        next()
      }else{
        return res.status(401).json({success:false,message:'Unauthorized'})
      }
    }
  
  
} catch (error) {
    return res.status(401).json({success:false,message:'Unauthorized'})
}
   
}
