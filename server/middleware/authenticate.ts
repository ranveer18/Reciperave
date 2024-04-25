const jwt = require("jsonwebtoken");
require("dotenv").config();
import userRegister from "../models/User"

export const Authenticate = async (req, res, next) => {
    
    try {
    const token = req.cookies.jwtToken;
    // console.log(req.cookies);
    
    // console.log(token);
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await userRegister.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User Not Found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized:no token provided");
  }
};

