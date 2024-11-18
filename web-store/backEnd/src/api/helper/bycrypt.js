const md5 = require('md5');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkPassword = (bodyPassword, userPassword) => {
  const newHash = md5(bodyPassword);
  return (newHash === userPassword);
};

const generatePassword = (bodyPassword) => {
  const newHash = md5(bodyPassword);
  return newHash;
};

const generateJWTToken = (userData) => {
  const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const verifyJWTToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = {
  checkPassword,
  generatePassword,
  generateJWTToken,
  verifyJWTToken,
};