var express = require('express');
var app = express();
port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var cors = require('cors');
mongoose.Types.ObjectId.isValid('your id here');
Doctor = require('./models/doctor'); //created model loading here
bodyParser = require('body-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/doctors')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./routes/doctorsListRoutes'); //importing route
routes(app); //register the route

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(3000);
console.log('running on port 3000....')

