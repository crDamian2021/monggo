const express = require('express');

//app.use('/static', express.static(path.join(__dirname, 'public')))
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();

    }
    middlewares(){

        this.app.use('/',express.static('public'))
       
    }
    routes(){
        this.app.get('/api', (req , res)=>{
            res.send('Helow word');
            console.log('Esta usando un api');
        });
    }

    listen(){
        this.app.listen(this.port, (req, res)=>{
            console.log('servidor coriendo en puerto',this.port);
        })
    }
    

} 

module.exports = Server;
    


