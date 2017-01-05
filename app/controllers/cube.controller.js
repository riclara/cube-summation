'use strict'

var express = require('express'),
  router = express.Router(),
  service = require('../services/cube.service')

module.exports = function (app) {
  app.get('/', index);
  app.get('/clean', clean);
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

function update(req, res, next) {
  service.update(req.body, function (err, data) {
    if (err) {
      return res.render('index', {
        title: 'cube summation',
        error_update_msg: err
      });
    }
    res.render('index', {
      title: 'cube summation',
      cell: `x: ${data.x}, y: ${data.y}, z: ${data.z}`,
      ok_update_msg: 'Cell was added'
    });
  })
};

function query(req, res, next) {
  service.query(req.body, function (err, data) {
    if (err) return next(err);
    res.render('index', {
      title: 'cube summation',
      sum: data
    });
  })
};

function clean(req, res, next) {
  service.clean(function (err, data) {
    if (err) {
      res.render('index', {
      title: 'cube summation',
      error_clean_msg: err,
    });
    }
    res.render('index', {
      title: 'cube summation',
      ok_clean_msg: 'Cube was cleaned',
      resp: data
    });
  })
};
