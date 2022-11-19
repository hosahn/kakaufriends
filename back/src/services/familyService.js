import { Family } from "../db/index.js";
import { Contents } from "../db/index.js";

export default class FamliyService {
  static async addNewMember({ nickname, seq }) {
    const newMember = await Family.addMember({ nickname, seq });
    return newMember;
  }
  static async selectMember({ nickname, seq }) {
    const allInfos = await Family.memberInfo({ nickname, seq });
    return allInfos;
  }

  static async browseContents({ nickname, seq }) {
    var contentList = await Contents.getRandomContents();
    // try {
    //   contentList = await Family.getContents(nickname);
    // } catch (e) {
    //   contentList = await Contents.getRandomContents();
    // }
    // if (!contentList) {
    //   contentList = await Family.getRandomContents();
    // }
    return contentList;
  }
}

export { FamliyService };
