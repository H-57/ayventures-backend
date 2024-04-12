
import { decode } from "../../services/auth/jwtService.js";

import { User } from "../../model/user.js";
export const IsAccess = async (
  req,
  res,
  next
) => {
  const token = req.headers.authorization;

  const jwtToken= token?.split("Bearer ")[1];
  try {
    const user = await decode(jwtToken);
    if (user) {
      const userExits = await User.findById(user?.userId);
      if (userExits?.IsAdmin) {
        next();
      }
      else if (userExits?.userType=="employee") {
        next();
      } 
      
      else {
        return res.status(500).json({ success: false, message: "bad request" });
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "bad request" });
  }
};
