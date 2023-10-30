module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    src: DataTypes.STRING,
    value: DataTypes.INTEGER,
    description: DataTypes.STRING,
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'products',
    });

  Product.associate = (models) => {
    Product.hasMany(models.OrdersProducts, {
      foreignKey: 'productId', as: 'ordersProducts'
    });
  }

  return Product;
}