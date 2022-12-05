const { decodeToken } = require('../auth/jwtFunctions');
const { BlogPost, PostCategory, Category, User } = require('../models');

const checkCategories = async (categories) => {
  const getAllCategories = await Category.findAll();
  const categoriesId = getAllCategories.map(({ id }) => id);
  const checkId = categories.every((id) => categoriesId.includes(id));

  return checkId;
};

const createPostCategory = async (userId, categories) => {
  const createCategory = await Promise.all(
    categories.map((id) => {
      const obj = { postId: userId, categoryId: id };
      return PostCategory.create(obj);
    }),
  );

  return createCategory;
};

const createBlogPost = async (token, post) => {
  const checkAllCategories = await checkCategories(post.categoryIds);
  
  if (!checkAllCategories) return { type: 400, message: 'one or more "categoryIds" not found' };

  const decode = decodeToken(token);

  const blogPost = {
    userId: decode.date.id,
    title: post.title,
    content: post.content,
  };

  const { null: id } = await BlogPost.create(blogPost);
  await createPostCategory(id, post.categoryIds);

  const result = await BlogPost.findByPk(id);

  return { type: null, message: result };
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ], 
  });
  return { type: null, message: allPosts };
};

const getPostById = async (id) => {
  const postById = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ], 
  });

  if (!postById) return { type: 404, message: 'Post does not exist' };

  return { type: null, message: postById };
};

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
};