var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/parkingApp');

var Schema = mongoose.Schema;

var ParkedSchema = new Schema({
  primary_street: {
    type: String,
    required: true,
  },
  cross_street: {
    type: String,
  },
  expire_time: {
    weekly_freq: {
      type: String,
    },
    daily_freq: {
      type: String,
    },
    time_of_day: {
      type: String,
    },
  },
});

var ParkedModel = mongoose.model('Parked', ParkedSchema);

var AllStreetsSchema = new Schema({
  streets: [{
    type: String,
  }],
});

var AllStreetsModel = mongoose.model('AllStreets', AllStreetsSchema);

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/* Route Responses:
 * 
 * {
 *   'GET /parked': {
 *     'desc': 'returns current parked location',
 *     'response': '200 application/json',
 *     'data': {
 *       'primary_street': 'string',
 *       'cross_street': 'string',
 *       'expire_time': 'Date',
 *     },
 *   },
 *   'PUT /parked': {
 *     'desc': 'updates and returns current parked location',
 *     'response': '200 application/json',
 *     'data': {
 *       'primary_street': 'string',
 *       'cross_street': 'string',
 *       'expire_time': 'Date',
 *     },
 *   },
 *   'GET /streets': {
 *     'desc': 'returns array of all user streets',
 *     'response': '200 application/json',
 *     'data': [ street, street, street, street, ... ],
 *   }
 *   'POST /streets': {
 *     'desc': 'creates (if needed) new streets and returns an array of streets added',
 *     'response': '200 application/json',
 *     'data': [ street , street ],
 *   }
 * }
 */

app.get('/parked', function(req, res) {
  ParkedModel.find({}, function(err, parkedData) {
    if (err) {
      // handle err
    } else {
      res.status(200).send(parkedData);
    }
  });
});

app.post('/parked', function(req, res) {
  var body = req.body;
  var parked = {expire_time:{}};
  parked.primary_street = body.primary;
  parked.cross_street = body.cross;
  parked.expire_time.weekly_freq = body.weekly;
  parked.expire_time.daily_freq = body.daily;
  parked.expire_time.time_of_day = body.timeOf;

  var firstPark = new ParkedModel(parked);

  firstPark.save(function(err) {
    if (err) {
      console.log('err: ', err)
    } else {
      ParkedModel.find({}, function(err, savedPark) {
        if (err) {
          // handle err
        } else {
          res.status(200).send(savedPark);
        }
      });
    }
  });
});

app.put('/parked', function(req, res) {
  var body = req.body;
  var parked = {expire_time:{}};
  parked.primary_street = body.primary;
  parked.cross_street = body.cross;
  parked.expire_time.weekly_freq = body.weekly;
  parked.expire_time.daily_freq = body.daily;
  parked.expire_time.time_of_day = body.timeOf;

  ParkedModel.findOneAndUpdate({}, { $set: parked }, { new: true }, function(err, updatedPark) {
    if (err) {
      // handle err
    } else {
      res.status(200).json(updatedPark);
    }
  });
});

app.get('/streets', function(req, res) {
  AllStreetsModel.find({}, function(err, streets) {
    if (err) {
      // handle err
    } else {
      res.json(streets);
    }
  });
});

app.post('/streets', function(req, res) {
  var primary = req.body.primary;
  var cross = req.body.cross;

  AllStreetsModel.update({ $addToSet: { 'streets': { $each: [ primary, cross] }}}, { new: true }, function(err, streetsArray) {
    if (err) {
      // handle err
    } else {
      res.json(streetsArray);
    }
  });
});


var server = app.listen(3000, function () {
  console.log('App listening on 3000')
});

module.exports = server;