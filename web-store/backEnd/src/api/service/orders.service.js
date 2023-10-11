const { Op } = require('sequelize');
const { Order, OrdersProducts, Product } = require('../../database/models');

const findSalesByUserId = async (userId) => {
  /* const sales = await Order.findAll({ where: { userId } });
  const { id } = sales;
  const orderId = id; */
  const sales = await Order.findAll({
    where: { userId },
    include: [
      { model: Product, as: 'products' }
    ],
  });
  return sales;
};

module.exports = { findSalesByUserId }