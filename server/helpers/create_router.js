const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

    const router = express.Router();
    
    // INDEX get all bookings from MongoDB, and serve as json


    // SHOW, get a booking from MongoDB by id, and serve as json

  
    // CREATE, Post a new booking, and persist to the database


    // DESTROY, Delete a booking via its ID

  
    // UPDATE, update a booking that already exists via its ID

    return router;
};

module.exports = createRouter;
