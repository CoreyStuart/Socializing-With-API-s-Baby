const { connect, connection } = require('mongoose');

connect('mongodb://localhost:3001/socialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
