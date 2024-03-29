'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,     
       },
       display_name: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
       },
       password: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       image: {
        type: Sequelize.STRING,
        allowNull: false,
       },
     });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
