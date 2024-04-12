import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      min: 6,
    },
    userType: {
      type: String,
      enum: ["employee", "guest","admin"],
      required: true,
    },
    IsAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  // Only hash the password if it's being created or if it has been modified
  if (this.isNew || this.isModified('password')) {
    this.password =  bcrypt.hash(this.password, 10);
  }
  next();
});

export const User = mongoose.model("user", UserSchema);