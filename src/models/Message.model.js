const db = require("../utils/database");
const conversation = require("./Conversation.model");
const users = require("./Users.model");
const datatypes = require("sequelize").DataTypes;

const message = db.define("messages", {
  id: {
    primaryKey: true,
    type: datatypes.UUID,
    allowNull: false,
  },
  senderId: {
    type: datatypes.UUID,
    references: {
      key: "id",
      model: users,
    },
    field: "sender_id",
  },
  conversationId: {
    type: datatypes.UUID,
    references: {
      key: "id",
      model: conversation,
    },
    field: "conversation_id",
  },
  message: {
    type: datatypes.STRING,
  },
});

module.exports = message;
