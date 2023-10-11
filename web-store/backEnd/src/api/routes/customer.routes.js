const { Router } = require('express');

const customerController = require('../controller/customer.controller');

const customerRoute = Router();

customerRoute.post('/', customerController.login);
customerRoute.post('/register', customerController.register);
customerRoute.get('/home', customerController.getAllProducts);
customerRoute.get('/myaccount', customerController.getOrdersHistory);

module.exports = customerRoute;