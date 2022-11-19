import pkg from "mongoose";
const { Schema, model } = pkg;

const ContentSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    description: {
      type: String,
    },
    release_year: {
      type: String,
    },
    age_certification: {
      type: String,
    },
    runtime: {
      type: String,
    },
    genres: {
      type: String,
    },
    production_countries: {
      type: String,
    },
  },

  { collection: "contents" }
);

const ContentModel = model("Content", ContentSchema);
export { ContentModel };

//UserModel (DB연결완료)
