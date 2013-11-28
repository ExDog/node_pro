
var ascoltatori = require('ascoltatori');
settings = {
  type: 'mqtt',
  json: false,
  mqtt: require('../node_modules/ascoltatori/node_modules/mqtt/lib/mqtt'),
  host: '127.0.0.1',
  port: 1883
};
var asc=ascoltatori.build(settings,function (ascoltatore) {

  // subscribes to a topic
  ascoltatore.subscribe('xia', function() {
    console.log(arguments);
    // { '0': 'hello', '1': 'a message' }
  });

  // publishes a message to the topic 'hello'
  ascoltatore.publish('hello', 'a message', function() {
    console.log('message published');
  });
});



exports.doPublish=function(req,res)
  {
    asc.publish('xia', 'first mseeage', function() {
    console.log('publish');
  });
}

