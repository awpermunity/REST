'use strict';


var mongoose = require('mongoose'),
    Doctor = mongoose.model('Doctors');

exports.list_all_doctors = function (req, res) {
    Doctor.find({}, function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};




exports.create_a_doctor = function (req, res) {
    var new_doctor = new Doctor(req.body);
    new_doctor.save(function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};


exports.read_a_doctor = function (req, res) {
    Doctor.findOne({ id: req.params.id }, function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};


exports.update_a_doctor = function (req, res) {
    Doctor.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }, function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};


exports.delete_a_doctor = function (req, res) {


    Doctor.remove({
        id: req.params.id
    }, function (err, doctor) {
        if (err)
            res.send(err);
        res.json({ message: 'Doctor successfully deleted' });
    });
};
