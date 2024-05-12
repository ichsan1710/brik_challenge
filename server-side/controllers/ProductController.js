const { Product } = require("../models/index.js");

class ProductController {
  static async createProduct(req, res, next) {
    try {
      req.body.AuthorId = req.user.id;
      const product = await Product.create(req.body);

      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async getAllProducts(req, res, next) {
    try {
      const { page } = req.query;
      const paramsQuerySql = {
        where: {},
      };

      let limit = 10;
      let pageNumber = 1;

      if (page) {
        if (page.size) {
          limit = +page.size;
          paramsQuerySql.limit = limit;
        }
        if (page.number) {
          pageNumber = +page.number;
          paramsQuerySql.offset = limit * (pageNumber - 1);
          paramsQuerySql.limit = limit;
        }
      } else {
        paramsQuerySql.limit = limit;
        paramsQuerySql.offset = pageNumber - 1;
      }

      const { count, rows } = await Product.findAndCountAll(paramsQuerySql);

      res.status(200).json({
        page: pageNumber,
        data: rows,
        totalData: count,
        totalPage: Math.ceil(count / limit),
        dataPerPage: limit,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;

      const productById = await Product.findByPk(id);

      if (!productById) {
        throw { name: "NotFound" };
      }
      res.status(200).json(productById);
    } catch (error) {
      next(error);
    }
  }

  static async editProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        throw { name: "NotFound" };
      }

      const editedProduct = await product.update(req.body);

      res.status(200).json(editedProduct);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) {
        throw { name: "NotFound" };
      }

      await product.destroy();

      res.status(200).json({ message: `${product.name} has been deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
