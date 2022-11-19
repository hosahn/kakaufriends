import { ContentModel } from "../schemas/contents.js";

class Contents {
  static async getRandomContents() {
    return await ContentModel.aggregate([{ $sample: { size: 6 } }]);
  }
}
export { Contents };
//로그인에 사용하는 User 클래스
