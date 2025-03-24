require("dotenv").config();
const server = require("./src/server");
const db = require("./src/lib/db");
const port = process.env.PORT || 8080;

db.connect()
  .then(() => {
    console.log("Conexion exitosa");
    server.listen(port, () => {
      console.log(`Server is running at  http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Error de conexion");
  });
