const productService = require('../service/products');

class ProductsController {
    async selectProducts(req, res) {
        try {
            const productID = req.params.id;
            const data = await productService.selectProducts(productID);
            res.set('Access-Control-Allow-Origin', '*');
            res.json({ data });

        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }

    async createProducts(req, res) {
        try {
            const id = await productService.createProducts(req.body);
            res.set('Access-Control-Allow-Origin', '*');
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = new ProductsController();