// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class Family {
  static async findAllKids({ seq, auth }) {
    const result = await prisma.member.findMany({
      where: {
        family_id: seq,
        auth: auth,
      },
    });
    return result;
  }
  static async setPreference1({ factor1 }) {
    const result = await prisma.member.update({});
  }
  static async setForbiddens({ factor1, factor2, factor3, seq }) {
    console.log(seq);
    const member = await prisma.member.updateMany({
      where: {
        family_id: seq,
      },
      data: {
        forbidden1: factor1,
        forbidden2: factor2,
        forbidden3: factor3,
      },
    });
    console.log(member);
    return member;
  }
  static async memberInfo(nickname) {
    const member = await prisma.member.findFirst({
      where: {
        nickname: nickname,
      },
    });
    return member;
  }

  static async parentsInfo({ nickname, pw, seq }) {
    const member = await prisma.member.findFirst({
      where: {
        nickname: nickname,
        pw: pw,
        family_id: seq,
      },
    });
    return member;
  }

  static async addParent({ pw, seq }) {
    const parent = await prisma.member.create({
      data: {
        nickname: "parent",
        family_id: seq,
        pw: pw,
      },
    });
    return parent;
  }

  static async addMember({ nickname, seq }) {
    const isFound = await prisma.member.findFirst({
      where: {
        auth: 0,
        nickname: nickname,
        family_id: seq,
      },
    });
    const parent = await prisma.member.findFirst({
      where: {
        nickname: "parent",
        family_id: seq,
      },
    });

    if (isFound) {
      return null;
    } else {
      const member = await prisma.member.create({
        data: {
          auth: 1,
          family_id: seq,
          nickname: nickname,
          forbidden1: parent.forbidden1,
          forbidden2: parent.forbidden2,
          forbidden3: parent.forbidden3,
        },
      });
      return member;
    }
  }
}

export { Family };