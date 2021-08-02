const express = require('express');
const app = express();
const axios = require("axios");

app.get('/fortnite/api/v2/versioncheck/:version', (req, res) => { res.json({ "type": "NO_UPDATE" }) });

app.get('/fortnite/api/game/v2/enabled_features', (req, res) => {
    res.json([]);
});

app.get('/fortnite/api/calendar/v1/timeline', async (req, res) => {
  res.json(require("../cache/timeline/timeline.json"))
})
module.exports = app;
