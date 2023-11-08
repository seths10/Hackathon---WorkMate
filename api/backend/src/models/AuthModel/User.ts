import { Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";

interface User {
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  token: String;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface UserDocument extends User, Document {}

// user schema
const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "Enter your firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Enter your lastname"],
    },
    email: {
      type: String,
      required: [true,"Enter your work email"],
      unique: true,
      min: [20, "Invalid number of characters"]
    },
    password: {
      type: String,
      required: true,
      min: [8, "Password should be at least 8 characters"]
    },
    token: String,
  },
  { timestamps: true }
);

// password comparison check
userSchema.methods.comparePassword = function (candidatePassword: string) {
  const user = this;
  return new Promise((resolve, reject) =>
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) return reject(err);
      resolve(isMatch);
    })
  );
};

// middleware
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    // password hashing
    bcrypt.hash(user.password!, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

export default model<UserDocument>("User", userSchema);
