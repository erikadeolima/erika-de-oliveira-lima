'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        field: 'user_id',
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      totalValue: {
        field: 'total_value',
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deliveryAddress: {
        field: 'delivery_address',
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      deliveryNumber: {
        field: 'delivery_number',
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      orderDate: {
        field: 'order_date',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }


};