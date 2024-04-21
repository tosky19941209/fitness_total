module.exports = () => {
    const express = require('express')
    const cors = require('cors')
    const morgan = require('morgan')
    const methodOverride = require("method-override")
    // const bodyParser = require('bodyparser')
    const routers = require('./routers')
    const app = express()
    const path = require("path")
    app.use(express.json({ limit: "1mb" }));
    app.use(express.urlencoded({
        limit: "1mb",
        extended: true
    }));
    // app.use(bodyParser.json({ limit: "1mb" }));
    // app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
    app.use(cors());
    app.use(morgan("dev"));
    // app.use(methodOverride());

    // app.use(cors({
    //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //     origin: '*'
    // }))
    app.use(express.json());


    app.use(express.static(path.join(__dirname, '../build')))
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../build', 'index.html'));
    // });


    routers.map(router => {
        // console.log("1: ", router)
        app.use(`/api/${router}`, require(`../routers/${router}`))
        // app.use(`/api/${router}`, require("../routers"))
    })

    return app

}