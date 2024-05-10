"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt.js");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product, {
        foreignKey: {
          name: "AuthorId",
        },
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email is already registered. Please input another email",
        },
        validate: {
          notNull: {
            msg: "Please input email!",
          },
          notEmpty: {
            msg: "Please input email!",
          },
          isEmail: {
            msg: "Email must be in email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input password!",
          },
          notEmpty: {
            msg: "Please input password!",
          },
          len: {
            args: [5, 20],
            msg: "Password must contain at least 5 characters",
          },
        },
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input your name!",
          },
          notEmpty: {
            msg: "Please input your name!",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          user.password = hashPassword(user.password);
        },
      },
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
