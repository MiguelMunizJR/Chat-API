const express = require("express");
const initModels = require("./models/initModel");
const db = require("./utils/database");
const port = require("./config").port;

const app = express();

//* Habilitar JSON
app.use(express.json());

//* Rutas

//* Init models
initModels();

//* Sincronizacion y autenticacion
db.authenticate()
  .then(() => {
    console.log("Database Authenticated!");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database Synced!");
  })
  .catch((err) => {
    console.log(err);
  });

//* GET Ruta principal
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Principal route!",
  });
});

app.listen(port, () => {
  console.log(`Server online at port ${port}`);
});
