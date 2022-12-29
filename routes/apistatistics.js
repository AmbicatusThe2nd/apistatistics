const express = require('express');
const router = express.Router();
const APICallController = require('../controllers/APICallController');

router.get('/latestEndpoint', APICallController.getLatestEndpoint);

router.get('/mostFrequentEndpoint', APICallController.getMostFrequentEndpoint);

router.get('/numberOfCalledEndpoints', APICallController.getNumberOfCalledEnpoints);

router.post('/saveEndpointRecord', APICallController.postCalledEndpoint);

module.exports = router;