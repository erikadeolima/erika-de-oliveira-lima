const { Op } = require('sequelize');
const { Product } = require('../../database/models');
const errorGenerate = require('../helper/errorGenerate');

const getAllProducts = async () => {
  const products = await Product.findAll();
  if (!products) {
    throw errorGenerate(404, 'Not found');
  }
  return products;
};

const getProductsById = async (id) => {
  const product = await Product.findOne({ where: { id } });
  if (!product) {
    throw errorGenerate(404, 'Not found');
  }
  return product;
};

module.exports = { getAllProducts, getProductsById }