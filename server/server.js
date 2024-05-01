"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const recipeRoutes_1 = __importDefault(require("./routes/recipeRoutes"));
const authenticate_1 = require("./middleware/authenticate");
const authRouteController_1 = require("./controllers/authRouteController");
const connectDB = require("./db/conn");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(
  (0, cors_1.default)({ origin: "http://localhost:5173", credentials: true })
);
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use("/api/v1", authRoutes_1.default);
app.use("/api/v1", recipeRoutes_1.default);
app.get(
  "/api/v1/admin",
  authenticate_1.Authenticate,
  authRouteController_1.admin
);
app.get(
  "/api/v1/logout",
  authenticate_1.Authenticate,
  authRouteController_1.logout
);
const port = process.env.PORT || 5000;
const start = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield connectDB(process.env.MONGO_URL);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  });
start();
