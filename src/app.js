const express = require('express');
const loginRouter = require('./routes/login.routes');
const userRouter = require('./routes/user.routes');
const categoriesRouter = require('./routes/category.routes');
const postRouters = require('./routes/post.routes');

// ...

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouters);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`.
module.exports = app;
