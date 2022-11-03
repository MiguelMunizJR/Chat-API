const router = require("express").Router();
const conversationsServices = require("./conversations.service");
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

//* /api/v1/conversations
router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.getAllConversations
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.createConversation
  );

//* /api/v1/conversations/:conversation_id
router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.getConversationById
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.patchConversation
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.deleteConversation
  );

//* /api/v1/conversations/:conversation_id/messages

module.exports = router;
