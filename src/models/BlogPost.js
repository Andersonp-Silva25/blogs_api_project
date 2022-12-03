'use strict';

module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreingKey: 'userId', as: 'users'
    });
  }

  return blogPost;
};