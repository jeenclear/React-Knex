const express = require('express');
const UsersController = require('../controller/users');
const ProductsController = require('../controller/products');

const router = express.Router();

// Users
router.get('/users/:id', UsersController.selectUsers);
router.post('/users', UsersController.createUsers);
router.put('/users/:id', UsersController.updateUsers);
router.delete('/users', UsersController.deleteUsers);

// Products
router.get('/products/:id', ProductsController.selectProducts);
router.post('/products', ProductsController.createProducts);

module.exports = router;