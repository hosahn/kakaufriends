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

export { familyRouter };
