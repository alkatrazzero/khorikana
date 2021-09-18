const {Schema,  model, Types} = require("mongoose");
const schema = new Schema({
  product:{type:Object}
  // name:{type:String},
  // category:{type:String},
  // aboutProduct:{type:String},
  // price:{type:Number},
  // photo:{type:Array},

  // owner:{type:Types.ObjectId,ref:'User'}
})
module.exports = model('Product', schema)
