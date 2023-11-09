/* app10 */
const {response , request} = require('express');

const bcryptjs = require('bcryptjs');
/* app10 */
const Usuario = require('../models/usuarios4.js');



const UsuariosGet = ( req = request,res = response)=>{
    const {q, nombre =' No name ' ,apikey}= req.query;

    res.json({
        ok:true,
        msg: 'get api - controlador',
        q,
        nombre,
        apikey
    })
}

const UsuariosPost = async( req ,res = response)=>{

/* onst errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json(errors);
} */

const {nombre, correo, password, rol}= req.body;
const usuario = new Usuario({nombre,correo,password,rol});

/* verificar si el coreo existe */

const existeEmail = await Usuario.findOne({correo});
if (existeEmail){
    return res.status(400).json({
        msg: 'ya existe email'
    });
}

const salt = bcryptjs.genSaltSync();
usuario.password =bcryptjs.hashSync(password, salt);

await usuario.save();

res.json({
    msg:'post API - USUARIO POST',
    usuario
});
}

const UsuariosPut = ( req ,res = response)=>{

    const {id} = req.params;

    res.json({
        ok: true,
        msg: 'put api - controlador',
        id
    })
}

const UsuariosPatch = ( req ,res = response)=>{


    res.json({
        ok: true,
        msg: 'patch api - controlador',
     
    })
}

const UsuariosDelete = ( req ,res = response)=>{


    res.json({
        ok: true,
        msg: 'delete api - controlador',
     
    })
}

module.exports ={
    UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete
}
