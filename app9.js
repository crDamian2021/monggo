
require('dotenv').config();
  

const Server = require('./models/server9.js');

const server = new Server();

server.listen();

