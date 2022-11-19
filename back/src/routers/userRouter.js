import { Router } from "express";
import passport from "passport";
import { Users } from "../db/index.js";
import "../config/env.js";
import loginRequired from "../middlewares/loginRequired.js";
import UserService from "../services/userService.js";
import FamliyService from "../services/familyService.js";

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
  const { email, pw } = req.body;
  const social = "local";
  const result = await Users.createLocal({ email, pw, social });
  const seq = result.seq;
  const createParent = await FamliyService.addParent({ pw, seq });
  console.log(createParent);
  if (result == null) {
    res.send(false);
  } else {
    res.send(true);
  }
});

userRouter.post("/newmember", async (req, res) => {
  const nickname = req.body.nickname;
  const seq = req.user.seq;
  const addedUser = await FamliyService.addNewMember({ nickname, seq });
  res.send(addedUser);
});

userRouter.get("/info", loginRequired, async (req, res) => {
  const userId = req.user.seq;
  const user = await UserService.userInfo(userId);
  res.status(200).send(user);
});

export { userRouter };
