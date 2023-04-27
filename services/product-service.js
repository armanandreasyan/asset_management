const { Product } =  require("../db/models");

class ProductService {
    createProduct(product) {
        return Product.create(...product)
    }
}

const productService = new ProductService();

module.exports = {
    productService,
    ProductService
}