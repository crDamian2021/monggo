
require('dotenv').config();
  

const Server = require('./models/server');

const server = new Server();

server.listen();

/* app.get('/', function (req, res) {
    res.send('Welcome');
});

app.listen(port,()=>{
    console.log(`Escuchando en el puerto http:/localhost:${port}`);

});  */

