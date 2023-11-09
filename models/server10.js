const express = require('express');
const cors=require('cors');

const {dbConnection}=require('../database/config4');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api0/usuarios';

        //Conetar a bace de datos

        this.conectarDB();


        //middlewares funciones que agregan ptras funcionalidades
        this.middlewares();

        this.routes();

    }

    //Base de datos
    async conectarDB() {
        await dbConnection();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //lectura y parseo

        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }


    //rutas en donde podemos acceder
    routes(){
        this.app.use(this.usuariosPath , require('../routes/usuarios4'));
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