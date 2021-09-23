const {Router} = require('express')
const Product = require('../models/Product')
const multer = require("multer");
const upload = multer({dest:"client/src/uploads"});
const router = Router()

// /api
router.post(
  '/addProduct',
  // upload.single('avatar'),
  async (req, res) => {
    try {
      const product = new Product(req.body)
      await product.save()
      res.status(200).json({product})
    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'something wrong'})
    }
  })
router.get(
  '/getAllProducts',
  async (req, res) => {
    try {
      const products = await Product.find()
      res.json({products})
    } catch (e) {
      res.status(500).json({message: 'something wrong'})
    }
  }
)
router.post("/upload",upload.single("filedata"),
  async (req,res,next)=>{
    let filedata = req.file;
    console.log(filedata);
    if(filedata)
      res.status(200).json({message: 'файл загружен',url:filedata.path})
    else
      res.sendStatus(500).json({message: 'ошибка загрузки'});
  }
)

// router.delete(
//   '/removeFavorite/:id',
//   async (req, res) => {
//     try {
//       const pokemons = await FavoritePokemon.findByIdAndDelete(req.params.id)
//       res.json({pokemons})
//     } catch (e) {
//       console.log(e);
//       res.status(500).json({message: 'something wrong'})
//     }
//   })

module.exports = router