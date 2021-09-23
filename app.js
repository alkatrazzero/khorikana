const express=require('express')
const mongoose=require('mongoose')
const config=require('config')
const bodyParser = require("body-parser");
const cors = require("cors");
const app =express()



app.use(bodyParser({limit: '50mb'}))
app.use(express.json({ extended: true }))
app.use(cors({credentials: true, origin: 'http://localhost:5000/'}));
app.use('/api/products',require("./routes/products.routes"))
app.use('/api/comments',require("./routes/commenst.routes"))
app.use('/api/order' ,require("./routes/order.routes"))
app.use(express.static(__dirname));


const PORT=config.get('port')||5000

async function start(){
  try{
    await mongoose.connect(config.get('mongoUri'),{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true
    })
    app.listen(PORT,()=> console.log(`app has been started on port ${PORT}...`))
  }catch (e){
    console.log('Server error', e.message)
    process.exit(1)
  }
}
start()

