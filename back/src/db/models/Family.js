// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class Family {
  static async memberInfo(nickname) {
    const member = await prisma.family.findFirst({
      where: {
        nickname: nickname,
      },
    });
    return member;
  }
  static async addMember(nickname) {
    const isFound = await prisma.family.findFirst({
      where: {
        nickname: nickname,
      },
    });
    if (isFound) {
      return null;
    } else {
      const member = await prisma.family.create({
        data: {
          nickname: nickname,
        },
      });
      return member;
    }
  }
}

export { Family };
