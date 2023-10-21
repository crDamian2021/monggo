const express = require('express');

//app.use('/static', express.static(path.join(__dirname, 'public')))
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        //rutas de aplicaión
        this.routes();

    }
    middlewares(){

        this.app.use('/',express.static('public'))
       
    }
    routes(){

        //Campiar
        this.app.get('/api0', (req , res)=>{
            res.json({
                ok: true,
                msg:'get API'
            })
        });


        this.app.put('/api0', (req , res)=>{
            res.status(400).json({
                ok: true,
                msg:'put API'
            })
        });

        this.app.post('/api0', (req , res)=>{
            res.status(201).json({
                ok: true,
                msg:'put API'
            })
        });

        this.app.delete('/api0', (req , res)=>{
            res.json({
                ok: true,
                msg:'put API2'
            })
        });

        /* PATCH */
        
        this.app.patch('/api0', (req , res)=>{
            res.json({
                ok: true,
                msg:'put API2'
            })
        });


        
        this.app.get('/api', (req , res)=>{
            res.send('Hello World')
        });

        this.app.get('/api2', (req , res)=>{
            res.json({
                ok: true,
                msg:'put API2'
            })
        });


       
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor coriendo en puerto',this.port);
        })
    }

}


module.exports = Server;
