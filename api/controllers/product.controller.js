const Products = require("../schemas/product.schema");


exports.getProducts =  async (req, res) => {
    try {
      const products = await Products.find();
      res.status(200).json({
        status: 'success',
        products: products
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err.errors
      });
    }
  };
