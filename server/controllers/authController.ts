import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const crypto = require("crypto");
import User, { IUser } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const register = async (req: Request, res: any) => {
  try {
    const { name, email, password } = req.body;
    const userExit = await User.findOne({
      email: email,
    });
    if (userExit) {
      return res.status(422).json({ error: "Email already exit" });
    }
    else {
      const verificationToken = crypto.randomBytes(40).toString("hex");
      const user = new User({ name, email, password, verificationToken });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const login = async (req, res) => {
  try {
   const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Enter valid data" });
  }
    const userLogin = await User.findOne({ email: email });
    
    if (userLogin) {
    const isMatch = await bcrypt.compare(password, userLogin.password);
    const token = await userLogin.generateAuthToken();
    res.cookie('jwtToken', token, {httpOnly: false, maxAge: 3600000 });
  
  if (!isMatch) {
      res.status(400).json({ error: "Invalid creditial" });
    } else {
      res.status(201).json({ message: "Login successfully" });
    }
  }
else{
    res.status(400).json({ error: "Invalid creditial" });
  }  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


