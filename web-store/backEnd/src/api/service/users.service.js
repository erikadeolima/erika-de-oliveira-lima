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
  const { id, name, pollenBalance } = user;
  return { id, name, pollenBalance };
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

module.exports = {
  findUserByName,
  register,
  requestLogin
};