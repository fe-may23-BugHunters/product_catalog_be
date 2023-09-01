/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { products } = require('../src/data/products.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Products', products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
