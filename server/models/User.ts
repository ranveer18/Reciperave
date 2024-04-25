// src/models/User.ts

import mongoose, { Schema, Document } from 'mongoose';
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  generateAuthToken: () => Promise<string>;

}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  password: { type: String, required: true },
   verificationToken: { type: String },
   tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});
UserSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};
export default mongoose.model<IUser>('User', UserSchema);
