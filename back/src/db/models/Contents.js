import { ContentModel } from "../schemas/contents.js";
import { Family } from "./Family.js";
import axios from "axios";
class Contents {
  static async getRandomContents() {
    return await ContentModel.aggregate([{ $sample: { size: 6 } }]);
  }
  static async findContents({ title }) {
    const result = await ContentModel.findOne({
      title: title,
    });
    let query = result.genres.substring(1);
    const myArray = query.split(",");
    return myArray[0];
  }
  static async getContents({ nickname, seq }) {
    const userInfo = await Family.findKid({ nickname, seq });
    let infos = [
      userInfo.forbidden1,
      userInfo.forbidden2,
      userInfo.forbidden3,
      userInfo.pref1,
      userInfo.pref2,
    ];
    const result = await axios.post("http://127.0.0.1:5000", {
      forb1: infos[0],
      forb2: infos[1],
      forb3: infos[2],
      pref1: infos[3],
      pref2: infos[4],
    });
    console.log(result.data, "AAAA");
    return result.data;
  }
  static async getMovieInfos({ infoList }) {
    let result = [6];
    let numList = [1, 2, 3, 5, 6, 7];
    for (let i = 0; i < 6; i++) {
      result[i] = await ContentModel.find({
        title: infoList[[numList[i]]],
      });
    }
    return result;
  }
}
export { Contents };
