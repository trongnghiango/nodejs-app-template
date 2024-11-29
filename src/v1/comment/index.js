const commentControler = require('@/controllers/comment.controler')
const asyncHandler = require('@/utils/asyncHandler')
const tryCatch = require('@/utils/tryCatch')
const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

router.get('/list', (req, res) => {
  // res.json({ msg: 'HI' })
})

router.post('/save', async (req, res, next) => {
  try {
    res.status(201).json({})
  } catch (error) {
    next(error) // Gọi middleware xử lý lỗi
  }
})

router.post('/test', asyncHandler(commentControler.create))

// Route để tìm người dùng theo ID
router.get('/:id', async (req, res, next) => {
  try {
    res.json({})
  } catch (error) {
    next(error) // Gọi middleware xử lý lỗi
  }
})

module.exports = router
