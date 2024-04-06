var express = require("./master/express")
var mongoose = require("./master/mongoose")
var config = require('./env/config')
var app = express()
mongoose()

// app.listen(config.port, '77.37.86.133', () => {
//     console.log(`Server is running on port ${config.port}`)
// })
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
})