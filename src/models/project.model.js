const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  technologies: [String],
  published: String,
  timeRead: String,
  urlVideo: String,
  videoDescription: String,
  mainFeatures: [String],
  mainTechnologies: [String],
  slug: String,
  code: String,
  codeTitle: String,

  projectSection: [
    {
      titleSection: String,
      projectDescription: String,
      content: String,
    },
  ],
});

module.exports = mongoose.model("project", ProjectSchema);
