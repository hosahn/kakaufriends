import { Users } from "../db/index.js";

export default class UserService {
  static async userInfo(userId) {
    const user = await Users.userInfo(userId);
    return user;
  }
}

export { UserService };
