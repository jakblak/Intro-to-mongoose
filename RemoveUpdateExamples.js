// Model.update(conditions, update, [options], [callback])
var condition = { memberName: 'Mary' };
var update = { impediment: 'None - Mary no longer works here '};

Standup.update(condition, update, function(err, numAffected, response) {
  // handle err or results
})

Standup.remove(condition, function(err) {
  //handle err
});

// Remove any doc created on or after Halloween
var gteDate = new Date(2014, 10, 31);
Standup.remove({ createdOn: { $get: gteDate}}, function(err) {
  // handle err
});