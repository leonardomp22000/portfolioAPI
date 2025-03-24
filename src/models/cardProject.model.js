import mongoose from "mongoose";

const cardProjectSchema = new mongoose.Schema({
  slug: String,
  type: String,
  title: String,
  src: String,
});

export default mongoose.models.Project ||
  mongoose.model("cardProject", cardProjectSchema);
