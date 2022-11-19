import { Router } from "express";
import loginRequired from "../middlewares/loginRequired.js";
import passport from "passport";
import FamliyService from "../services/familyService.js";

const familyRouter = Router();

familyRouter.get("/", async (req, res) => {
  const seq = req.user.seq;
  const auth = 1;
  const foundUser = await FamliyService.getAllProfiles({ seq, auth });
  res.send(foundUser);
});

familyRouter.get("/:nickname", loginRequired, async (req, res) => {
  const nickname = req.params.nickname;
  const seq = req.user.seq;
  const result = await FamliyService.browseContents({ nickname, seq });
  res.send(result);
});

familyRouter.post("/parents/forbidden", async (req, res) => {
  const factor1 = req.body.one;
  const factor2 = req.body.two;
  const factor3 = req.body.three;
  console.log(factor1, factor2, factor3);
  const seq = req.user.seq;
  const result = await FamliyService.setForbidden({
    factor1,
    factor2,
    factor3,
    seq,
  });
  res.send(result);
});

familyRouter.get("/parents/:password", loginRequired, async (req, res) => {
  const nickname = "parents";
  const password = req.params.password;
  const seq = req.user.seq;
  const result = await FamliyService.browseParentsPage({
    nickname,
    seq,
    password,
  });
  res.send(result);
});

export { familyRouter };
