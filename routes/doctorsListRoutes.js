'use strict';
module.exports = function (app) {
    var doctorList = require('../doctorsListController/doctorListController');

    // todoList Routes
    app.route('/doctors')
        .get(doctorList.list_all_doctors)
        .post(doctorList.create_a_doctor);


    app.route('/doctors/:id')
        .get(doctorList.read_a_doctor)
        .put(doctorList.update_a_doctor)
        .delete(doctorList.delete_a_doctor);
};
