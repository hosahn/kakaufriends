import { Family } from "../db/index.js";
import { Contents } from "../db/index.js";

export default class FamliyService {
  static async addParent({ pw, seq }) {
    const newParent = await Family.addParent({ pw, seq });
    return newParent;
  }
  static async addNewMember({ nickname, seq }) {
    const newMember = await Family.addMember({ nickname, seq });
    return newMember;
  }
  static async selectMember({ nickname, seq }) {
    const allInfos = await Family.memberInfo({ nickname, seq });
    return allInfos;
  }

  static async setForbidden({ factor1, factor2, factor3, seq }) {
    const setComplete = await Family.setForbiddens({
      factor1,
      factor2,
      factor3,
      seq,
    });
    return setComplete;
  }
  static async browseParentsPage({ nickname, seq, password }) {
    const parentInfos = await Family.parentsInfo({ nickname, seq, password });
    return parentInfos;
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
