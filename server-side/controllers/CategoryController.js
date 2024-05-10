const { Category } = require("../models/index.js");

class CategoryController {
  static async createCategory(req, res, next) {
    try {
      const createdCategory = await Category.create(req.body);

      res.status(201).json({ createdCategory });
    } catch (error) {
      next(error);
    }
  }

  static async getAllCategories(req, res, next) {
    try {
      const categories = await Category.findAll();

      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  static async updateCategory(req, res, next) {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);

      if (!category) {
        throw { name: "NotFound" };
      }

      const editedCategory = await category.update(req.body);

      res.status(200).json({ editedCategory });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);

      if (!category) {
        throw { name: "NotFound" };
      }

      await category.destroy();

      res
        .status(200)
        .json({ message: `Category ${category.name} has been deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
