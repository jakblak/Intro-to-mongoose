var Standup = require('../models/standup.model');

exports.create = function(req, res) {
  var entry = new Standup({
    memberName: req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment
  });
  entry.save();                 // no error cb
  res.redirect(301, '/');     // redirect to home page
};

exports.getNote = function(req, res) {
  res.render('newnote', {
    title: 'Standup - New Note'
  });
}