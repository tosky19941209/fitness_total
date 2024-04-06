var express = require("./master/express")
var mongoose = require("./master/mongoose")
var config = require('./env/config')
var app = express()
mongoose()

app.listen(config.port, 'localhost', () => {
    console.log(`Server is running on port ${config.port}`)
})