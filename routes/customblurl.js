const express = require('express');
const app = express();
const fs = require('fs');
const config = require('../config');

app.get("/:videoid/master.blurl", (req, res) => {
  if (fs.existsSync(`${__dirname}/cache/blurl/${req.params.videoid}/master.blurl`)) {
    res.setHeader("content-type", "application/octet-stream")
    res.sendFile(`${__dirname}/cache/blurl/${req.params.videoid}/master.blurl`)
  }
})

module.exports = app;