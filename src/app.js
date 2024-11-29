const express = require('express')

const app = express()

require('@/dbs/mongo')

app.use('/', require('@/v1'))

module.exports = app
