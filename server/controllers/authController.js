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
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crypto = require("crypto");
const User_1 = __importDefault(require("../models/User"));
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const userExit = yield User_1.default.findOne({
            email: email,
        });
        if (userExit) {
            return res.status(422).json({ error: "Email already exit" });
        }
        else {
            const verificationToken = crypto.randomBytes(40).toString("hex");
            const user = new User_1.default({ name, email, password, verificationToken });
            yield user.save();
            res.status(201).json({ message: 'User registered successfully' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Enter valid data" });
        }
        const userLogin = yield User_1.default.findOne({ email: email });
        if (userLogin) {
            const isMatch = yield bcryptjs_1.default.compare(password, userLogin.password);
            const token = yield userLogin.generateAuthToken();
            res.cookie('jwtToken', token, { httpOnly: false, maxAge: 3600000 });
            if (!isMatch) {
                res.status(400).json({ error: "Invalid creditial" });
            }
            else {
                res.status(201).json({ message: "Login successfully" });
            }
        }
        else {
            res.status(400).json({ error: "Invalid creditial" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.login = login;
