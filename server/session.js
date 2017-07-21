const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const store = new RedisStore({
  url: '//redis-19116.c1.ap-southeast-1-1.ec2.cloud.redislabs.com:19116',
  logErrors: true,
});

module.exports = {
  sessionConfig: session({
    secret: 'secret-chewlounge',
    store,
    resave: false,
    saveUninitialized: false,
  }),
};
