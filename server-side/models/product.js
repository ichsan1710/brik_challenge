"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: {
          name: "AuthorId",
        },
      });
      Product.belongsTo(models.Category, {
        foreignKey: {
          name: "CategoryId",
        },
      });
    }
  }
  Product.init(
    {
      AuthorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Author ID can't be null",
          },
          notEmpty: {
            msg: "Author ID can't be empty",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Category ID can't be null",
          },
          notEmpty: {
            msg: "Category ID can't be empty",
          },
        },
      },
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input category name!",
          },
          notEmpty: {
            msg: "Please input category name!",
          },
        },
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input SKU!",
          },
          notEmpty: {
            msg: "Please input SKU!",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input product name!",
          },
          notEmpty: {
            msg: "Please input product name!",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input description!",
          },
          notEmpty: {
            msg: "Please input description!",
          },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input weight!",
          },
          notEmpty: {
            msg: "Please input weight!",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input image!",
          },
          notEmpty: {
            msg: "Please input image!",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please input price!",
          },
          notEmpty: {
            msg: "Please input price!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    },
  );
  return Product;
};
