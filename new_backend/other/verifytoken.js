const jwt = require("jsonwebtoken")
const config = require("./config")

module.exports = (token) => {
    jwt.verify(token, config.secret_key, async(res) => {
        console.log(res)
    })
}