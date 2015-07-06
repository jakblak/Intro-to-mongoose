// Model.find(conditions, [fields], [options], [callback])

Standup.find({
  memberName: 'David'
}, function(err, results) {
  // handle err, results
});

// Limit the results
Standup.find({
  memberName: 'Mary'
  }, 'memberName impediment', function(err, results) {
    // ...
});


// No callback, no conditions
var query = Standup.findOne();
query.exec(function(err, results) {
  //handle err, results
});

// With conditions..
var query = Standup.findOne({ memberName: 'Mark' });


// By ID, No conditions
var query = Standup.findById(id);
query.exec(function(err, doc) {
  // handle err, results
});

// Chained method calls
Standup.findById(id).exec(function(err, results) { ... });

// By ID, return every field BUT impediment
var query = Standup.findById(id, '-impediment');


// Model.where(path, [val])
Customer.where('discount').gte(10).lt(20).exec(function(err, results) {
  if(err) throw err;
  console.log(results);
})

// Chain where methods together
Customer.where('discount').gte(10).lt(20)
  .where('zipCode', '90045')
  .exec(function(err, results) {
  if(err) throw err;
  console.log(results);
})