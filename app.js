
require('dotenv').config();
const port = process.env.PORT   

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Bienvenidos a Desarrollo web');
});

app.listen(port,()=>{
    console.log(`Escuchando en el puerto http:/localhost:${port}`);

}); 

