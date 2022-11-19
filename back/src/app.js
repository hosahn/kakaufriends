import express from "express";
import cors from "cors";
import "./config/env.js";
import helmet from "helmet";
import passport from "passport";
import { userRouter } from "./routers/userRouter.js";
import session from "express-session";
import { default as mysqlSession } from "express-mysql-session";
import mysql from "mysql";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { loginRouter } from "./routers/loginRouter.js";
import { passportStrategies } from "./passport/finalStrategy.js";
import { familyRouter } from "./routers/familyRouter.js";

process.setMaxListeners(15);
export const app = express();
const mysqlStore = mysqlSession(session);
var options = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password",
  database: "sessionstore",
};
var connection = mysql.createConnection(options);
var sessionStore = new mysqlStore(options, connection);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000000, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying — full speed until the max limit is reached
});
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5000"],
    credentials: true,
  })
);
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use(
  session({
    secret: "asdf",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    expires: new Date(Date.now() + 60 * 30),
  })
);

passportStrategies();
app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/user/family", familyRouter);
