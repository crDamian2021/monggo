
require('dotenv').config();
  

const Server = require('./models/server11.js');

const server = new Server();

server.listen();

