const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

    const router = express.Router();
    
    // INDEX get all cards from MongoDB, and serve as json


    // SHOW, get a card from MongoDB by id, and serve as json


    return router;
};

module.exports = createRouter;
