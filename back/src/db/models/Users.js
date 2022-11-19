// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
class Users {
  static async userInfo(userId) {
    const user = await prisma.user.findFirst({
      where: {
        seq: userId,
      },
      select: {
        email: true,
      },
    });
    return user;
  }
  static async createLocal({ social, pw, email }) {
    const isUser = await prisma.user.findFirst({
      where: {
        email: email,
        social: social,
      },
    });
    if (isUser) {
      return null;
    } else {
      const hashedPW = await bcrypt.hash(pw, 10);
      const createdUser = await prisma.user.create({
        data: {
          social: social,
          email: email,
          pw: hashedPW,
        },
      });
      return createdUser;
    }
  }
  static async findUserLocal({ email, social, pw }) {
    if (pw) {
      const foundUser = await prisma.user.findFirst({
        where: {
          AND: { email: email, social: social },
        },
      });
      if (foundUser) {
        const hashed = foundUser.pw;
        const comparedResult = await bcrypt.compare(pw, hashed);
        if (comparedResult) {
          return foundUser;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export { Users };
