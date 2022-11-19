// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class Family {
  static async memberInfo(nickname) {
    const member = await prisma.member.findFirst({
      where: {
        nickname: nickname,
      },
    });
    return member;
  }
  static async addMember({ nickname, seq }) {
    const isFound = await prisma.member.findFirst({
      where: {
        nickname: nickname,
        family_id: seq,
      },
    });
    if (isFound) {
      return null;
    } else {
      const member = await prisma.member.create({
        data: {
          family_id: seq,
          nickname: nickname,
        },
      });
      return member;
    }
  }
}

export { Family };
