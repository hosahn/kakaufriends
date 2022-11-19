import { Family } from "../db/index.js";

export default class FamliyService {
  static async addNewMember(nickname) {
    const newMember = await Family.addMember(nickname);
    return newMember;
  }
  static async selectMember(nickname) {
    const allInfos = await Family.memberInfo(nickname);
    return allInfos;
  }
}

export { FamliyService };
