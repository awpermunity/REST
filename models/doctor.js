'use strict';
var mongoose = require('mongoose');

// 
var DoctorSchema = mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
    },
    city: {
        type: String
    },
    spec: [
        {
            type: String
        }
    ],
    visit: [{
        date: Date,
        reason: String,
        user: String
    }]


});
var Doctor = module.exports = mongoose.model
//Get Doctors
module.exports = mongoose.model('Doctors', DoctorSchema)