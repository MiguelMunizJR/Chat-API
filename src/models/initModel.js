const Conversation = require("./Conversation.model");
const Message = require("./message.model");
const Participants = require("./participants.model");
const Users = require("./Users.model");

const initModels = () => {
  //TODO 1:M:1
  //* 1:M
  Users.hasMany(Participants);
  Participants.belongsTo(Users);

  //* 1:M
  Conversation.hasMany(Participants);
  Participants.belongsTo(Conversation);
  // TODO // TODO // TODO //

  Conversation.hasMany(Users);
  Users.belongsTo(Conversation);

  // TODO 1:M:1
  //* 1:M
  Users.hasMany(Message);
  Message.belongsTo(Users);

  //* 1:M
  Conversation.hasMany(Message);
  Message.belongsTo(Conversation);
  // TODO // TODO // TODO //
};

module.exports = initModels;
