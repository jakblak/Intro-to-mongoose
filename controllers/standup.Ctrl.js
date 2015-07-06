var Standup = require('../models/standup.model');

exports.list = function(req, res) {
  var query = Standup.find();

  query.sort({ createdOn: 'desc' })    // In descending order
    .limit(12)
    .exec(function(err, results) {
      res.render('index', {
        title: 'Standup - List',
        notes: results                    // line 60 of index.html - the forEach loop
      });
    });
}

// filter by Member Name
exports.filterByMember = function(req, res) {
  var query = Standup.find();
  var filter = req.body.memberName;

  query.sort({ createdOn: 'desc' });

  if(filter.length > 0) {
    query.where({ memberName: filter });
  }
  query.exec(function(err, results) {
    res.render('index', {
      title: 'Standup - List',
      notes: results
    });
  });
}

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