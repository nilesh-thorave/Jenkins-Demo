var express = require('express');
var router = express.Router();
var request = require('request');
var handler = require('./routeHandlers.js');

router.post('/sampleserver', handler.routeHandler);

module.exports = router;