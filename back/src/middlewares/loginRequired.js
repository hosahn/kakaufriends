import * as status from "../utils/status.js";
export default function loginRequired(req, res, next) {
  if (!req.user) {
    throw new Error("Please Log In First", status.STATUS_401_UNAUTHORIZED);
  }
  next();
}
