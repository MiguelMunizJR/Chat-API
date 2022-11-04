const router = require("express").Router();

const passport = require("passport");
require("../middlewares/auth.middleware")(passport);



module.exports = router;
