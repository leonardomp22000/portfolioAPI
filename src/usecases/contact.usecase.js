const nodemailer = require("nodemailer");
const createError = require("http-errors");

async function sendContactEmail({ name, email, message }) {
  if (!name || !email || !message) {
    throw createError(400, "Todos los campos son obligatorios");
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USERSMTP,
      pass: process.env.PASSWORDSMTP,
    },
  });

  const mailOptions = {
    from: process.env.USERSMTP,
    to: "leonardomeza.dev@gmail.com",
    subject: "Nuevo mensaje de contacto",
    html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendContactEmail };
