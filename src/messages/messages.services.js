const messagesControllers = require("./messages.controllers");

const getAllMessages = (req, res) => {
  messagesControllers
    .getAllMessages()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const getMessageById = (req, res) => {
  const id = req.params.id;

  messagesControllers
    .getMessageById(id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const createMessage = (req, res) => {
  const userId = req.user.id;
  const { message, conversationId } = req.body;

  if (message && conversationId) {
    messagesControllers
      .createMessage({
        message,
        conversationId,
        userId,
      })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        message: "string",
        conversationId: "UUID",
      },
    });
  }
};

const deleteMessage = (req, res) => {
  const id = req.params.id;

  messagesControllers
    .deleteMessage(id)
    .then((response) => {
      if (response) {
        res.status(204).json();
      } else {
        res.status(404).json({
          message: "Invalid ID",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage,
};
