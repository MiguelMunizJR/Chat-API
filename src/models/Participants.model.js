const db = require("../utils/database");
const Conversation = require("./Conversation.model");
const Users = require("./Users.model");
const datatypes = require("sequelize").DataTypes;

const participants = db.define("participants", {
  id: {
    primaryKey: true,
    type: datatypes.UUID,
    allowNull: false,
  },
  conversationId: {
    type: datatypes.UUID,
    references: {
      key: "id",
      model: Conversation,
    },
  },
  userId: {
    type: datatypes.UUID,
    references: {
      key: "id",
      model: Users,
    },
  },
});

module.exports = participants;
