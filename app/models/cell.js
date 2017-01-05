// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CellSchema = new Schema({
  x: Number,
  y: Number,
  z: Number,
  W: Number
});

CellSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Cell', CellSchema);