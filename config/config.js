var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cube-summation'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/cube-summation-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'cube-summation'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/cube-summation-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'cube-summation'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/cube-summation-production'
  }
};

module.exports = config[env];
