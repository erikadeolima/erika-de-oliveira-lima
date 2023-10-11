const md5 = require('md5');

const checkPassword = (bodyPassword, userPassword) => {
  const newHash = md5(bodyPassword);
  return (newHash === userPassword);
};

const generatePassword = (bodyPassword) => {
  const newHash = md5(bodyPassword);
  return newHash;
}

module.exports = {
  checkPassword,
  generatePassword,
};