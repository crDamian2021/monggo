/* app8 */
const {response , request} = require('express');


const Usuario = require('../models/usuarios2');


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

    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();
   
    res.json({
        
        msg: 'post api - controlador',
        usuario
    })
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
