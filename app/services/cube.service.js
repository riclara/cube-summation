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