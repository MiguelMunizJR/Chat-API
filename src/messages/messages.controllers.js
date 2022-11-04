const Messages = require("../models/Message.model");
const uuid = require("uuid");
const Users = require("../models/Users.model");

const getAllMessages = async () => {
  const data = await Messages.findAll();
  return data;
};

const getMessageById = async (id) => {
  const data = await Messages.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createMessage = async (data) => {
  const newMessage = await Messages.create({
    id: uuid.v4(),
    senderId: data.userId,
    conversationId: data.id,
    message: data.message,
  });
  return newMessage;
};

const deleteMessage = async (id) => {
  const data = Messages.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage,
};
