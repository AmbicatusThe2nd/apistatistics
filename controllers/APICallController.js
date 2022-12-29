const APICall = require('../models/APICall');
const GetDate = require('../helpers/DateHelper');

const getLatestEndpoint = (req, res, next) => {
    APICall.find().sort({_id:-1}).limit(1).then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.status(400).json({
            message: error.message
        })
    });
};

const getMostFrequentEndpoint = (req, res, next) => {
    APICall.aggregate([
        {"$sortByCount" : "$service"},
        {"$limit": 1}
    ]).then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.status(400).json({
            message: error.message
        })
    })
};

const getNumberOfCalledEnpoints = (req, res, next) => {
    APICall.aggregate([
        {"$sortByCount": "$calledMethod"}
    ]).then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.status(400).json({
            message: error.message
        })
    })
};

const postCalledEndpoint = (req, res, next) => {
    const newRecord = new APICall({
        calledMethod: req.body.calledMethod,
        method: req.body.method,
        service: req.body.service,
        calledAt: GetDate(),
    });
    
    newRecord.save().then(() => {
        res.json({
            message: 'The record has been successfully added'
        })
    }).catch(error => {
        res.status(400).json({
            message: error.message
        })
    })
};


module.exports = {
    getLatestEndpoint,
    getMostFrequentEndpoint,
    getNumberOfCalledEnpoints,
    postCalledEndpoint
};