
const {Schema, model} = require('mongoose');

const UsuarioSchema =  Schema({

    nombre:{
        type :String,
        required : [true, 'El nombre obligatorio']
    },
    correo:{
        type :String,
        required : [true, 'El coreo obligatorio'],
        unique:true
    },
    correo:{
        type :String,
        required : [true, 'El coreo obligatorio'],
        unique:true
    },
    
    password:{
        type :String,
        required : [true, 'El password obligatorio'],
        unique:true
    },
    img :{
        type:String

    },

    rol:{
        type :String,
        required : true,
        unique:['ADMIN_ROLE','USE_ROLE']
    },

    estado:{
        type :Boolean,
        default : true,
        
    },

    google:{
        type :String,
        default : false,
        
    },
})

module.exports = model('Usuarios', UsuarioSchema);