const express = require("express");
const router = express.Router();
const projectUsecases = require("../usecases/project.usecase");
router.get("/:slug", async (request, response) => {
  try {
    const { slug } = request.params;
    const project = await projectUsecases.getProjectBySlug(slug);
    response.json(project);
  } catch (error) {
    response.status(error.status || 500).json({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const projects = await projectUsecases.findAll();
    response.json(projects);
  } catch (error) {
    response.status(error.status || 500).json({ message: error.message });
  }
});
module.exports = router;
