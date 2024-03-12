const express = require('express');
const bodyParser = require('body-parser');
const wppjsRoutes = require("./wppjsRoutes.js");
const routes = (app) => {

    app.use((req, res, next) => {
        console.log(req.method + " " + req.path + " - " + req.ip);
        next();
    })

    app.use(bodyParser.json());

    app.use('/wpp', wppjsRoutes);

}

module.exports = routes;