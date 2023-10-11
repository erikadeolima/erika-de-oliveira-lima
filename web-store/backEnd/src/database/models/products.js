module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    url_image: DataTypes.STRING,
    value: DataTypes.INTEGER,
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