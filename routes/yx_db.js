var ascoltatori = require('ascoltatori');
settings = {
  type: 'mongo',
  uri: 'mongodb://127.0.0.1/',
  db: 'ascoltatori',
  pubsubCollection: 'ascoltatori',
  mongo: {} // mongo specific options
};

ascoltatori.build(settings, function (ascoltatore) {
  // ...
});