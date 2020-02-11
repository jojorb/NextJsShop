require('dotenv').config({ path: '.env' });
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const createYoga = require('./createYoga');
const db = require('./db');

const server = createYoga();

/*
 * MIDDLEWARE
 */

// Json Web Token
server.express.use(cookieParser());

// decode the JWT to get the user Id on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    // grab the user ID decode it with app_secret
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId onto the req for future requests to access
    req.userId = userId;
  }
  next();
});

// populates the user on each request if he is logged in
server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{ id, permissions, email, firstname }'
  );
  // console.log(user);
  req.user = user;
  next();
});

/*
 * END MIDDLEWARE
 */

server.start(
  {
    url: process.env.YOGA_URL,
    port: process.env.YOGA_PORT,
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  () => {
    console.log(
      `🚀 Server ready at ${process.env.YOGA_URL}:${process.env.YOGA_PORT}`
    );
  }
);
