const express = require('express');
const app = express();
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const config = require('../config');


app.get('/fortnite/api/storefront/v2/catalog', (req, res) => {
res.json(require("../shop.json"))
});


module.exports = app;