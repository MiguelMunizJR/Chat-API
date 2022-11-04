const db = require("../utils/database");
const Conversation = require("./Conversation.model");
const Users = require("./Users.model");
const datatypes = require("sequelize").DataTypes;

const Messages = db.define("messages", {
  id: {
    primaryKey: true,
    type: datatypes.UUID,
    allowNull: false,
  },
  senderId: {
    type: datatypes.UUID,
    field: "sender_id",
    references: {
      key: "id",
      model: Users,
    },
  },
  conversationId: {
    type: datatypes.UUID,
    field: "conversation_id",
    references: {
      key: "id",
      model: Conversation,
    },
  },
  message: {
    type: datatypes.STRING,
  },
});

module.exports = Messages;
