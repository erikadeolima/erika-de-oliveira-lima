module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    privacy: DataTypes.BOOLEAN,
    // role: DataTypes.STRING,
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users',
    });

  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return User;
};