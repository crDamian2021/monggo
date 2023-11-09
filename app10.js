
require('dotenv').config();
  

const Server = require('./models/server10.js');

const server = new Server();

server.listen();

