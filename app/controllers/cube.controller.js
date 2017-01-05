'use strict'

var express = require('express'),
  router = express.Router(),
  service = require('../services/cube.service') 

module.exports = function (app) {
  app.get('/', index);
  app.get('/update', index);
  app.get('/query', index);
  app.post('/update', update);
  app.post('/query', query);
};

function index(req, res, next) {
  res.render('index', {
      title: 'cube summation'
    });
};

function update (req, res, next) {
  service.update(req.body, function(err, data){
  if (err) {
    return res.render('index', {
      title: 'cube summation',
      error_update_msg: err
    });
  }
    res.render('index', {
      title: 'cube summation',
      cell: data,
      ok_update_msg: 'Cell was added'
    });
  })
};

function query (req, res, next) {
  service.query(req.body, function(err, data){
  if (err) return next(err);
    res.render('index', {
      title: 'cube summation',
      sum: data
    });
  })
};
