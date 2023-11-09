const express = require('express');
const cors = require('cors');

const {dbConetion} = require('../database/config5.js')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api0/usuarios';

        //Conetar a bace de datos

        this.conectarDB();


        //middlewares funciones que agregan ptras funcionalidades
        this.middlewares();

        this.router();

    }

    //Bae de datos
    async conectarDB(){
        await dbConetion();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //lectura y parseo

        this.app.use(express.json);
        
        this.app.use(express.json('public'));

        //Directorio publico
        this.app.use(express.static('public'));
    }


    //rutas en donde podemos acceder
    router(){
        this.app.use(this.usuariosPath , require('../routers/usuarios5.js'));
        /* psrs que la funcion vistar //http//localhost:8080/api0/ususarios
        probar get ,post,put  */
    }

    listen(){
        this.app.listen(this.port ,()=>{
            console.log('servidor correndo de el puerto',this.port);
        });
    }

}

module.exports = Server;