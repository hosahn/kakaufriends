import { Router } from "express";
import loginRequired from "../middlewares/loginRequired.js";
import passport from "passport";
import FamliyService from "../services/familyService.js";
import { Contents, Family } from "../db/index.js";

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
  const movieInfos = await Contents.getMovieInfos({ infoList: result });
  console.log(movieInfos);
  res.send(movieInfos);
});

familyRouter.post("/:nickname", loginRequired, async (req, res) => {
  const nickname = req.params.nickname;
  const seq = req.user.seq;
  const title = req.body.title;
  const result = await Contents.findContent({ title });
  const saved = await Family.addHistory({ nickname, seq, genre: result });
});

familyRouter.get("/info/:nickname", loginRequired, async (req, res) => {
  const nickname = req.params.nickname;
  const seq = req.user.seq;
  const result = await Family.findKid({ nickname, seq });
  res.send(result);
});

familyRouter.post("/parents/forbidden", async (req, res) => {
  const factor1 = req.body.one;
  const factor2 = req.body.two;
  const factor3 = req.body.three;
  const seq = req.user.seq;
  const result = await FamliyService.setForbidden({
    factor1,
    factor2,
    factor3,
    seq,
  });
  res.send(result);
});

familyRouter.post("/:nickname/setup1", async (req, res) => {
  const nickname = req.params.nickname;
  const seq = req.user.seq;
  const pref = req.body.pref;
  const result = await Family.setPref1({ seq, pref, nickname });
  res.send(result);
});

familyRouter.post("/:nickname/setup2", async (req, res) => {
  const nickname = req.params.nickname;
  const seq = req.user.seq;
  const pref = req.body.pref;
  const result = await Family.setPref2({ seq, pref, nickname });
  res.send(result);
});

familyRouter.post("/:nickname/setup3", async (req, res) => {
  const nickname = req.params.nickname;
  const seq = req.user.seq;
  const pref = req.body.pref;
  const result = await Family.setPref3({ seq, pref, nickname });
  res.send(result);
});

familyRouter.post("/:nickname/setup4", async (req, res) => {
  const nickname = req.params.nickname;
  const seq = req.user.seq;
  const pref = req.body.pref;
  const result = await Family.setPref4({ seq, pref, nickname });
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
