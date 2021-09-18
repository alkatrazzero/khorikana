const {Schema,  model} = require("mongoose");
const schema = new Schema({
  order:{type:Object},
  product:{type:Array}
})
module.exports = model('Order', schema)