import  async  from "async";
// create a queue object with concurrency 2
var q = async.queue(function(task, callback) {
    setTimeout(() => {
        console.log('Hello ' + task.name);
        callback();
    },task.timeout)
  }, 1);
  
  // add some items to the queue
  q.push({name: 'foo' , timeout : 5000}, function(err) {
    console.log('Finished processing foo');
  });
  
  q.push({name: 'bar' , timeout : 3000}, function (err) {
    console.log('Finished processing bar');
  });
  
  // add some items to the queue (batch-wise)
  q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
    console.log('Finished processing item');
  });
  
  // add some items to the front of the queue
  q.unshift({name: 'bar2' , timeout : 4000}, function (err) {
    console.log('Finished processing bar');
  });

  
  q.drain(function() {
    console.log('all items have been processed');
});
// or await the end
await q.drain()