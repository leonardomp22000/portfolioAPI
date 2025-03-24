const express = require("express");
const app = express();
const cors = require("cors");
const contactRouter = require("../src/routes/contact.router");
const projectRouter = require("../src/routes/project.router");
// Middlewares
app.use(express.json());
app.use(cors());

// Routers
app.use("/contact", contactRouter);
app.use("/projects", projectRouter);

app.get("/", (req, res) => {
  res.json({
    message: "API portfolio",
  });
});

module.exports = app;
