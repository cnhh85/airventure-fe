const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const jsonfile = require('jsonfile')
const defaultRoute = express.Router()
const port = 9000

defaultRoute.use(function (req, res, next) {
  next()
})

defaultRoute.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello World!' })
})

app.use('/', cors(), defaultRoute)
app.listen(port, () => {
  console.log('Server is running on Port: ' + port)
})
