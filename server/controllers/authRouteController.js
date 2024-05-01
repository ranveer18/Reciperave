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
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = exports.logout = void 0;
require("../db/conn");
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.clearCookie("jwtToken", { path: "/" });
        res.status(200).send("Logout Successfully");
    }
    catch (error) {
        console.log(error);
    }
});
exports.logout = logout;
const admin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.send(req.rootUser);
    }
    catch (error) {
        console.log(error);
    }
});
exports.admin = admin;
