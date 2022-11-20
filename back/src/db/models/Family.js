// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class Family {
  static async setPref1({ seq, nickname, pref }) {
    const result = await prisma.member.updateMany({
      where: {
        family_id: seq,
        nickname: nickname,
      },
      data: {
        pref1: pref,
      },
    });
    return result;
  }

  static async addHistory({ nickname, seq, genre }) {
    const result = await prisma.history.create({
      data: {
        nickname: nickname,
        family_id: seq,
        genre: genre,
      },
    });
  }
  static async findKid({ seq, nickname }) {
    const result = await prisma.member.findFirst({
      where: {
        family_id: seq,
        nickname: nickname,
      },
    });
    return result;
  }
  static async setPref2({ seq, nickname, pref }) {
    const result = await prisma.member.updateMany({
      where: {
        family_id: seq,
        nickname: nickname,
      },
      data: {
        pref2: pref,
      },
    });
    return result;
  }
  static async setPref3({ seq, nickname, pref }) {
    const result = await prisma.member.updateMany({
      where: {
        family_id: seq,
        nickname: nickname,
      },
      data: {
        pref3: pref,
      },
    });
    return result;
  }

  static async setPref4({ seq, nickname, pref }) {
    const result = await prisma.member.updateMany({
      where: {
        family_id: seq,
        nickname: nickname,
      },
      data: {
        pref4: pref,
      },
    });
    return result;
  }

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
