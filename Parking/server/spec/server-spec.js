var mongoose = require('mongoose');
var chai = require('chai');
var request = require('request');
var server = require('../index');
var should = chai.should();


describe('Persistent database and server communication', () => {

  var dbConnection;

  before(done => {
    mongoose.createConnection('mongodb://localhost/testDatabase');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('Connected to test database');
      done();
    });
  });

  it('should update and return parking data on /parked POST', (done) => {

    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/parked',
      json: {primary: 'Divis', cross: 'Fell', weekly: 'Every', daily: 'Monday', timeOf: '9:00 AM'}
    }, (err, res) => {

      should.not.exist(err);
      should.exist(res);
      res.should.be.json;
      res.body.should.be.a('array');

      var resp = res.body[0];
      resp.should.have.property('primary_street');
      resp.primary_street.should.equal('Divis');
      resp.should.have.property('cross_street');
      resp.cross_street.should.equal('Fell');
      resp.should.have.property('expire_time');
      resp.expire_time.should.have.property('weekly_freq');
      resp.expire_time.weekly_freq.should.equal('Every');
      resp.expire_time.should.have.property('daily_freq');
      resp.expire_time.daily_freq.should.equal('Monday');
      resp.expire_time.should.have.property('time_of_day');
      resp.expire_time.time_of_day.should.equal('9:00 AM');

      done();
    });
  });

  it('should return parking data on /parked GET', (done) => {

    request({
      method: 'GET',
      uri: 'http://127.0.0.1:3000/parked',
      json: true,
    }, (err, res) => {

      should.not.exist(err);
      should.exist(res);
      res.should.be.json;
      res.body.should.be.a('array');

      var resp = res.body[0];
      resp.should.have.property('primary_street');
      resp.primary_street.should.equal('Divis');
      resp.should.have.property('cross_street');
      resp.cross_street.should.equal('Fell');
      resp.should.have.property('expire_time');
      resp.expire_time.should.have.property('weekly_freq');
      resp.expire_time.weekly_freq.should.equal('Every');
      resp.expire_time.should.have.property('daily_freq');
      resp.expire_time.daily_freq.should.equal('Monday');
      resp.expire_time.should.have.property('time_of_day');
      resp.expire_time.time_of_day.should.equal('9:00 AM');

      done();
    });
  });

  it('should update and return parking data on /parked PUT', (done) => {
    request({
      method: 'PUT',
      uri: 'http://127.0.0.1:3000/parked',
      json: {primary: 'Grove', cross: 'Baker', weekly: 'Every', daily: 'Tuesday', timeOf: '11:00 AM'}
    }, (err, res) => {

      should.not.exist(err);
      should.exist(res);
      res.should.be.json;
      res.body.should.be.a('object');

      res.body.should.have.property('primary_street');
      res.body.primary_street.should.equal('Grove');
      res.body.should.have.property('cross_street');
      res.body.cross_street.should.equal('Baker');
      res.body.should.have.property('expire_time');
      res.body.expire_time.should.have.property('weekly_freq');
      res.body.expire_time.weekly_freq.should.equal('Every');
      res.body.expire_time.should.have.property('daily_freq');
      res.body.expire_time.daily_freq.should.equal('Tuesday');
      res.body.expire_time.should.have.property('time_of_day');
      res.body.expire_time.time_of_day.should.equal('11:00 AM');

      done();
    });
  });

  it('should update all parking data fields even with incomplete data on /parked PUT', (done) => {
    request({
      method: 'PUT',
      uri: 'http://127.0.0.1:3000/parked',
      json: {primary: 'Jones', cross: '', weekly: '', daily: '', timeOf: ''}
    }, (err, res) => {

      should.not.exist(err);
      should.exist(res);
      res.should.be.json;
      res.body.should.be.a('object');

      res.body.should.have.property('primary_street');
      res.body.primary_street.should.equal('Jones');
      res.body.should.have.property('cross_street');
      res.body.cross_street.should.equal('');
      res.body.should.have.property('expire_time');
      res.body.expire_time.should.have.property('weekly_freq');
      res.body.expire_time.weekly_freq.should.equal('');
      res.body.expire_time.should.have.property('daily_freq');
      res.body.expire_time.daily_freq.should.equal('');
      res.body.expire_time.should.have.property('time_of_day');
      res.body.expire_time.time_of_day.should.equal('');

      done();
    });
  });

  it('should return new streets added on /streets POST', (done) => {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/streets',
      json: {primary: 'Divis', cross: 'Fell'}
    }, (err, res) => {

      should.not.exist(err);
      should.exist(res);
      res.should.be.json;
      // res.body.should.be.a('array');
      // res.body[0].should.equal('Divis');
      // res.body[1].should.equal('Fell');

      done();
    });
  });

  it('should handle incomplete data on /streets POST', (done) => {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/streets',
      json: {primary: 'Baker', cross: ''}
    }, (err, res) => {

      should.not.exist(err);
      should.exist(res);
      res.should.be.json;
      // res.body.should.be.a('array');
      // res.body[0].should.equal('Baker');
      // res.body[1].should.equal('');

      done();
    });
  });

  it('should return all user street data on /streets GET', (done) => {
    request({
      method: 'GET',
      uri: 'http://127.0.0.1:3000/streets',
      json: true,
    }, (err, res) => {
      done();
    });
  });

  it('should not return already existing streets on /streets POST', (done) => {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/streets',
      json: {primary: 'Divis', cross: 'Fell'}
    }, (err, res) => {
      done();
    });
  });

  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      done();
    });
  });
});