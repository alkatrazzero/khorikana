const {Schema,  model, Types} = require("mongoose");
const schema = new Schema({
  comment:{type:String},
  newNow:{type:String}
  // owner:{type:Types.ObjectId,ref:'User'}
})
module.exports = model('Comment', schema)