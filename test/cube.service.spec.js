'use strict';

var app = require('../app');
var service = require('../app/services/cube.service');
var assert = require('chai').assert;


describe('commerce service', function () {
    it('update add first cell', function (done) {
        service.update({ x: 1, y: 1, z: 1, W: 10 }, function (err, data) {
            assert.isNull(err, 'there was no error');
            assert.isNotNull(data, 'cell was added');
            assert.isDefined(data._id, 'cell has an Id');
            done()
        })
    });
    it('update add second cell', function (done) {
        service.update({ x: 2, y: 2, z: 2, W: 20 }, function (err, data) {
            assert.isNull(err, 'there was no error');
            assert.isNotNull(data, 'cell was added');
            assert.isDefined(data._id, 'cell has an Id');
            done()
        })
    });
    it('query summation', function (done) {
        service.query({ x1: 1, y1: 0, z1: 0, x2: 2, y2: 0, z2: 0 }, function (err, data) {
            assert.strictEqual(30, data.W, 'summation is ok');
            done()
        })
    });
    it('query summation empty', function (done) {
        service.query({ x1: 0, y1: 0, z1: 0, x2: 3, y2: 3, z2: 3 }, function (err, data) {
            assert.strictEqual(0, data.W, 'summation is ok');
            done()
        })
    });
});