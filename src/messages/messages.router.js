const router = require("express").Router();
const messagesServices = require("./messages.services");
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

//* /api/v1/conversations/messages
router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    messagesServices.getAllMessages
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    messagesServices.createMessage
  );

//* /api/v1/conversations/messages/:message_id
router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    messagesServices.getMessageById
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    messagesServices.deleteMessage
  );
module.exports = router;
