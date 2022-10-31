const Conversation = require("./Conversation.model");
const Message = require("./message.model");
const Participants = require("./participants.model");
const Users = require("./Users.model");

const initModels = () => {
  //! Users
  //? Un usuario tiene muchas conversaciones
  Users.hasMany(Conversation);
  //? Un usuario envia muchos mensajes
  Users.hasMany(Message);

  //! Messages
  //? Un mensaje pertenece a un usuario
  Message.belongsTo(Users);

  //! Participants
  //? Un participante tiene un solo usuario
  Participants.belongsTo(Users);

  //! Conversations
  //? Una conversacion tiene muchos mensajes
  Conversation.hasMany(Message);
  //? Una conversacion tiene muchos participantes
  Conversation.hasMany(Participants);
};

module.exports = initModels;
