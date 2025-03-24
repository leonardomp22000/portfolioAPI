const Project = require("../models/project.model");
const createError = require("http-errors");

async function getProjectBySlug(slug) {
  if (!slug || typeof slug !== "string") {
    throw createError(400, "Invalid slug parameter");
  }
  const project = await Project.findOne({ slug: slug });
  if (!project) {
    throw createError(404, "Project not found");
  }
  return project;
}

async function findAll() {
  return await Project.find({}, "slug type title src");
}

module.exports = { getProjectBySlug, findAll };
