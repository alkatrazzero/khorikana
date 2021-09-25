const Order=require('../models/Order')
const {Router} = require('express')
const router = Router()

// /api
router.post(
  '/newOrder',
  async (req, res) => {
    try {

      const order = new Order(req.body)
      await order.save()
      res.status(200).json({order})

    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'something wrong'})
    }
  })
router.get(
  '/getOrders',
  async (req, res) => {
    try {
    const order= await Order.find()
      res.json({order})
    } catch (e) {
      res.status(500).json({message: 'something wrong'})

    }
  }
)
router.delete(
  '/deleteOrder/:id',
  async (req, res) => {
    try {
     await Order.findByIdAndDelete(req.params.id)
      res.status(200).json({message:"success"})
    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'something wrong'})
    }
  })
module.exports = router
