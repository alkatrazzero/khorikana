const {Router} = require('express')
const Comment = require('../models/Comment')
const router = Router()

// /api
router.post(
  '/addComment',
  async (req, res) => {
    try {

      const comment = new Comment({
        comment:req.body.value
      })
      await comment.save()
      res.status(200).json({comment})

    } catch (e) {
      console.log(e);
      res.status(500).json({message: 'something wrong'})
    }
  })
router.get(
  '/getComments',
  async (req, res) => {
    try {
      const comment = await Comment.find()
      res.json({comment})
    } catch (e) {
      res.status(500).json({message: 'something wrong'})

    }
  }
)
module.exports = router