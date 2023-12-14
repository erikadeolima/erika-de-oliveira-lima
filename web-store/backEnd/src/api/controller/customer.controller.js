const userService = require('../service/users.service');
const productsService = require('../service/products.service');
const ordersService = require('../service//orders.service');
const { generatePassword } = require('../helper/bycrypt');

const getAllProducts = async (_request, response, next) => {
  try {
    const products = await productsService.getAllProducts();
    return response.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

const getProductById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const product = await productsService.getProductsById(id);
    return response.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

const login = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const userInfo = await userService.requestLogin(email, password);
    return response.status(200).json(userInfo);
  } catch (error) {
    next(error);
  }
};

const getOrdersHistory = async (_request, response, next) => {
  try {
    const id = 1;
    const orderHistoryData = await ordersService.findSalesByUserId(id);
    const orderHistory = orderHistoryData.map(({ dataValues }) => dataValues);
    return response.status(200).json(orderHistory);
  } catch (error) {
    next(error);
  }
};

const register = async (request, response, next) => {
  try {
    const { id, name, email, address, city, state, zipcode, neighborhood, phone } = req.body;
    const encrypt = generatePassword(request.body.password);

    const password = encrypt
    const updateUser = await userService.update(id, name, email, address, city, state, zipcode, neighborhood, phone, password);
    return response.status(201).json(updateUser);
  } catch (error) {
    next(error);
  }
};

const update = async (request, response, next) => {
  try {
    const { id, name, email, address, city, state, zipcode, neighborhood, phone } = request.body;
    const encryptOlder = generatePassword(request.body.currentPassword);
    const encryptNew = generatePassword(request.body.password);

    const password = encryptOlder;
    const newPassword = encryptNew;
    const newUser = await userService.update(id, name, email, address, city, state, zipcode, neighborhood, phone, password, newPassword);
    return response.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  getAllProducts,
  getProductById,
  getOrdersHistory,
  register,
  update
};