const db = require('../db/db');

class ProductsService {
    async selectProducts(id) {
      const data = await db('products')
      .select('*')
      .where("id", id)
      .first();

      return data;
    }

    async createProducts(name, price, seller_email) {
        const [id] = await db('products').insert({
          name: name,
          price: price,
          seller_email: seller_email,  
        })
        .returning('id');

        return id;
    }
}

module.exports = new ProductsService();