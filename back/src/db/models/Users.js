// import { BasicModel } from "../index.js";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
class Users {
  static async createLocal({ social, pw, email, name }) {
    const isUser = await prisma.user.findFirst({
      where: {
        name: name,
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
          name: name,
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
