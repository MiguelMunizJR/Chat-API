const conversationsControllers = require("./conversations.controllers");

const getAllConversations = (req, res) => {
  conversationsControllers
    .getAllConversations()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

const getConversationById = (req, res) => {
  const id = req.params.id;

  conversationsControllers
    .getConversationById(id)
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

const createConversation = (req, res) => {
  const userId = req.user.id;
  const { title, imgUrl } = req.body;

  if (title) {
    conversationsControllers
      .createConversation({
        title,
        imgUrl,
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
        title: "string",
        imgUrl: "URL",
      },
    });
  }
};

const patchConversation = (req, res) => {
  const id = req.params.id;
  const { title, imgUrl } = req.body;

  conversationsControllers
    .updateConversation(id, {
      title,
      imgUrl,
    })
    .then((response) => {
      if (response[0]) {
        res.status(200).json({
          message: `Conversation with ID: ${id}, edited succesfully`,
        });
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

const deleteConversation = (req, res) => {
  const id = req.params.id;

  conversationsControllers
    .deleteConversation(id)
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
  getAllConversations,
  getConversationById,
  createConversation,
  patchConversation,
  deleteConversation
};
