'use strict'
var mongoose = require('mongoose'),
  Cell = mongoose.model('Cell');

exports.update = function (cell, cb) {
    let filter = {
        x: cell.x,
        y: cell.y,
        z: cell.z
    }
    Cell.findOneAndUpdate(filter, cell, {new: true, upsert: true}, function(err, data){
        if(err){
            return cb(err)
        }
        return cb(null, data)
    })
};

exports.query = function (pos, cb) {
    let filter = { $or: [
            {x: pos.x1}, {y: pos.y1}, {z: pos.z1}, {x: pos.x2}, {y: pos.y2}, {z: pos.z2}
        ]
    }
    Cell.find(filter, function(err, data){
        if(err){
            return cb(err)
        }
        if(data.length){
            let res = data.reduce(function(v0, v1, idx, arr){
            return {W: v0.W + v1.W};
        });
        return cb(null, res)
        } else {
            return cb(null, {W: 0})
        }
    })
};