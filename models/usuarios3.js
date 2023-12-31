const {Schema , model} = require('mongoose');



const UsuarioSchema = Schema ({

    nombre:{
        type: String,
        required: [true,'El nombre es obligatorio']
    },
    correo:{
        type: String,
        required: [true,'El correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true,'El password es obligatorio'],
        unique: true
    },
    img:{
        type: String
        
    },
    rol:{
        type: String,
        required: true,
        emun:['ADMIN_ROLE', 'USER_ROLE']
    },
    estado:{
        type: Boolean,
        default:false
        
    },
    google:{
        type: String,
        default:false 
        
    }, 
})



module.exports = model('Usuario',UsuarioSchema)