'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,       
       },
       title: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       content: {
        type: Sequelize.TEXT,
        allowNull: false,
       },
       user_id: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
       },
       published: {
        type: Sequelize.DATE,
        allowNull: false,
       },
       updated: {
        type: Sequelize.DATE,
        allowNull: false,
       },
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
