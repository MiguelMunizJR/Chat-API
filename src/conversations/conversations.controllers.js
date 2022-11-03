const Conversations = require("../models/Conversation.model");
const uuid = require("uuid");

const getAllConversations = async () => {
  const data = await Conversations.findAll();
  return data;
};

const getConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createConversation = async (data) => {
  const newConversation = await Conversations.create({
    id: uuid.v4,
    title: data.title,
    imageUrl: data.imageUrl,
    createdBy: data.userId,
  });
  return newConversation;
};

const updateConversation = async (id, data) => {
  const response = await Conversations.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const deleteConversation = async (id) => {
  const data = await Conversations.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversation,
  deleteConversation
};
