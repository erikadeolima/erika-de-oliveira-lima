'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders_products', [
      {
        order_id: 1,
        product_id: 3,
        quantity: 1,
      },
      {
        order_id: 1,
        product_id: 1,
        quantity: 1,
      },
      {
        order_id: 2,
        product_id: 5,
        quantity: 1,
      },
      {
        order_id: 2,
        product_id: 7,
        quantity: 1,
      },
    ], { timestamps: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders_products', null, {});
  }
};