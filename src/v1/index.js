const express = require('express')

const router = express.Router()

router.use('/v1/api/comment', require('./comment'))

module.exports = router
