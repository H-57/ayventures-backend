import { compare } from "bcrypt";
import { User } from "../model/user.js";
import { decode, sign } from "../services/auth/jwtService.js";
import validator from "validator";
import bcrypt from "bcrypt";

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(500).json({ success: false, message: "fill all credentials" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    //   console.log(isMatch, password, user.password);

    if (isMatch) {
      const token = await sign({
        userId: user._id,
        userType: user.userType,
        name: user.name,
      });

      return res.status(200).json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          userType: user.userType,
          // Add any other user data you want to send
        },
        message: "Login Successfully",
      });
    }

    return res.status(403).json({ message: "Invalid credentials" });
  } catch (error) {
    return res.status(500).json({ message: "Somthing went wrong." });
  }
}

export async function getUser(req, res) {
  try {
    const token = req.headers.authorization;

    const jwtToken = token?.split("Bearer ")[1];

    const { userId } = await decode(jwtToken);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(500).json({ message: "Get User Failed" });
    }
    return res.status(200).json({ user: { name: user.name, email: user.email, userType: user.userType } });
  } catch (error) {
    return res.status(500).json({ message: "Get User Failed" });
  }
}

export async function updateUserByEmployee(req, res) {
  try {
    const token = req.headers.authorization;

    const jwtToken = token?.split("Bearer ")[1];

    const { userId } = await decode(jwtToken);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(500).json({ message: "failed to update user" });
    }
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(500).json({ message: "fill all credentials" });
    }

    user.name = name;
    user.password = password;
    await user.save();

    return res.status(200).json({ user: { name: user.name, email: user.email, userType: user.userType } });
  } catch (error) {
    return res.status(500).json({ message: "failed to update user" });
  }
}

export async function register(req, res) {
  try {
    const { name, email, password, cPassword, userType } = req.body;

    if (!name || !email || !password || !cPassword || !userType) {
      return res.status(400).json({ message: "Please fill all credentials" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password !== cPassword) {
      return res.status(400).json({ message: "Confirm Password not matched" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const isAdmin = userType === "admin";

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      userType,
      IsAdmin: isAdmin,
    });

    return res.status(201).json({
      user: { name: newUser.name, email: newUser.email, userType: newUser.userType },
      message: "Registration successful",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Registration failed" });
  }
}

export async function getUserBYId(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(500).json({ message: "user not found" });
    }
    return res.status(200).json({ user: { name: user.name, email: user.email, userType: user.userType } });
  } catch (error) {
    return res.status(500).json({ message: "user not found" });
  }
}
export async function updateUserByAdmin(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(500).json({ message: "user not found" });
    }
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(500).json({ message: "fill all credentials" });
    }
    user.name = name;
    user.password = password;
    await user.save();
    return res.status(200).json({ user: { name: user.name, email: user.email, userType: user.userType } });
  } catch (error) {
    return res.status(500).json({ message: "failed to update user" });
  }
}
export async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(500).json({ message: "user not found" });
    }
    return res.status(200).json({ message: "user deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Error in deleting user" });
  }
}

export async function getUsers(req, res) {
  try {
    const { limit, skip } = req.query;

    let usersQuery = {};

    // Create the initial query
    let query = User.find(usersQuery);

    // Count total documents before applying limit and skip
    let totalCount = await User.countDocuments(usersQuery);

    // Apply limit and skip if provided
    if (limit) {
      const parsedLimit = parseInt(limit, 10);
      query = query.limit(parsedLimit);
    }

    if (skip) {
      const parsedSkip = parseInt(skip, 10);
      query = query.skip(parsedSkip);
    }

    // Execute the query
    const users = await query.exec();

    // Format the data to match the desired structure
    const formattedUsers = users.map((user, index) => {
      const userSerialNo = (skip ? parseInt(skip, 10) : 0) + index + 1;

      return {
        _id: user._id,
        serial_no: userSerialNo,
        name: user.name,
        email: user.email,
        userType: user.userType,
        isAdmin: user.IsAdmin,
      };
    });

    // Send the response
    res.status(200).json({
      message: "Users successfully fetched",
      total: totalCount,
      limit: limit ? parseInt(limit, 10) : totalCount,
      skip: skip ? parseInt(skip, 10) : 0,
      data: formattedUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}
