const express = require('express');

//uso de cors
const cors = require('cors');

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


        //LLamando cors
        this.app.use(cors());

        this.app.use('/',express.static('public'))
       
    }


    routes(){

        //PETICION
        this.app.get('/api0', (req , res)=>{
            res.json({
                ok: true,
                msg:'get API'
            })
        });

        //PUT 
        this.app.put('/api0', (req , res)=>{
            res.status(400).json({
                ok: true,
                msg:'put API'
            })
        });
//POST
        this.app.post('/api0', (req , res)=>{
            res.status(201).json({
                ok: true,
                msg:'put API2'
            })
        });
//DELETE
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


        /* end-poin ejemploo text */
        this.app.get('/api', (req , res)=>{
            res.send('Hello World')
        });


        /* end-point ejemplo json */

        this.app.get('/api2', (req , res)=>{
            res.json({
                ok: true,
                msg:'put API2'
            })
        });

        /* 403 coando se hac el llamado ilegal */

        this.app.get('/api3', (req , res)=>{
            res.status(404).json({
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
