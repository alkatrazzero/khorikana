const Order=require('../models/Order')
const {Router} = require('express')
const router = Router()

// /api
router.post(
  '/newOrder',
  async (req, res) => {
    try {
      // console.log(req.body)
      const order = new Order(req.body)
      await order.save()
      res.status(200).json({order})

    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'something wrong'})
    }
  })
// router.get(
//   '/getAllProducts',
//   async (req, res) => {
//     try {
//       const products = await Product.find()
//       res.json({products})
//     } catch (e) {
//       res.status(500).json({message: 'something wrong'})
//
//     }
//   }
// )
module.exports = router