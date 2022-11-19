//파일 구조를 위한 txt입니다!
import { Users } from "./models/Users.js";
import { Family } from "./models/Family.js";
import { Contents } from "./models/Contents.js";
import mongoose from "mongoose";

const DB_URL = "mongodb://localhost:27017/test";
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", () => console.log("Connected to MongoDB " + DB_URL));
db.on("error", (error) =>
  console.error("Failed to connect \n" + DB_URL + "\n" + error)
);

export { Users, Family, Contents };
