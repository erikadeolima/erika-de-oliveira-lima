'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Erika Castro',
        email: 'erika.castro@tester.com',
        address: 'Rua dos Alfeneiros, 123',
        city: 'São Paulo',
        state: 'SP',
        zipcode: '12345-678',
        neighborhood: 'Vila dos Testes',
        phone: '(11) 12345-6789',
        password: '1034d5f5bf8a0e7f10040d3eefee3e7a', /* AfroReact2023 */
        privacy: true,
        /* role: 'administrator',  */
      }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};