
require('dotenv').config();
  

const Server = require('./models/server4');

const server = new Server();

server.listen();

