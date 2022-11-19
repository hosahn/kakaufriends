import { Router } from "express";
import loginRequired from "../middlewares/loginRequired.js";
import FamliyService from "../services/familyService.js";

const familyRouter = Router();

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
