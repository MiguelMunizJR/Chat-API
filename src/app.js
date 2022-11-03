const express = require("express");
const initModels = require("./models/initModel");
const db = require("./utils/database");
const cors = require("cors");
const usersRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const conversationsRouter = require("./conversations/conversations.router");
const messagesRouter = require("./messages/messages.router");
const port = require("./config").port;

//* Inicializar proyecto
const app = express();

//* Habilitar JSON & Cors
app.use(express.json());
app.use(cors());

//* Rutas
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/conversations", conversationsRouter);
app.use("/api/v1/conversations/messages", messagesRouter);

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

db.sync({force:true})
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
