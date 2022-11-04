//? Dependencies
const uuid = require("uuid");
const Conversation = require("../models/Conversation.model");
const Users = require("../models/users.model");
const hashPass = require("../utils/crypto").hashPass;

const getAllUsers = async () => {
  const data = await Users.findAll({
    include: {
      model: Conversation,
      as: "conversations",
    },
  });
  return data;
};

const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createUser = async (data) => {
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPass(data.password),
    profileImage: data.profileImage,
    phone: data.phone,
  });
  return newUser;
};

const updateUser = async (id, data) => {
  const result = await Users.update(data, {
    where: {
      id,
    },
  });
  return result;
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id,
    },
  });
  return data;
};

//?

const getUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email,
    },
  });
  return data;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
