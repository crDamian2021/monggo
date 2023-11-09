const express = require('express');

//app.use('/static', express.static(path.join(__dirname, 'public')))
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;



        //Funciones que agrega más funciones
        this.middlewares();

        //rutas de aplicaión
        this.routes();

    }
    middlewares(){

        this.app.use('/',express.static('public'))
       
    }
    routes(){

        this.app.get('/api', (req ,res)=>{
            res.send('hola mundo de la programacion');

        } )

        //Campiar
        this.app.get('/api0', (req , res)=>{
            res.json({
                ok: true,
                msg:'get API0'
            })
        });

        //El estado 403 peticon ilegal
        this.app.get('/api1', (req , res)=>{
            res.status(403).json({
                ok: true,
                msg:'get API1'
            })
        });

        //put actualizacion de datos
        this.app.put('/api2', (req , res)=>{
            res.json({
                ok: true,
                msg:'put API2'
            })
        });

        
        //Post crear nuevos recursos
        this.app.post('/api2', (req , res)=>{
            res.status(201).json({
                ok: true,
                msg:'post API'
            })
        });

        //Peticon para borarlo
        this.app.delete('/api2', (req , res)=>{
            res.json({
                ok: true,
                msg:'delete API2'
            })
        });

        /* patch peticion para sustituir una propiedad  */
        
        this.app.patch('/api2', (req , res)=>{
            res.json({
                ok: true,
                msg:'patch API2'
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
