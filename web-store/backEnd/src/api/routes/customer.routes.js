const { Router } = require('express');

const customerController = require('../controller/customer.controller');

const customerRoute = Router();

customerRoute.post('/', customerController.login);
customerRoute.post('/register', customerController.register);
customerRoute.get('/home', customerController.getAllProducts);
customerRoute.get('/myaccount', customerController.getOrdersHistory);
customerRoute.get('/details/:id', customerController.getProductById);
customerRoute.patch('/account', customerController.update);

module.exports = customerRoute;