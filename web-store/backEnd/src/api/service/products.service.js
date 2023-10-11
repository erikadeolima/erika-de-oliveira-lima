const { Op } = require('sequelize');
const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const products = await Product.findAll();
  if (!products) {
    throw errorGenerate(404, 'Not found');
  }
  return products;
}

module.exports = { getAllProducts }