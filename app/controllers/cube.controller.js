'use strict'

var express = require('express'),
  router = express.Router(),
  service = require('../services/cube.service') 

module.exports = function (app) {
  app.get('/', index);
  app.post('/update', update);
};

function index(req, res, next) {
  res.render('index', {
      title: 'cube summation'
    });
};

function update (req, res, next) {
  service.update(req.body, function(err, data){
  if (err) return next(err);
    res.render('index', {
      title: 'cube summation',
      cube: data
    });
  })
};
