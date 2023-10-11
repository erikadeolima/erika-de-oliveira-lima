module.exports = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
    {
      timestamps: false,
      tableName: 'orders_products',
      underscored: true,
    });

  OrdersProducts.associate = (models) => {
    models.Product.belongsToMany(models.Order, {
      through: OrdersProducts,
      foreignKey: 'productId',
      otherKey: 'orderId',
      as: 'orders',
    });
    models.Order.belongsToMany(models.Product, {
      through: OrdersProducts,
      foreignKey: 'orderId',
      otherKey: 'productId',
      as: 'products',
    });
  };

  return OrdersProducts;

};