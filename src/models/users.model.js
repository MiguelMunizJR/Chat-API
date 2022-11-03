const db = require("../utils/database");
const datatypes = require("sequelize").DataTypes;

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: datatypes.UUID,
    allowNull: false,
  },
  firstName: {
    type: datatypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: datatypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: datatypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: datatypes.STRING,
    allowNull: false,
  },
  profileImage: {
    type: datatypes.STRING,
    field: "profile_image",
  },
  phone: {
    type: datatypes.STRING(16),
  },
});

module.exports = Users;
