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

        this.app.get('/api', (req ,res)=>{
            res.send('hola mundo de la programacion');

        } )

        //metodo de obtenr
        this.app.get('/api0', (req , res)=>{
            res.json({
                ok: true,
                msg:'get API0'
            })
        });

        //El estado 403 peticon ilegal
        this.app.get('/api0', (req , res)=>{
            res.status(400).json({
                ok: true,
                msg:'put API1'
            })
        });

  /*       //put actualizacion de datos
        this.app.put('/api2', (req , res)=>{
            res.json({
                ok: true,
                msg:'put API2'
            })
        });
 */
        
        //Post crear nuevos recursos
        this.app.post('/api0', (req , res)=>{
            res.status(201).json({
                ok: true,
                msg:'post API2'
            })
        });

        //Peticon para borarlo
        this.app.delete('/api0', (req , res)=>{
            res.json({
                ok: true,
                msg:'delete API2'
            })
        });

        /* patch peticion para sustituir una propiedad  */
        
        this.app.patch('/api0', (req , res)=>{
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
