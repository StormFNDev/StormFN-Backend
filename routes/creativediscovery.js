const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const config = require('../config');

app.get("/fortnite/api/game/v2/creative/discovery/surface/:userid", (req, res) => {
    res.json(require("../discovery.json"))
})

module.exports = app;