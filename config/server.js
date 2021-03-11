const express = require('express')
const consign = require('consign')

const app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

consign()
  .include('/config/dbConnection.js')
  .then('/app/routes')
  .then('/app/models')
  .then('/app/controllers')
  .into(app)

module.exports = app
