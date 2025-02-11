const express = require("express");
const router = express.Router();
const contactUsecases = require("../usecases/contact.usecase");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await contactUsecases.sendContactEmail({ name, email, message });
    res.json({
      success: true,
      data: "Email send correctly",
    });
  } catch (error) {
    res.status(error.status || 500);
    res.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
