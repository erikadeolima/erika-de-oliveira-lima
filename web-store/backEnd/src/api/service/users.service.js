const { Op } = require('sequelize');
const { User } = require('../../database/models');
const errorGenerate = require('../helper/errorGenerate');
const { checkPassword } = require('../helper/bycrypt');

const findUserByName = async (name) => {
  const user = await User.findOne({ where: { name } });
  if (!user) {
    throw errorGenerate(404, 'Not found');
  }
  return user.id;
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw errorGenerate(404, 'Not found');
  }
  return user.id;
};

const requestLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !checkPassword(password, user.password)) {
    throw errorGenerate(404, 'Not found');
  }
  const { id, name, address, city, state, zipcode, neighborhood, phone } = user;
  return { id, name, email, address, city, state, zipcode, neighborhood, phone };
};

const register = async (name, email, address, city, state, zipcode, neighborhood, phone, password) => {
  const isAnUser = await User.findOne({ where: { email } });
  if (isAnUser) {
    console.log('hasuser')
    throw errorGenerate(409, 'Email already registered');
  } else {
    const newUser = await User.create({ name, email, address, city, state, zipcode, neighborhood, phone, password, privacy: true });
    return newUser;
  }
};

const update = async (id, name, email, address, city, state, zipcode, neighborhood, phone, password, newPassword) => {
  try {
    const user = await User.findByPk(id);

    if (!user || password !== user.password) {
      throw errorGenerate(500, 'Senha atual inválida.');
    }

    if (newPassword === user.password) {
      throw errorGenerate(500, 'A nova senha deve ser diferente da senha atual.');
    }
    const updateUser = await User.update({ name, email, address, city, state, zipcode, neighborhood, phone, newPassword, privacy: true }, { where: { id } });
    return updateUser;
  } catch (error) {
    console.log(error);
    throw errorGenerate(error.status, error.message);
  }
};

module.exports = {
  findUserByName,
  register,
  requestLogin,
  update
};