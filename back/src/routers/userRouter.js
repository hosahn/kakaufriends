import { Router } from "express";
import passport from "passport";
import { Users } from "../db/index.js";
import "../config/env.js";
import loginRequired from "../middlewares/loginRequired.js";

const userRouter = Router();
userRouter.get("/localcomplete", (req, res) => {
  passport.authenticate("local");
  if (req.isAuthenticated()) {
    res
      .cookie("sessionId", req.sessionID, { maxAge: 900000, httpOnly: true })
      .redirect("/user/main");
  } else {
    res.redirect("/user/failed");
  }
});

userRouter.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout((err) => {
      res.send(true);
    });
  } else {
    res.redirect("/user/failed");
  }
});

userRouter.get("/main", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(true);
  } else {
    res.send(false);
  }
});

userRouter.get("/failed", (req, res) => {
  res.send(false);
});

userRouter.post("/signup", async (req, res) => {
  const { email, pw, name } = req.body;
  const social = "local";
  const result = await Users.createLocal({ email, pw, social, name });
  if (result == null) {
    res.send(false);
  } else {
    res.send(true);
  }
});

export { userRouter };
