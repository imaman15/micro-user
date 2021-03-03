'use strict';

const bycrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        name: 'Imam Agustian Nugraha',
        profession: "Admin Micro",
        role: "admin",
        email: "imamagustiannugraha@ymail.com",
        password: await bycrypt.hash('adminimam123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Student',
        profession: "Front End Developer",
        role: "student",
        email: "student@gmail.com",
        password: await bycrypt.hash('student123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
