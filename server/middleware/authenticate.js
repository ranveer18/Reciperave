"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticate = void 0;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User_1 = __importDefault(require("../models/User"));
const Authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.jwtToken;
        // console.log(req.cookies);
        // console.log(token);
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = yield User_1.default.findOne({
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
    }
    catch (err) {
        res.status(401).send("Unauthorized:no token provided");
    }
});
exports.Authenticate = Authenticate;
