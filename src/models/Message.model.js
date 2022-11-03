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
    references: {
      key: "id",
      model: Users,
    },
    field: "sender_id",
  },
  conversationId: {
    type: datatypes.UUID,
    references: {
      key: "id",
      model: Conversation,
    },
    field: "conversation_id",
  },
  message: {
    type: datatypes.STRING,
  },
});

module.exports = Messages;
