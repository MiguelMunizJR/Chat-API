const db = require("../utils/database");
const Users = require("./Users.model");
const datatypes = require("sequelize").DataTypes;

const Conversation = db.define("conversations", {
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
    field: "image_url",
  },
  createdBy: {
    type: datatypes.UUID,
    field: "created_by",
    // references: {
    //   key: "id",
    //   model: Users,
    // },
  },
});

module.exports = Conversation;
