'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, {
      foreignKey: 'id', as: 'blog_posts'
    });
  }

  return user;
};