const db = require("../utils/database");
const users = require("./Users.model");
const datatypes = require("sequelize").DataTypes;

const conversation = db.define("conversations", {
  id: {
    primaryKey: true,
    type: datatypes.UUID,
    allowNull: false,
  },
  title: {
    type: datatypes.STRING(30),
    allowNull: false,
  },
  imageUrl: {
    type: datatypes.STRING,
  },
  createdBy: {
    type: datatypes.UUID,
    references: {
      key: "id",
      model: users,
    },
  },
});

module.exports = conversation;
