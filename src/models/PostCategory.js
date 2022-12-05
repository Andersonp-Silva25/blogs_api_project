'use strict';

module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'categories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'BlogPost',
    });
  }

  return postCategory;
};